import { PluginInjector, SettingValues } from "../index";
import Modules from "../lib/requiredModules";
import { defaultSettings } from "../lib/consts";

export default (): void => {
  PluginInjector.after(
    Modules.UserMentions,
    "default",
    ([{ userId }]: [{ userId: string }], res: string[]) => {
      const ids = SettingValues.get("ids", defaultSettings.ids);
      return ids.some(({ userId: id }) => userId === id) ? null : res;
    },
  );
};
