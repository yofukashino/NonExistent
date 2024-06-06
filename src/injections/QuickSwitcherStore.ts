import { PluginInjector, SettingValues } from "../index";
import Modules from "../lib/requiredModules";
import { defaultSettings } from "../lib/consts";
import Types from "../types";

export default (): void => {
  PluginInjector.after(
    Modules.QuickSwitcherStore,
    "getProps",
    (
      _args,
      res: Record<string, unknown> & {
        results: Array<Record<string, unknown> & { type: string; record: Types.User }>;
      },
    ) => {
      const ids = SettingValues.get("ids", defaultSettings.ids);
      res.results = res.results.filter(
        (r) => r?.type !== "USER" || !ids.some(({ userId }) => userId === r?.record?.id),
      );
      return res;
    },
  );
};
