import { PluginInjector } from "../index";
import Modules from "../lib/requiredModules";

export default (): void => {
  PluginInjector.after(Modules.MessageContentGenerator, "default", (_args, res) => {
    res.content = res.content.filter(
      (c, i) =>
        (i !== 0 && res.content[i - 1] !== null && c) ||
        typeof c?.props?.children !== "string" ||
        c?.props?.children?.trim?.()?.length,
    );
    if (typeof res?.content?.[0]?.props?.children === "string")
      res.content[0].props.children = res.content?.[0]?.props.children.trimStart();
    return res;
  });
};
