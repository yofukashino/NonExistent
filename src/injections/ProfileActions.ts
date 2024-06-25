import { webpack } from "replugged";
import { PluginInjector, SettingValues } from "../index";
import Modules from "../lib/requiredModules";
import { defaultSettings } from "../lib/consts";

export default (): void => {
  const { ProfileActionsModule } = Modules;
  const getUserProfile = webpack.getFunctionKeyBySource(
    ProfileActionsModule,
    "USER_PROFILE_FETCH_START",
  );
  PluginInjector.instead(ProfileActionsModule, getUserProfile, (args, res) => {
    const ids = SettingValues.get("ids", defaultSettings.ids);
    if (ids.some(({ userId }) => userId === args[0]) && !args[1]?.original) {
      return null;
    }
    return res.call(ProfileActionsModule, ...args);
  });
  const getUser = webpack.getFunctionKeyBySource(ProfileActionsModule, "USER_UPDATE");
  PluginInjector.instead(ProfileActionsModule, getUser, (args, res) => {
    const ids = SettingValues.get("ids", defaultSettings.ids);
    if (ids.some(({ userId }) => userId === args[0]) && !args[1]?.original) {
      return null;
    }
    return res.call(ProfileActionsModule, ...args);
  });
};
