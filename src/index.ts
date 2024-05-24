import { Injector, Logger, settings } from "replugged";
import { defaultSettings } from "./lib/consts";
import "./style.css";
export const PluginInjector = new Injector();
export const { utils: PluginInjectorUtils } = PluginInjector;
export const PluginLogger = Logger.plugin("GenericName", "#b380ff");
export const SettingValues = await settings.init("dev.yofukashino.GenericName", defaultSettings);
import Settings from "./Components/Settings";
import Injections from "./patches/index";
import Listeners from "./listeners/index";

export const start = (): void => {
  Settings.registerSettings();
  Injections.applyInjections();
  Listeners.addListeners();
};

export const stop = (): void => {
  PluginInjector.uninjectAll();
  Listeners.removeListeners();
};

export { Settings } from "./Components/Settings.jsx";
