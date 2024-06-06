import { parser as Parser } from "replugged/common";
import { PluginInjector, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";

export default (): void => {
  PluginInjector.after(
    Parser.defaultRules.mention,
    "react",
    ([{ userId }]: [{ userId: string }], res: string[]) => {
      const ids = SettingValues.get("ids", defaultSettings.ids);
      return ids.some(({ userId: id }) => userId === id) ? null : res;
    },
  );
};
