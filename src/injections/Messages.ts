import { messages as UltimateMessageStore } from "replugged/common";
import { PluginInjector, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";

export default (): void => {
  PluginInjector.instead(
    UltimateMessageStore,
    "receiveMessage",
    ([id, message, ...args], res, instance) => {
      const ids = SettingValues.get("ids", defaultSettings.ids);
      if (ids.some(({ userId }) => userId === message?.author?.id)) return {};
      return res.apply(instance, [id, message, ...args]);
    },
  );
};
