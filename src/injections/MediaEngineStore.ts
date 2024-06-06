import { PluginInjector, SettingValues } from "../index";
import Modules from "../lib/requiredModules";
import { defaultSettings } from "../lib/consts";

export default (): void => {
  PluginInjector.after(Modules.MediaEngineStore, "isLocalMute", ([id], res) => {
    const ids = SettingValues.get("ids", defaultSettings.ids);
    return ids.some(({ userId }) => userId === id) || res;
  });

  PluginInjector.after(Modules.MediaEngineStore, "isLocalVideoDisabled", ([id], res) => {
    const ids = SettingValues.get("ids", defaultSettings.ids);
    return ids.some(({ userId }) => userId === id) || res;
  });
};
