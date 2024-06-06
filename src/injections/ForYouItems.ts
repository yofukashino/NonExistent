import { PluginInjector, SettingValues } from "../index";
import Modules from "../lib/requiredModules";
import { defaultSettings } from "../lib/consts";

export default (): void => {
  PluginInjector.before(Modules.ForYouItems.ForYouItems, "type", (args) => {
    const ids = SettingValues.get("ids", defaultSettings.ids);
    args[0].items = args[0].items.filter(
      (i) => !ids.some(({ userId }) => userId === i?.other_user?.id),
    );
    return args;
  });
};
