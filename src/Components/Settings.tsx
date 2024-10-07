import {
  fluxDispatcher as FluxDispatcher,
  modal as ModalUtils,
  React,
  channels as UltimateChannelStore,
} from "replugged/common";
import { Button } from "replugged/components";
import { PluginLogger, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import SelectedUsers from "./SelectedUsers";
import Utils from "../lib/utils";
import Types from "../types";

export const registerSettings = (): void => {
  for (const key in defaultSettings) {
    if (SettingValues.has(key as keyof Types.Settings)) return;
    PluginLogger.log(`Adding new setting ${key} with value`, defaultSettings[key]);
    SettingValues.set(key as keyof Types.Settings, defaultSettings[key]);
  }
};
export const Settings = (): React.ReactElement => {
  const [key, setKey] = React.useState(`${Date.now()}`);
  return (
    <div>
      <SelectedUsers
        key={key}
        header="Which Users Should Exist?"
        subText="Your Choice Bends Reality"
        unselectedSubText="These Users Will Stay Non-Existent"
        selectedSubText="These Users Will Exist Again Upon Confirmation"
        userIds={SettingValues.get("ids", defaultSettings.ids).map((u) => u.userId)}
        onConfirm={({ unselectedUsers }) => {
          if (
            JSON.stringify(unselectedUsers.sort(Utils.ascending)) ===
            JSON.stringify(
              SettingValues.get("ids", defaultSettings.ids)
                .map((u) => u.userId)
                .sort(Utils.ascending),
            )
          )
            return;
          const hiddenUsers = unselectedUsers.map((userId) => ({
            userId,
            channelId: UltimateChannelStore.getDMFromUserId(userId),
          }));
          SettingValues.set("ids", hiddenUsers);
          ModalUtils.confirm({
            title: "Restart Discord",
            body: `It is recommended that you restart Discord after changing reality with the plugin. Restart now?`,
            confirmText: "Yes",
            cancelText: "No",
            confirmColor: Button.Colors.RED,
            onConfirm: () => window.location.reload(),
            onCancel: () => FluxDispatcher.dispatch({ type: "LAYER_POP_ALL" }),
          });
        }}
        onCancel={() => {
          setKey(`${Date.now()}`);
        }}
      />
    </div>
  );
};

export default { registerSettings, Settings };
