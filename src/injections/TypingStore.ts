import { PluginInjector, SettingValues } from "../index";
import Modules from "../lib/requiredModules";
import { defaultSettings } from "../lib/consts";

export default (): void => {
  PluginInjector.after(Modules.TypingStore, "getTypingUsers", (_args, res) => {
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
};
