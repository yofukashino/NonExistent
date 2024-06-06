import { util } from "replugged";
import { PluginInjector } from "../index";

export const forceRerenderElement = async (selector: string): Promise<void> => {
  const element = await util.waitFor(selector);
  if (!element) return;
  const ownerInstance = util.getOwnerInstance(element);
  const unpatchRender = PluginInjector.instead(ownerInstance, "render", () => {
    unpatchRender();
    return null;
  });
  ownerInstance.forceUpdate(() => ownerInstance.forceUpdate(() => {}));
};

export const ascending = (a: string, b: string): number => {
  return Number(a) - Number(b);
};

export default { ...util, forceRerenderElement, ascending };
