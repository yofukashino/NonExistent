import { PluginInjector, SettingValues } from "../index";
import Modules from "../lib/requiredModules";
import { defaultSettings } from "../lib/consts";
export default (): void => {
  PluginInjector.before(Modules.BlockedMessage, "type", (args) => {
    const [props] = args;
    const ids = SettingValues.get("ids", defaultSettings.ids);
    if (props?.messages?.content)
      props.messages.content = props?.messages?.content?.filter(
        (c) => !ids.some(({ userId }) => userId === c?.content?.author?.id),
      );
    return args;
  });
  PluginInjector.after(
    Modules.BlockedMessage,
    "type",
    ([{ messages }], res: React.ReactElement) => {
      const ids = SettingValues.get("ids", defaultSettings.ids);
      messages.content = messages?.content?.filter(
        (c) => !ids.some(({ userId }) => userId === c?.content?.author?.id),
      );
      return messages?.content.length ? res : null;
    },
  );
};
