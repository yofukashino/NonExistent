import Types from "./types";

export default [
  {
    find: '("ReadStateStore")',
    replacements: [
      {
        match: /set lastMessageId\((\w+)\){/,
        replace: (prefix: string, messageId: string) =>
          `${prefix}if (replugged.plugins.getExports("dev.yofukashino.NonExistent")?._checkMessageId?.(this.channelId, ${messageId})) return;`,
      },
    ],
  },
] as Types.DefaultTypes.PlaintextPatch[];
