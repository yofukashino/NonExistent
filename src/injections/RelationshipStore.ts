import { PluginInjector, SettingValues } from "../index";
import Modules from "../lib/requiredModules";
import { defaultSettings } from "../lib/consts";

export default (): void => {
  PluginInjector.after(Modules.RelationshipStore, "getRelationships", (_args, res) => {
    const ids = SettingValues.get("ids", defaultSettings.ids);
    for (const { userId } of ids) {
      if (res[userId])
        Object.defineProperty(res, userId, {
          configurable: true,
          enumerable: false,
          writable: true,
          value: void 0,
        });
    }
    return res;
  });

  PluginInjector.after(Modules.RelationshipStore, "isBlocked", ([id], res) => {
    const ids = SettingValues.get("ids", defaultSettings.ids);
    return ids.some(({ userId }) => userId === id) || res;
  });

  PluginInjector.after(Modules.RelationshipStore, "getPendingCount", () => {
    return Object.entries(Modules.RelationshipStore?.getRelationships?.() ?? {}).filter(
      ([_id, type]) => type === 3,
    ).length;
  });
};
