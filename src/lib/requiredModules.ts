import { webpack } from "replugged";
import Types from "../types";
export const Modules: Types.Modules = {};

Modules.loadModules = async (): Promise<void> => {
  Modules.ProfileActions ??= await webpack.waitForProps<Types.ProfileActions>(
    "getUser",
    "fetchProfile",
  );
  Modules.VoiceUser ??= await webpack.waitForProps<Types.VoiceUser>("VoiceUserList", "default");

  Modules.CallTiles ??= await webpack
    .waitForModule<Types.GenericExport>(
      webpack.filters.bySource('this,"handleSelectParticipant",('),
      {
        raw: true,
      },
    )
    .then(({ exports }) => exports);
  Modules.ForYouItems = await webpack.waitForProps<Types.ForYouItems>("ForYouItems");
  Modules.RecentMentions = await webpack.waitForProps<Types.RecentMentions>("EmptyStateCenter");
  Modules.RecentUnread = await webpack.waitForModule<Types.RecentUnread>(
    webpack.filters.bySource("AnalyticEvents.INBOX_CHANNEL_COLLAPSED"),
  );
  Modules.MessageContentGenerator ??= await webpack.waitForProps<Types.MessageContentGenerator>(
    "renderAutomodMessageMarkup",
  );
  Modules.MessageConstructor ??= await webpack.waitForProps<Types.MessageConstructor>(
    "ThreadStarterChatMessage",
  );
  Modules.ReferencedMessage ??= await webpack
    .waitForModule<Types.GenericExport>(
      webpack.filters.bySource(".useClickReferencedMessageAuthorAvatar"),
      {
        raw: true,
      },
    )
    .then(({ exports }) => exports);
  Modules.UserMentions ??= await webpack
    .waitForModule<Types.GenericExport>(webpack.filters.bySource('location:"UserMention"'), {
      raw: true,
    })
    .then(({ exports }) => exports);
  Modules.BlockedMessage ??= await webpack.waitForModule<Types.BlockedMessage>(
    webpack.filters.bySource("collapsed-message-item"),
  );
  Modules.GuildTooltipRow ??= await webpack.waitForModule<Types.GuildTooltipRow>(
    webpack.filters.bySource("=this.renderMoreUsers"),
  );
  Modules.ChannelAutoCompleteOptions = await webpack
    .waitForModule<{ exports: Types.ChannelAutoCompleteOptions }>(
      webpack.filters.bySource("channel-autocomplete"),
      {
        raw: true,
      },
    )
    .then(({ exports }) => exports);
  Modules.RelationshipStore ??=
    webpack.getByStoreName<Types.RelationshipStore>("RelationshipStore");
  Modules.TypingStore ??= webpack.getByStoreName<Types.TypingStore>("TypingStore");
  Modules.ChannelMemberStore ??=
    webpack.getByStoreName<Types.ChannelMemberStore>("ChannelMemberStore");
  Modules.MediaEngineStore ??= webpack.getByStoreName<Types.MediaEngineStore>("MediaEngineStore");
  Modules.ApplicationStreamingStore ??= webpack.getByStoreName<Types.ApplicationStreamingStore>(
    "ApplicationStreamingStore",
  );
  Modules.VoiceStateStore ??= webpack.getByStoreName<Types.VoiceStateStore>("VoiceStateStore");
  Modules.QuickSwitcherStore ??=
    webpack.getByStoreName<Types.QuickSwitcherStore>("QuickSwitcherStore");
  Modules.PrivateChannelSortStore ??=
    webpack.getByStoreName<Types.PrivateChannelSortStore>("PrivateChannelSortStore");
  Modules.IncomingCallStore ??=
    webpack.getByStoreName<Types.IncomingCallStore>("IncomingCallStore");
};

export default Modules;
