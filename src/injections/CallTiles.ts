import { util, webpack } from "replugged";
import { PluginInjector, SettingValues } from "../index";
import Modules from "../lib/requiredModules";
import { defaultSettings } from "../lib/consts";
import Types from "../types";

export default (): void => {
  const { CallTiles } = Modules;
  const loader = webpack.getFunctionKeyBySource(CallTiles, "channel:");
  PluginInjector.after(CallTiles, loader, (_args, res: Types.ReactTree) => {
    const ids = SettingValues.get("ids", defaultSettings.ids);
    const main = util.findInReactTree(
      res,
      (c: Types.ReactTree) =>
        Array.isArray(c?.props?.participants) && Array.isArray(c?.props?.filteredParticipants),
    ) as Types.ReactTree;
    if (!main) return res;
    main.props.participants = main.props.participants.filter(
      (c) => !ids.some(({ userId }) => userId === c?.id),
    );
    main.props.filteredParticipants = main.props.filteredParticipants.filter(
      (c) => !ids.some(({ userId }) => userId === c?.id),
    );
    return res;
  });
};
