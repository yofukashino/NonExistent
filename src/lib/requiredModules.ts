import { webpack } from "replugged";
import Types from "../types";
export const Modules: Types.Modules = {};

Modules.loadModules = async (): Promise<void> => {
  Modules.ProfileActionsModule ??= await webpack
    .waitForModule<Types.GenericModule>(
      webpack.filters.bySource("UserProfileModalActionCreators"),
      {
        timeout: 10000,
      },
    )
    .catch(() => {
      throw new Error("Failed To Find ProfileActions Module");
    });

  Modules.ProfileActions ??= {
    acceptAgreements: webpack.getFunctionBySource(
      Modules.ProfileActionsModule,
      ".USER_ACCEPT_AGREEMENTS",
    ),
    fetchCurrentUser: webpack.getFunctionBySource(
      Modules.ProfileActionsModule,
      "CURRENT_USER_UPDATE",
    ),
    fetchProfile: webpack.getFunctionBySource(
      Modules.ProfileActionsModule,
      "USER_PROFILE_FETCH_START",
    ),
    getUser: webpack.getFunctionBySource(Modules.ProfileActionsModule, "USER_UPDATE"),
    setFlag: webpack.getFunctionBySource(
      Modules.ProfileActionsModule,
      "setFlag: user cannot be undefined",
    ),
  };

  Modules.VoiceUser ??= await webpack
    .waitForModule<Types.VoiceUser>(webpack.filters.bySource("this.renderPrioritySpeaker()"), {
      timeout: 10000,
    })
    .catch(() => {
      throw new Error("Failed To Find VoiceUser Module");
    });
  Modules.CallTiles ??= await webpack
    .waitForModule<Types.GenericExport>(
      webpack.filters.bySource('this,"handleSelectParticipant",('),
      {
        raw: true,
        timeout: 10000,
      },
    )
    .then(({ exports }) => exports)
    .catch(() => {
      throw new Error("Failed To Find CallTiles Module");
    });

  Modules.ForYouItems = await webpack
    .waitForModule<{
      exports: Types.ForYouItems;
    }>(webpack.filters.bySource(".ImpressionNames.NOTIFICATION_CENTER_LANDING"), {
      raw: true,
      timeout: 10000,
    })
    .then(({ exports }) => exports)
    .catch(() => {
      throw new Error("Failed To Find ForYouItems Module");
    });

  Modules.RecentMentions = await webpack
    .waitForModule<Types.RecentMentions>(webpack.filters.bySource(/getProTip:.,renderItem/), {
      timeout: 10000,
    })
    .catch(() => {
      throw new Error("Failed To Find RecentMentions Module");
    });

  Modules.RecentUnread = await webpack
    .waitForModule<Types.RecentUnread>(webpack.filters.bySource(".INBOX_CHANNEL_COLLAPSED,"), {
      timeout: 10000,
    })
    .catch(() => {
      throw new Error("Failed To Find RecentUnread Module");
    });

  Modules.MessageContentGenerator ??= await webpack
    .waitForModule<Types.MessageContentGenerator>(
      webpack.filters.bySource(".parseAutoModerationSystemMessage,"),
      {
        timeout: 10000,
      },
    )
    .catch(() => {
      throw new Error("Failed To Find MessageContentGenertor Module");
    });

  Modules.MessageConstructor ??= await webpack
    .waitForModule<Types.MessageConstructor>(webpack.filters.bySource(".backgroundFlash]"), {
      timeout: 10000,
    })
    .catch(() => {
      throw new Error("Failed To Find MessageConstructor Module");
    });

  Modules.ReferencedMessage ??= await webpack
    .waitForModule<Types.GenericExport>(webpack.filters.bySource(".Messages.DEADCHAT_PROMPT_1;"), {
      raw: true,
      timeout: 10000,
    })
    .then(({ exports }) => exports)
    .catch(() => {
      throw new Error("Failed To Find ReferencedMessage Module");
    });

  Modules.UserMentions ??= await webpack
    .waitForModule<Types.GenericExport>(webpack.filters.bySource('location:"UserMention"'), {
      raw: true,
      timeout: 10000,
    })
    .then(({ exports }) => exports)
    .catch(() => {
      throw new Error("Failed To Find ProfileActions Module");
    });

  Modules.BlockedMessage ??= await webpack
    .waitForModule<Types.BlockedMessage>(webpack.filters.bySource("collapsed-message-item"), {
      timeout: 10000,
    })
    .catch(() => {
      throw new Error("Failed To Find BlockedMessage Module");
    });

  Modules.GuildTooltipRow ??= await webpack
    .waitForModule<Types.GuildTooltipRow>(webpack.filters.bySource("=this.renderMoreUsers"), {
      timeout: 10000,
    })
    .catch(() => {
      throw new Error("Failed To Find GuildTooltipRow Module");
    });

  Modules.ChannelAutoCompleteOptions = await webpack
    .waitForModule<{ exports: Types.ChannelAutoCompleteOptions }>(
      webpack.filters.bySource("channel-autocomplete"),
      {
        raw: true,
        timeout: 10000,
      },
    )
    .then(({ exports }) => exports)
    .catch(() => {
      throw new Error("Failed To Find ChannelAutoCompleteOptions Module");
    });
  Modules.User = await webpack.waitForModule<Types.UserType>(
    webpack.filters.bySource("hasHadPremium(){"),
  );
  Modules.DisplayProfileUtils ??= await webpack
    .waitForModule<Types.DisplayProfileUtils>(
      webpack.filters.bySource(/{guildId:null!=\w+\?\w+:void 0}/),
      { timeout: 10000 },
    )
    .catch(() => {
      throw new Error("Failed To Find DisplayProfileUtils Module");
    });

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
