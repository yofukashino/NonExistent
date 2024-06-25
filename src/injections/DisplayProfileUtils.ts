import { webpack } from "replugged";
import { PluginInjector, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import Modules from "../lib/requiredModules";

export default (): void => {
  const { DisplayProfileUtils } = Modules;

  const loader = webpack.getFunctionKeyBySource(DisplayProfileUtils, /\w+\)\(\[\w+\.default/);
  PluginInjector.after(DisplayProfileUtils, loader, ([id], res) => {
    const ids = SettingValues.get("ids", defaultSettings.ids);
    if (ids.some(({ userId }) => userId === id)) {
      return null;
    }
    return res;
  });
};
