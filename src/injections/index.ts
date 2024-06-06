import Modules from "../lib/requiredModules";
import injectApplicationStreamingStore from "./ApplicationStreamingStore";
import injectBlockedMessage from "./BlockedMessage";
import injectCallTiles from "./CallTiles";
import injectChannelAutoCompleteOptions from "./ChannelAutoCompleteOptions";
import injectChannelMemberStore from "./ChannelMemberStore";
import injectForYouItems from "./ForYouItems";
import injectGuildTooltipRow from "./GuildTooltipRow";
import injectIncomingCallStore from "./IncomingCallStore";
import injectMediaEngineStore from "./MediaEngineStore";
import injectMessageConstructor from "./MessageConstructor";
import injectMessageContentGenerator from "./MessageContentGenerator";
import injectMessages from "./Messages";
import injectParser from "./Parser";
import injectPrivateChannelSortStore from "./PrivateChannelSortStore";
import injectQuickSwitcherStore from "./QuickSwitcherStore";
import injectRecentMentions from "./RecentMentions";
import injectRecentUnread from "./RecentUnread";
import injectReferencedMessage from "./ReferencedMessage";
import injectRelationshipStore from "./RelationshipStore";
import injectTypingStore from "./TypingStore";
import injectUserContext from "./UserContext";
import injectUserMention from "./UserMention";
import injectVoiceStateStore from "./VoiceStateStore";
import injectVoiceUser from "./VoiceUser";
export const applyInjections = async (): Promise<void> => {
  await Modules.loadModules();
  injectApplicationStreamingStore();
  injectBlockedMessage();
  injectCallTiles();
  injectChannelAutoCompleteOptions();
  injectChannelMemberStore();
  injectForYouItems();
  injectGuildTooltipRow();
  injectIncomingCallStore();
  injectMediaEngineStore();
  injectMessageConstructor();
  injectMessageContentGenerator();
  injectMessages();
  injectParser();
  injectPrivateChannelSortStore();
  injectQuickSwitcherStore();
  injectRecentMentions();
  injectRecentUnread();
  injectReferencedMessage();
  injectRelationshipStore();
  injectTypingStore();
  injectUserContext();
  injectUserMention();
  injectVoiceStateStore();
  injectVoiceUser();
};

export default { applyInjections };