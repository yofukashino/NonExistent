import { webpack } from "replugged";
import { PluginInjector, SettingValues } from "../index";
import Modules from "../lib/requiredModules";
import { defaultSettings } from "../lib/consts";
import Types from "../types";

export default (): void => {
  const { ReferencedMessage } = Modules;
  const loader = webpack.getFunctionKeyBySource(ReferencedMessage, "channel:");
  PluginInjector.after(
    ReferencedMessage,
    loader,
    (
      [, _, __, ___, { message }]: [unknown, unknown, unknown, unknown, { message: Types.Message }],
      res: string[],
    ) => {
      const ids = SettingValues.get("ids", defaultSettings.ids);
      return ids.some(({ userId }) => userId === message?.author?.id) ? null : res;
    },
  );
};
