import { PluginInjector, SettingValues } from "../index";
import Modules from "../lib/requiredModules";
import { defaultSettings } from "../lib/consts";

export default (): void => {
  PluginInjector.after(
    Modules.PrivateChannelSortStore,
    "getPrivateChannelIds",
    (_args, res: string[]) => {
      const ids = SettingValues.get("ids", defaultSettings.ids);
      return res.filter((id) => !ids.some(({ channelId }) => channelId === id));
    },
  );
};
