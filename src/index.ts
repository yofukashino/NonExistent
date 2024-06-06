import { Injector, Logger, settings } from "replugged";
import { defaultSettings } from "./lib/consts";
import "./style.css";
export const PluginInjector = new Injector();
export const { utils: PluginInjectorUtils } = PluginInjector;
export const PluginLogger = Logger.plugin("NonExistent", "#b380ff");
export const SettingValues = await settings.init("dev.yofukashino.NonExistent", defaultSettings);
import Settings from "./Components/Settings";
import Injections from "./injections";

export const start = (): void => {
  Settings.registerSettings();
  void Injections.applyInjections();
};

export const stop = (): void => {
  PluginInjector.uninjectAll();
};

export { Settings } from "./Components/Settings";

export { _checkMessageId } from "./plaintextFunctions";
