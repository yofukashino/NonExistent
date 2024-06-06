import { PluginInjector, SettingValues } from "../index";
import Modules from "../lib/requiredModules";
import { defaultSettings } from "../lib/consts";

export default (): void => {
  PluginInjector.after(
    Modules.GuildTooltipRow.default.prototype,
    "renderUsers",
    (_args, res: React.ReactElement[]) => {
      const ids = SettingValues.get("ids", defaultSettings.ids);
      return res.filter((c) => !ids.some(({ userId }) => userId === c.key));
    },
  );
};
