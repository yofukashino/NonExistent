import { util, webpack } from "replugged";
import { PluginInjector } from "../index";
import Types from "../types";

export const forceRerenderElement = async (selector: string): Promise<void> => {
  const element = await util.waitFor(selector);
  if (!element) return;
  const ownerInstance = util.getOwnerInstance(element);
  const unpatchRender = PluginInjector.instead(ownerInstance, "render", () => {
    unpatchRender();
    return null;
  });
  ownerInstance.forceUpdate(() => ownerInstance.forceUpdate(() => {}));
};

export const ascending = (a: string, b: string): number => {
  return Number(a) - Number(b);
};

export const isObject = (testMaterial: unknown): boolean =>
  typeof testMaterial === "object" && !Array.isArray(testMaterial) && testMaterial != null;

export const unmangleExports = <T, M = Types.unmangled<T>>(
  moduleFilter: Types.DefaultTypes.Filter | Types.DefaultTypes.RawModule,
  map: Record<string, string | string[] | RegExp | Types.DefaultTypes.AnyFunction>,
): M => {
  const getExportKeyFinder = (
    mapValue: string | string[] | RegExp | Types.DefaultTypes.AnyFunction,
  ): Types.DefaultTypes.AnyFunction => {
    if (typeof mapValue === "function") {
      return (mod: Types.DefaultTypes.RawModule["exports"]) => {
        return mapValue(mod);
      };
    }

    if (Array.isArray(mapValue)) {
      return (mod: Types.DefaultTypes.RawModule["exports"]) => {
        if (!isObject(mod)) return "";
        for (const [k, exported] of Object.entries(mod)) {
          if (mapValue.every((p) => Object.hasOwnProperty.call(exported, p))) return k;
        }
      };
    }

    return (mod: Types.DefaultTypes.RawModule["exports"]) =>
      webpack.getFunctionKeyBySource(mod, mapValue as string);
  };

  const mod: Types.DefaultTypes.RawModule =
    typeof moduleFilter === "function"
      ? webpack.getModule(moduleFilter, { raw: true })
      : moduleFilter;

  if (!mod) return {} as M;

  const unmangled = { raw: mod.exports } as M;

  for (const key in map) {
    const findKey = getExportKeyFinder(map[key]);
    const valueKey = findKey(mod.exports) as string;
    Object.defineProperty(unmangled, key, {
      get: () => mod.exports[valueKey],
      set: (v) => {
        mod.exports[valueKey] = v;
      },
    });
  }

  return unmangled;
};

export default { ...util, forceRerenderElement, ascending, isObject, unmangleExports };
