// AUTO-GENERATED FILE PLEASE DO NOT MODIFY MANUALLY
/* eslint-disable */
import * as $greycat from '@greycat/web';

export namespace project {
  export class Root extends $greycat.GCObject {
    static readonly _type = 'project::Root';


  }

}

export namespace info {
  export class DepInfo extends $greycat.GCObject {
    static readonly _type = 'info::DepInfo';

    name!: string;
    version!: string;
    license!: string;

    static createFrom({name, version, license}: {name: string, version: string, license: string}, $g: $greycat.GreyCat = $greycat.$.default): DepInfo {
      return new DepInfo($g.abi.libs_by_name.get(projectlib.name)!.mapped[1], name, version, license);
    }
    static create(name: string, version: string, license: string, $g: $greycat.GreyCat = $greycat.$.default): DepInfo {
      return new DepInfo($g.abi.libs_by_name.get(projectlib.name)!.mapped[1], name, version, license);
    }
  }

  export function info($g: $greycat.GreyCat = $greycat.$.default, $signal?: AbortSignal): Promise<$greycat.std.core.Table<info.DepInfo>> {
    return $g.call('info::info', undefined, $signal);
  }
}

export const projectlib: $greycat.Library = {
  name: 'project',
  mapped: new globalThis.Array(3),
  configure(loaders, factories) {
    factories.set(project.Root._type, project.Root);
    factories.set(info.DepInfo._type, info.DepInfo);
  },
  init(abi) {
    this.mapped[0] = abi.type_by_fqn.get(project.Root._type)!;
    this.mapped[1] = abi.type_by_fqn.get(info.DepInfo._type)!;
    this.mapped[2] = abi.type_by_fqn.get('info::info_args')!;
  },
};

declare global {
  namespace greycat {
    interface GreyCat {
      call(method: 'info::info', args?: undefined, signal?: AbortSignal): Promise<$greycat.std.core.Table<info.DepInfo>>;
      spawn(method: 'info::info', args?: undefined, signal?: AbortSignal): Promise<$greycat.std.runtime.Task>;
      spawnAwait(method: 'info::info', args?: undefined, pollEvery?: number, signal?: AbortSignal): Promise<$greycat.std.core.Table<info.DepInfo>>;
    }
  }
}
