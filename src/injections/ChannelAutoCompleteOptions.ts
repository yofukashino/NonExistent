import { PluginInjector, SettingValues } from "../index";
import Modules from "../lib/requiredModules";
import { defaultSettings } from "../lib/consts";

export default (): void => {
  PluginInjector.after(Modules.ChannelAutoCompleteOptions, "default", (_args, res) => {
    const ids = SettingValues.get("ids", defaultSettings.ids);
    if (Array.isArray(res?.[0]?.query?.results?.users))
      res[0].query.results.users = res[0].query.results.users.filter(
        (c) => !ids.some(({ userId }) => userId === c?.user?.id),
      );
    return res;
  });
};
