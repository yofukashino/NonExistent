import { PluginInjector, SettingValues } from "../index";
import Modules from "../lib/requiredModules";
import { defaultSettings } from "../lib/consts";

export default (): void => {
  PluginInjector.after(Modules.ChannelMemberStore, "getProps", (_args, res) => {
    const ids = SettingValues.get("ids", defaultSettings.ids);
    const groupMap = {};
    for (const { userId } of ids) {
      if (res.rows.some((item) => item.userId === userId))
        res.rows.some((item) => {
          if (item.type === "GROUP") {
            groupMap[userId] = item;
          }
          if (item.type === "MEMBER" && item.userId === userId) return true;
          return false;
        });
    }
    for (const userId in groupMap) {
      const groupIndex = res.groups.findIndex(({ key }) => groupMap[userId].key === key);
      res.groups.forEach((group, i) => {
        if (i < groupIndex) return;
        group.removed ??= [];
        if (!group.removed.some((id) => id === userId)) {
          if (i == groupIndex) group.count -= 1;
          if (groupIndex < i) group.index -= 1;
          group.removed.push(userId);
        }
      });
    }
    res.rows = res.rows.filter((c) => !ids.some(({ userId }) => c.userId === userId));
    return res;
  });
};
