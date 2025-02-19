import {
  channels as UltimateChannelStore,
  messages as UltimateMessageStore,
} from "replugged/common";
import { SettingValues } from "./index";
import { defaultSettings } from "./lib/consts";

export const _checkMessageId = (channelId: string, messageId: string): boolean => {
  const ids = SettingValues.get("ids", defaultSettings.ids);
  const channel = UltimateChannelStore.getChannel(channelId);
  if (!channel) return false;
  const message = UltimateMessageStore.getMessage(channelId, messageId);
  if (!message) return false;
  return ids.some(({ userId }) => userId === message?.author?.id);
};

export const _isHidden = (user: Types.User): boolean => {
  const ids = SettingValues.get("ids", defaultSettings.ids);
  return ids.some(({ userId }) => userId === user?.id);
};
