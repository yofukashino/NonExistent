import {
  modal as ModalUtils,
  channels as UltimateChannelStore,
  users as UltimateUserStore,
} from "replugged/common";
import { Button, ContextMenu } from "replugged/components";
import { PluginInjectorUtils, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import Types from "../types";

export default (): void => {
  const ContextMenuEntry = (
    { user }: Record<string, unknown> & { user: Types.User },
    menu: Types.MenuProps,
  ): void => {
    if (user.id === UltimateUserStore.getCurrentUser().id) return;
    menu.children = (menu?.children as React.ReactElement[]).filter(
      (c) =>
        !c?.props?.children?.props?.id?.includes?.("nonExistent") &&
        !c?.props?.children?.some?.((i) => i?.props?.id?.includes?.("nonExistent")),
    );
    const index = (menu?.children as React.ReactElement[]).findIndex(
      (c) => c?.props?.id === "replugged",
    );
    const hiddenUsers = SettingValues.get("ids", defaultSettings.ids);
    (menu?.children as React.ReactElement[])?.splice?.(
      index,
      0,
      <ContextMenu.MenuGroup>
        <ContextMenu.MenuItem
          id="nonExistent-hideUser"
          label="Hide User"
          action={() => {
            hiddenUsers.push({
              userId: user.id,
              channelId: UltimateChannelStore.getDMFromUserId(user.id),
            });
            SettingValues.set("ids", hiddenUsers);
            ModalUtils.confirm({
              title: "Restart Discord",
              body: `It is recommended that you restart Discord after changing reality with the plugin. Restart now?`,
              confirmText: "Yes",
              cancelText: "No",
              confirmColor: Button.Colors.RED,
              onConfirm: () => window.location.reload(),
            });
          }}
        />
      </ContextMenu.MenuGroup>,
    );
  };
  PluginInjectorUtils.addMenuItem(
    Types.DefaultTypes.ContextMenuTypes.UserContext,
    ContextMenuEntry,
  );
  PluginInjectorUtils.addMenuItem(
    Types.DefaultTypes.ContextMenuTypes.UserProfileActions,
    ContextMenuEntry,
  );
  // @ts-expect-error just bandage
  PluginInjectorUtils.addMenuItem("user-profile-overflow-menu", ContextMenuEntry);
};
