import type { PluginObject } from "./validation/plugins";

export default class Plugin {
  key: string | undefined | null;
  manipulateOptions?: (options: unknown, parserOpts: unknown) => void;
  post?: Function;
  pre?: Function;
  visitor: {};

  parserOverride?: Function;
  generatorOverride?: Function;

  options: {};

  constructor(plugin: PluginObject, options: {}, key?: string) {
    this.key = plugin.name || key;

    this.manipulateOptions = plugin.manipulateOptions;
    this.post = plugin.post;
    this.pre = plugin.pre;
    this.visitor = plugin.visitor || {};
    this.parserOverride = plugin.parserOverride;
    this.generatorOverride = plugin.generatorOverride;

    this.options = options;
  }
}
