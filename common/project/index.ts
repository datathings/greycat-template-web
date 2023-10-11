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
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        current_time: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        text: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
      });
    }

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
}

export const projectlib: $sdk.Library = {
  name: 'project',
  mapped: new globalThis.Array(1),
  configure(loaders, factories) {
    factories.set(hello.HelloInfo._type, hello.HelloInfo);
  },
  init(abi) {
    this.mapped[0] = abi.type_by_fqn.get(hello.HelloInfo._type);
    if (this.mapped[0] !== undefined) {
      this.mapped[0].resolveGeneratedOffsets('current_time','text');
    }
  },
};
