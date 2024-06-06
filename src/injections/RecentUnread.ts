import { users as UltimateUserStore } from "replugged/common";
import { PluginInjector, SettingValues } from "../index";
import Modules from "../lib/requiredModules";
import { defaultSettings } from "../lib/consts";

export default (): void => {
  PluginInjector.before(Modules.RecentUnread, "type", (args) => {
    const currentUser = UltimateUserStore.getCurrentUser();
    const ids = SettingValues.get("ids", defaultSettings.ids);
    const [props] = args;
    if (!Array.isArray(props.channel.messages)) return args;
    props.channel.messages = props.channel.messages.filter(
      (m) => !ids.some(({ userId }) => userId === m.author.id),
    );
    props.channel.newestUnreadMessageId =
      props.channel.messages[props.channel.messages.length - 1]?.id;
    props.channel.oldestUnreadMessageId = props.channel.messages[0]?.id;
    props.channel.mentionCount = props.channel.messages.filter(
      (m) => m.mentionEveryone || m.mentioned || m.mentions.some((id) => currentUser.id === id),
    ).length;
    if (props.channel.messages.length) props.channel.isFullyLoaded = true;

    return args;
  });
};
