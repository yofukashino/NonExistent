import { users as UltimateUserStore } from "replugged/common";
import { PluginInjector, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import Modules from "../lib/requiredModules";
export default (): void => {
  PluginInjector.instead(
    UltimateUserStore,
    "getUser",
    ([id, original]: [string, boolean], res, instance) => {
      const ids = SettingValues.get("ids", defaultSettings.ids);

      if (!original && ids.some(({ userId }) => userId === id)) {
        const ret = res.call(instance, "456226577798135808") ?? {};
        return new Modules.User({ ...ret, id });
      }

      return res.call(instance, id);
    },
  );
};
