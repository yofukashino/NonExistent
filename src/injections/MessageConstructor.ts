import { PluginInjector, SettingValues } from "../index";
import Modules from "../lib/requiredModules";
import { defaultSettings } from "../lib/consts";
import Types from "../types";

export default (): void => {
  PluginInjector.after(
    Modules.MessageConstructor.default,
    "type",
    ([{ message }]: [{ message: Types.Message }], res: React.ReactElement[]) => {
      const ids = SettingValues.get("ids", defaultSettings.ids);
      if (ids.some(({ userId }) => userId === message?.author?.id)) return null;
      if (
        message.type == 0 &&
        !Modules?.MessageContentGenerator.default(message).content.filter(Boolean).length &&
        !message?.embeds?.length &&
        !message?.attachments?.length &&
        !message?.stickerItems?.length &&
        !message?.stickers?.length &&
        !message?.giftCodes?.length &&
        !message?.components?.length &&
        !message?.codedLinks?.length &&
        !message?.call &&
        !message?.activity &&
        !message?.webhookId &&
        !message?.poll &&
        !message?.interaction &&
        !message?.customRenderedContent &&
        !message?.changelogId &&
        !message?.activityInstance
      )
        return null;
      return res;
    },
  );
};
