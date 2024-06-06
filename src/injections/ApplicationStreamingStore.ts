import { PluginInjector, SettingValues } from "../index";
import Modules from "../lib/requiredModules";
import { defaultSettings } from "../lib/consts";

export default (): void => {
  PluginInjector.after(
    Modules.ApplicationStreamingStore,
    "getViewerIds",
    (_args, res: string[]) => {
      const ids = SettingValues.get("ids", defaultSettings.ids);
      return res.filter((id) => !ids.some(({ userId }) => userId === id));
    },
  );
};
