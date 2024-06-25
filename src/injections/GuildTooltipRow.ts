import { webpack } from "replugged";
import { PluginInjector, SettingValues } from "../index";
import Modules from "../lib/requiredModules";
import { defaultSettings } from "../lib/consts";
import Types from "../types";

export default (): void => {
  const TooltipRow = webpack.getFunctionBySource<Types.DefaultTypes.AnyFunction>(
    Modules.GuildTooltipRow,
    "defaultRenderUser",
  );

  PluginInjector.after(TooltipRow.prototype, "renderUsers", (_args, res: React.ReactElement[]) => {
    const ids = SettingValues.get("ids", defaultSettings.ids);
    return res.filter((c) => !ids.some(({ userId }) => userId === c.key));
  });
};
