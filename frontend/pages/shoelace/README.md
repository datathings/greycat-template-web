This demonstrate the usage of a 3rd-party WebComponent library named [Shoelace](https://shoelace.style/).

If this is not required make sure to remove:
- this directory
- the dependency in `package.json` (`"@shoelace-style/shoelace": "2.12.0",`)
- the assets in `frontend/public/assets`
- the entry in `vite.config.ts` (`shoelace: resolve(__dirname, 'frontend/pages/shoelace/index.html'),`)