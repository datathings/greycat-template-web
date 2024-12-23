import path, { resolve } from 'path';
import { type PluginOption, defineConfig } from 'vite';
import httpProxy from 'http-proxy';
import { readFileSync } from 'fs';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    base: '', // makes path relative to the deployment directory
    plugins: [svg(), greycatProxy()],
    appType: 'mpa',
    esbuild: {
      supported: {
        'top-level-await': true, // browsers can handle top-level-await features
      },
    },
    publicDir: resolve(__dirname, 'frontend/public'),
    root: resolve(__dirname, 'frontend/pages'),
    define: {
      // This ensures libraries that leverages 'process.env.NODE_ENV'
      // have it replaced statically before dead-code removal
      'process.env.NODE_ENV': JSON.stringify(mode),
    },
    resolve: {
      alias: {
        // The following enables:
        //   import ... from '@/common/app-layout';
        // rather than
        //   import ... from '../../common/app-layout';
        '@': resolve(__dirname, 'frontend'),
      },
    },
    build: {
      emptyOutDir: true,
      outDir: resolve(__dirname, 'dist'),
      rollupOptions: {
        input: [
          // list your entrypoints in 'input'
          //
          // eg. `hello: resolve(__dirname, 'pages/hello/index.html'),`
          // (see. https://vitejs.dev/guide/build.html#multi-page-app)
          resolve(__dirname, 'frontend/pages/index.html'),
          resolve(__dirname, 'frontend/pages/about/index.html'),
        ],
        output: {
          manualChunks: {
            greycat: ['@greycat/web'],
          },
        },
      },
    },
  };
});

/**
 * This plugin ensures '^/files' and POST requests are proxied to GreyCat rather
 * than trying to be answered by vitejs's dev server.
 */
function greycatProxy(): PluginOption {
  // If you are not running GreyCat on the default :8080 port, update the `target`:
  const proxy = httpProxy.createProxyServer({
    target: 'http://127.0.0.1:8080',
  });

  return {
    name: 'greycat-proxy',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.originalUrl && req.headers.upgrade !== 'websocket') {
          const isFileApi =
            (req.method === 'GET' || req.method === 'PUT' || req.method === 'DELETE') &&
            req.originalUrl.match(/^\/files\//);
          const isRpc = !isFileApi && req.method === 'POST';
          if (isFileApi || isRpc) {
            // proxy to GreyCat
            proxy.web(req, res, {}, (err) => {
              console.error(
                `${err.code}: make sure GreyCat is started and listening at ${proxy.options.target}`,
              );
              return;
            });
            return;
          }
        }
        next();
      });
    },
  };
}

function svg(): PluginOption {
  return {
    name: 'vite-plugin-svg',
    load(id) {
      if (id.endsWith('.svg')) {
        return null;
      }
      return null;
    },
    transform(_src, id) {
      if (id.endsWith('.svg')) {
        const src = readFileSync(id, 'utf-8');
        const code = [
          'const parser = new DOMParser();',
          `const svgDoc = parser.parseFromString('${src.replaceAll(/\n/g, '')}', 'image/svg+xml');`,
          'export default svgDoc.documentElement',
        ].join('\n');
        return { code, map: null };
      }
    },
  };
}
