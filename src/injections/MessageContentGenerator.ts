import { webpack } from "replugged";
import { PluginInjector } from "../index";
import Modules from "../lib/requiredModules";
import Types from "../types";

export default (): void => {
  const { MessageContentGenerator } = Modules;
  const loader = webpack.getFunctionKeyBySource(
    MessageContentGenerator,
    "hideSimpleEmbedContent:",
  ) as "default";

  PluginInjector.after(Modules.MessageContentGenerator, loader, (_args, res) => {
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
