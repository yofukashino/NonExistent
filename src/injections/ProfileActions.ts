import { PluginInjector, SettingValues } from "../index";
import Modules from "../lib/requiredModules";
import { defaultSettings } from "../lib/consts";

export default (): void => {
  const { ProfileActions } = Modules;

  PluginInjector.instead(ProfileActions, "getUserProfile", (args, res) => {
    const ids = SettingValues.get("ids", defaultSettings.ids);
    if (ids.some(({ userId }) => userId === args[0]) && !args[1]?.original) {
      return null;
    }
    return res.call(ProfileActions.raw, ...args);
  });

  PluginInjector.instead(ProfileActions, "getUser", (args, res) => {
    const ids = SettingValues.get("ids", defaultSettings.ids);
    if (ids.some(({ userId }) => userId === args[0]) && !args[1]?.original) {
      return null;
    }
    return res.call(ProfileActions.raw, ...args);
  });
};
