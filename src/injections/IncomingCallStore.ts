import { PluginInjector, SettingValues } from "../index";
import Modules from "../lib/requiredModules";
import { defaultSettings } from "../lib/consts";

export default (): void => {
  PluginInjector.after(Modules.IncomingCallStore, "getIncomingCalls", (_args, res) => {
    const ids = SettingValues.get("ids", defaultSettings.ids);
    return res.filter(({ channel }) => !ids.some(({ channelId }) => channelId === channel.id));
  });

  PluginInjector.after(Modules.IncomingCallStore, "hasIncomingCalls", () => {
    return Boolean(Modules.IncomingCallStore.getIncomingCalls().length);
  });
};
