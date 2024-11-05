import { webpack } from "replugged";
import { PluginInjector, SettingValues } from "../index";
import Modules from "../lib/requiredModules";
import { defaultSettings } from "../lib/consts";

export default (): void => {
  const { RecentMentions } = Modules;
  const loader = webpack.getFunctionKeyBySource(RecentMentions, ".messageGroupWrapper");
  PluginInjector.after(RecentMentions, loader, (_args, res: React.ReactElement) => {
    const ids = SettingValues.get("ids", defaultSettings.ids);
    if (Array.isArray(res?.props?.items))
      res.props.items = res.props.items.filter(
        (i) => !ids.some(({ userId }) => userId === i.message.author.id),
      );
    return res;
  });
};
