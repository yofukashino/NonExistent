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
  {
    find: "multipleBlockedUsers",
    replacements: [
      {
        match: /\.filter\((\w+)=>null!==\w+/g,
        replace: (prefix: string, user: string) =>
          `${prefix}&&!replugged.plugins.getExports("dev.yofukashino.NonExistent")?._isHidden?.(${user})`,
      },
    ],
  },
] as Types.DefaultTypes.PlaintextPatch[];
