import { webpack } from "replugged";
import { PluginInjector, SettingValues } from "../index";
import Modules from "../lib/requiredModules";
import { defaultSettings } from "../lib/consts";

export default (): void => {
  const { UserMentions } = Modules;
  const loader = webpack.getFunctionKeyBySource(UserMentions, "channelId:");
  PluginInjector.after(
    UserMentions,
    loader,
    ([{ userId }]: [{ userId: string }], res: string[]) => {
      const ids = SettingValues.get("ids", defaultSettings.ids);
      return ids.some(({ userId: id }) => userId === id) ? null : res;
    },
  );
};
