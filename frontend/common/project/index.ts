// AUTO-GENERATED FILE PLEASE DO NOT MODIFY MANUALLY
/* eslint-disable */
// @ts-nocheck

import * as $sdk from '@greycat/web';
import * as project_n from '../../project_n/index.js';

export namespace project {
}

export namespace hello {
  export class HelloInfo extends $sdk.GCObject {
    static readonly _type = 'hello::HelloInfo';

    current_time: $sdk.std.core.time;
    text: string;

    static createFrom({current_time, text}: {current_time: $sdk.std.core.time, text: string}, $g: $sdk.GreyCat = globalThis.greycat.default): HelloInfo {
      return new HelloInfo($g.abi.libs_by_name.get(projectlib.name)!.mapped[0], current_time, text);
    }
    static create(current_time: $sdk.std.core.time, text: string, $g: $sdk.GreyCat = globalThis.greycat.default): HelloInfo {
      return new HelloInfo($g.abi.libs_by_name.get(projectlib.name)!.mapped[0], current_time, text);
    }
  }

  export function get_hello_info(text: string, $g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<hello.HelloInfo> {
    return $g.call('hello::get_hello_info', [text], $signal);
  }
  export function table_example(data: string, $g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<$sdk.std.core.Table> {
    return $g.call('hello::table_example', [data], $signal);
  }
  export function protected_endpoint($g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<string> {
    return $g.call('hello::protected_endpoint', undefined, $signal);
  }
}

export namespace $anon$ {
}

export const projectlib: $sdk.Library = {
  name: 'project',
  mapped: new globalThis.Array(1),
  configure(loaders, factories) {
    factories.set(hello.HelloInfo._type, hello.HelloInfo);
  },
  init(abi) {
    this.mapped[0] = abi.type_by_fqn.get(hello.HelloInfo._type);
  },
};
