import { types } from "replugged";
import { components } from "replugged/common";
import { Store } from "replugged/dist/renderer/modules/common/flux";
import { ContextMenuProps } from "replugged/dist/renderer/modules/components/ContextMenu";
import type util from "replugged/util";
import GeneralDiscordTypes from "discord-types/general";

export namespace Types {
  export import DefaultTypes = types;
  export type UtilTree = util.Tree;
  export type ReactTree = util.Tree & React.ReactElement;
  export type MenuProps = ContextMenuProps["ContextMenu"];
  export type User = GeneralDiscordTypes.User;
  export type UserType = typeof GeneralDiscordTypes.User;
  export type Channel = GeneralDiscordTypes.Channel;
  export type Message = GeneralDiscordTypes.Message & {
    poll?: Record<string, unknown>;
    changelogId?: string;
    activityInstance: Record<string, unknown>;
  };
  export type OriginalComponentsType = typeof components;
  export type GenericModule = Record<string, DefaultTypes.AnyFunction> & {
    default: DefaultTypes.AnyFunction;
  };
  export interface GenericExport {
    exports?: GenericModule;
    id: string;
    loaded: boolean;
  }
  export interface GenericMemo {
    $$typeof: symbol;
    compare: DefaultTypes.AnyFunction;
    type: DefaultTypes.AnyFunction;
  }
  export interface DiscordComponents extends OriginalComponentsType {
    Scroller: React.ComponentType<{ className?: string; children: React.ReactElement }>;
    Avatar: React.ComponentType<{
      src?: string;
      size?: string;
      status?: string;
      isTyping?: boolean;
      isMobile?: boolean;
      className?: string;
    }>;
    BlobMask: React.ComponentType<{
      lowerBadge?: React.ReactElement;
      upperBadge?: React.ReactElement;
      children: React.ReactElement;
    }>;
  }
  export interface ProfileActions {
    acceptAgreements: DefaultTypes.AnyFunction;
    fetchCurrentUser: DefaultTypes.AnyFunction;
    fetchMutualFriends?: DefaultTypes.AnyFunction;
    fetchProfile: DefaultTypes.AnyFunction;
    getUser: DefaultTypes.AnyFunction;
    getUserProfile: DefaultTypes.AnyFunction;
    setFlag: DefaultTypes.AnyFunction;
  }
  export interface RelationshipStore extends Store {
    getFriendCount: DefaultTypes.AnyFunction;
    getFriendIDs: DefaultTypes.AnyFunction;
    getNickname: DefaultTypes.AnyFunction;
    getOutgoingCount: DefaultTypes.AnyFunction;
    getPendingCount: DefaultTypes.AnyFunction;
    getRelationshipCount: DefaultTypes.AnyFunction;
    getRelationshipType: DefaultTypes.AnyFunction;
    getRelationships: DefaultTypes.AnyFunction;
    getSince: DefaultTypes.AnyFunction;
    getSinces: DefaultTypes.AnyFunction;
    isBlocked: DefaultTypes.AnyFunction;
    isFriend: DefaultTypes.AnyFunction;
  }
  export interface TypingStore extends Store {
    getTypingUsers: DefaultTypes.AnyFunction;
    isTyping: DefaultTypes.AnyFunction;
  }
  export interface ChannelMemberStore extends Store {
    getProps: (
      guildId: string,
      channelId: string,
    ) => {
      groups: Array<{
        count: number;
        id: string;
        index: number;
        key: string;
        title: string;
        type: string;
        removed?: string[];
      }>;
      isRecentlyOnlineEnabled: boolean;
      listId: string;
      rows: Array<{
        count: string;
        id: string;
        index: undefined | number;
        key: string;
        title: string;
        type: string;
        userId?: string;
      }>;
      version: number;
    };
    getRows: DefaultTypes.AnyFunction;
  }
  export interface MediaEngineStore extends Store {
    getAecDump: DefaultTypes.AnyFunction;
    getAttenuateWhileSpeakingOthers: DefaultTypes.AnyFunction;
    getAttenuateWhileSpeakingSelf: DefaultTypes.AnyFunction;
    getAttenuation: DefaultTypes.AnyFunction;
    getAudioSubsystem: DefaultTypes.AnyFunction;
    getAutomaticGainControl: DefaultTypes.AnyFunction;
    getAv1Enabled: DefaultTypes.AnyFunction;
    getCameraComponent: DefaultTypes.AnyFunction;
    getDebugLogging: DefaultTypes.AnyFunction;
    getEchoCancellation: DefaultTypes.AnyFunction;
    getEnableSilenceWarning: DefaultTypes.AnyFunction;
    getEverSpeakingWhileMuted: DefaultTypes.AnyFunction;
    getExperimentalEncoders: DefaultTypes.AnyFunction;
    getExperimentalSoundshare: DefaultTypes.AnyFunction;
    getGoLiveContext: DefaultTypes.AnyFunction;
    getGoLiveSource: DefaultTypes.AnyFunction;
    getH265Enabled: DefaultTypes.AnyFunction;
    getHardwareH264: DefaultTypes.AnyFunction;
    getInputDetected: DefaultTypes.AnyFunction;
    getInputDeviceId: DefaultTypes.AnyFunction;
    getInputDevices: DefaultTypes.AnyFunction;
    getInputVolume: DefaultTypes.AnyFunction;
    getLocalPan: DefaultTypes.AnyFunction;
    getLocalVolume: DefaultTypes.AnyFunction;
    getLoopback: DefaultTypes.AnyFunction;
    getMediaEngine: DefaultTypes.AnyFunction;
    getMode: DefaultTypes.AnyFunction;
    getModeOptions: DefaultTypes.AnyFunction;
    getNoInputDetectedNotice: DefaultTypes.AnyFunction;
    getNoiseCancellation: DefaultTypes.AnyFunction;
    getNoiseSuppression: DefaultTypes.AnyFunction;
    getOpenH264: DefaultTypes.AnyFunction;
    getOutputDeviceId: DefaultTypes.AnyFunction;
    getOutputDevices: DefaultTypes.AnyFunction;
    getOutputVolume: DefaultTypes.AnyFunction;
    getPacketDelay: DefaultTypes.AnyFunction;
    getQoS: DefaultTypes.AnyFunction;
    getSettings: DefaultTypes.AnyFunction;
    getShortcuts: DefaultTypes.AnyFunction;
    getSoundshareEnabled: DefaultTypes.AnyFunction;
    getState: DefaultTypes.AnyFunction;
    getSupportedSecureFramesProtocolVersion: DefaultTypes.AnyFunction;
    getVideoComponent: DefaultTypes.AnyFunction;
    getVideoDeviceId: DefaultTypes.AnyFunction;
    getVideoDevices: DefaultTypes.AnyFunction;
    getVideoHook: DefaultTypes.AnyFunction;
    getVideoStreamParameters: DefaultTypes.AnyFunction;
    getVideoToggleState: DefaultTypes.AnyFunction;
    hasContext: DefaultTypes.AnyFunction;
    initialize: DefaultTypes.AnyFunction;
    isAdvancedVoiceActivitySupported: DefaultTypes.AnyFunction;
    isAecDumpSupported: DefaultTypes.AnyFunction;
    isAnyLocalVideoAutoDisabled: DefaultTypes.AnyFunction;
    isAutomaticGainControlSupported: DefaultTypes.AnyFunction;
    isDeaf: DefaultTypes.AnyFunction;
    isEnabled: DefaultTypes.AnyFunction;
    isExperimentalEncodersSupported: DefaultTypes.AnyFunction;
    isHardwareMute: DefaultTypes.AnyFunction;
    isInteractionRequired: DefaultTypes.AnyFunction;
    isLocalMute: DefaultTypes.AnyFunction;
    isLocalVideoAutoDisabled: DefaultTypes.AnyFunction;
    isLocalVideoDisabled: DefaultTypes.AnyFunction;
    isMediaFilterSettingLoading: DefaultTypes.AnyFunction;
    isMute: DefaultTypes.AnyFunction;
    isNativeAudioPermissionReady: DefaultTypes.AnyFunction;
    isNoiseCancellationError: DefaultTypes.AnyFunction;
    isNoiseCancellationSupported: DefaultTypes.AnyFunction;
    isNoiseSuppressionSupported: DefaultTypes.AnyFunction;
    isScreenSharing: DefaultTypes.AnyFunction;
    isSelfDeaf: DefaultTypes.AnyFunction;
    isSelfMute: DefaultTypes.AnyFunction;
    isSelfMutedTemporarily: DefaultTypes.AnyFunction;
    isSimulcastSupported: DefaultTypes.AnyFunction;
    isSoundSharing: DefaultTypes.AnyFunction;
    isSupported: DefaultTypes.AnyFunction;
    isVideoAvailable: DefaultTypes.AnyFunction;
    isVideoEnabled: DefaultTypes.AnyFunction;
    setCanHavePriority: DefaultTypes.AnyFunction;
    supports: DefaultTypes.AnyFunction;
    supportsDisableLocalVideo: DefaultTypes.AnyFunction;
    supportsEnableSoundshare: DefaultTypes.AnyFunction;
    supportsExperimentalSoundshare: DefaultTypes.AnyFunction;
    supportsInApp: DefaultTypes.AnyFunction;
    supportsScreenSoundshare: DefaultTypes.AnyFunction;
    supportsVideoHook: DefaultTypes.AnyFunction;
  }
  export interface ApplicationStreamingStore extends Store {
    getActiveStreamForApplicationStream: DefaultTypes.AnyFunction;
    getActiveStreamForStreamKey: DefaultTypes.AnyFunction;
    getActiveStreamForUser: DefaultTypes.AnyFunction;
    getAllActiveStreams: DefaultTypes.AnyFunction;
    getAllActiveStreamsForChannel: DefaultTypes.AnyFunction;
    getAllApplicationStreams: DefaultTypes.AnyFunction;
    getAllApplicationStreamsForChannel: DefaultTypes.AnyFunction;
    getAnyStreamForUser: DefaultTypes.AnyFunction;
    getCurrentAppIntent: DefaultTypes.AnyFunction;
    getCurrentUserActiveStream: DefaultTypes.AnyFunction;
    getLastActiveStream: DefaultTypes.AnyFunction;
    getRTCStream: DefaultTypes.AnyFunction;
    getState: DefaultTypes.AnyFunction;
    getStreamForUser: DefaultTypes.AnyFunction;
    getStreamerActiveStreamMetadata: DefaultTypes.AnyFunction;
    getStreamerActiveStreamMetadataForStream: DefaultTypes.AnyFunction;
    getViewerIds: DefaultTypes.AnyFunction;
    isSelfStreamHidden: DefaultTypes.AnyFunction;
  }
  export interface VoiceStateStore extends Store {
    getAllVoiceStates: DefaultTypes.AnyFunction;
    getCurrentClientVoiceChannelId: DefaultTypes.AnyFunction;
    getUserVoiceChannelId: DefaultTypes.AnyFunction;
    getUsersWithVideo: DefaultTypes.AnyFunction;
    getVideoVoiceStatesForChannel: DefaultTypes.AnyFunction;
    getVoicePlatformForChannel: DefaultTypes.AnyFunction;
    getVoiceState: DefaultTypes.AnyFunction;
    getVoiceStateForChannel: DefaultTypes.AnyFunction;
    getVoiceStateForSession: DefaultTypes.AnyFunction;
    getVoiceStateForUser: DefaultTypes.AnyFunction;
    getVoiceStateVersion: DefaultTypes.AnyFunction;
    getVoiceStates: DefaultTypes.AnyFunction;
    getVoiceStatesForChannel: DefaultTypes.AnyFunction;
    hasVideo: DefaultTypes.AnyFunction;
    isCurrentClientInVoiceChannel: DefaultTypes.AnyFunction;
    isInChannel: DefaultTypes.AnyFunction;
    userHasBeenMovedVersion: number;
  }
  export interface QuickSwitcherStore extends Store {
    channelNoticePredicate: DefaultTypes.AnyFunction;

    getChannelHistory: DefaultTypes.AnyFunction;
    getFrequentGuilds: DefaultTypes.AnyFunction;
    getFrequentGuildsLength: DefaultTypes.AnyFunction;
    getProps: DefaultTypes.AnyFunction;
    getResultTotals: DefaultTypes.AnyFunction;
    getState: DefaultTypes.AnyFunction;
    isOpen: DefaultTypes.AnyFunction;
  }
  export interface PrivateChannelSortStore extends Store {
    getPrivateChannelIds: DefaultTypes.AnyFunction;
    getSortedChannels: DefaultTypes.AnyFunction;
    serializeForOverlay: DefaultTypes.AnyFunction;
  }
  export interface IncomingCallStore extends Store {
    getFirstIncomingCallId: DefaultTypes.AnyFunction;
    getIncomingCallChannelIds: DefaultTypes.AnyFunction;
    getIncomingCalls: () => Array<{
      channel: Channel;
      x: number;
      y: number;
    }>;
    hasIncomingCalls: DefaultTypes.AnyFunction;
    initialize: DefaultTypes.AnyFunction;
  }
  export interface VoiceUser {
    VoiceUserList: DefaultTypes.AnyFunction;
    default: DefaultTypes.AnyFunction;
  }
  export interface MessageContentGenerator {
    default: (message: Message) => {
      content: React.ReactElement[];
      hasSpoilerEmbeds: boolean;
    };
    getInitialParserState: DefaultTypes.AnyFunction;
    getInitialParserStateFromMessage: DefaultTypes.AnyFunction;
    renderAutomodMessageMarkup: DefaultTypes.AnyFunction;
    renderChangelogMessageMarkup: DefaultTypes.AnyFunction;
  }
  export interface MessageConstructor {
    ThreadStarterChatMessage: DefaultTypes.AnyFunction;
    default: GenericMemo;
    getElementFromMessage: DefaultTypes.AnyFunction;
  }
  export interface MessageConstructor {
    ThreadStarterChatMessage: DefaultTypes.AnyFunction;
    default: GenericMemo;
    getElementFromMessage: DefaultTypes.AnyFunction;
  }
  export interface GuildTooltipRow {
    Sizes: {
      SIZE_16: number;
      SIZE_24: number;
      SIZE_32: number;
      SIZE_56: number;
    };
    default: DefaultTypes.AnyFunction;
  }
  export interface BlockedMessage extends GenericMemo {
    type: (
      props: {
        channel: Types.Channel;
        collapsedReason: Record<string, unknown>;
        compact: boolean;
        messages: {
          type: string;
          content: Array<{
            content: Types.Message;
            groupId: string;
            type: string;
          }>;
          key: string;
        };
        unreadId: string;
      },
      ...args: unknown[]
    ) => React.ReactElement;
  }
  export interface GuildMemberProfile {
    accentColor: undefined | number;
    banner: undefined | string;
    bio: undefined | string;
    emoji: null | string;
    guildId: string;
    popoutAnimationParticleType: undefined | number;
    pronouns: undefined | string;
    themeColors: undefined | string;
    userId: string;
  }
  interface UserProfile {
    accentColor: undefined | number;
    application: null | string;
    applicationRoleConnections: [];
    banner: undefined | string;
    bio: string;
    connectedAccounts: Array<{ id: string; name: string; type: string; verified: boolean }>;
    emoji: null | string;
    lastFetched: number;
    popoutAnimationParticleType: undefined | number;
    premiumGuildSince: null | number;
    premiumSince: null | number;
    premiumType: null | number;
    profileFetchFailed: boolean;
    pronouns: undefined | string;
    themeColors: undefined | string;
    userId: string;
  }
  export interface DisplayProfile {
    accentColor: number;
    banner: undefined | string;
    bio: string;
    emoji: null | string;
    getBannerURL: DefaultTypes.AnyFunction;
    guildId: undefined | string;
    popoutAnimationParticleType: undefined | number;
    pronouns: string;
    themeColors: undefined | string;
    userId: string;
    _GuildMemberProfile: null | GuildMemberProfile;
    _profileThemesExperimentBucket: number;
    _userProfile: UserProfile;
    application: null;
    canEditThemes: boolean;
    canUsePremiumProfileCustomization: boolean;
    isInEditProfileThemesBucket: boolean;
    premiumGuildSince: null | string;
    premiumSince: null | string;
    premiumType: null | number;
    primaryColor: number;
  }
  export interface DisplayProfileUtils {
    default: (userId: string, guildId: string) => DisplayProfile;
    getDisplayProfile: (userId: string, guildId: string) => DisplayProfile;
    useDisplayProfileWithFetchEffect: (userId: string, guildId: string) => DisplayProfile;
  }
  export interface ChannelAutoCompleteOptions {
    default: (
      options: {
        canMentionChannels: boolean;
        canMentionRoles: boolean;
        canOnlyUseTextCommands: boolean;
        canSendStickers: boolean;
        channel: Channel;
        editorHeight: number;
        editorRef: React.Ref<unknown>;
        expressionPickerView: unknown;
        focused: boolean;
        guild: unknown | null;
        onSendMessage: DefaultTypes.AnyFunction;
        onSendSticker: DefaultTypes.AnyFunction;
        onVisibilityChange: DefaultTypes.AnyFunction;
        position: unknown;
        setValue: DefaultTypes.AnyFunction;
        textValue: string;
        type: Record<string, unknown>;
        useNewSlashCommands: boolean;
      },
      editorRef: React.Ref<unknown>,
      optionsRef: React.Ref<unknown>,
    ) =>
      | [
          {
            didInitialQuery?: boolean;
            isVisible?: boolean;
            query?: {
              isLoading?: boolean;
              options?: Record<string, unknown>;
              queryText?: string;
              resultCount?: number;
              results?: {
                globals?: Array<{
                  description?: string;
                  test?: string;
                  text?: string;
                }>;
                roles?: Array<{
                  color?: number;
                  colorString?: string;
                  flags?: number;
                  hoist?: boolean;
                  icon?: string;
                  id?: string;
                  managed?: boolean;
                  mentionable?: boolean;
                  name?: string;
                  originalPosition?: number;
                  permissions?: bigint;
                  position?: number;
                  tags?: Record<string, string>;
                  unicodeEmoji?: string | null;
                }>;
                users?: Array<{
                  comparator: string;
                  nick: string | null;
                  score: number;
                  status: string;
                }>;
              };
              type?: string;
              typeInfo?: Record<string, unknown>;
            };
            selectedIndex?: number | null;
          },
          Record<string, unknown>,
          Record<string, unknown>,
        ]
      | []
      | void;
  }
  export interface ForYouItems {
    [key: string]: (props: {
      items: Array<
        Record<string, unknown> & {
          other_user: {
            avatar: string;
            avatarDecorationData: Record<string, string>;
            discriminator: string;
            globalName: string;
            id: string;
            publicFlags: number;
            username: string;
          };
        }
      >;
    }) => React.ReactElement;
  }
  export interface RecentMentions {
    EmptyStateCenter: DefaultTypes.AnyFunction;
    Header: DefaultTypes.AnyFunction;
    ItemsPopout: DefaultTypes.AnyFunction;
    default: DefaultTypes.AnyFunction;
  }
  export interface RecentUnread extends GenericMemo {
    type: (
      props: Record<string, unknown> & {
        channel: Record<string, unknown> & {
          mentionCount: number;
          messages: Message[];
          newestUnreadMessageId: string;
          oldestUnreadMessageId: string;
        };
      },
    ) => React.ReactElement;
  }
  export interface VoiceUtils {
    enable: DefaultTypes.AnyFunction;
    interact: DefaultTypes.AnyFunction;
    reset: DefaultTypes.AnyFunction;
    setAecDump: DefaultTypes.AnyFunction;
    setAttenuation: DefaultTypes.AnyFunction;
    setAudioSubsystem: DefaultTypes.AnyFunction;
    setAutomaticGainControl: DefaultTypes.AnyFunction;
    setDebugLogging: DefaultTypes.AnyFunction;
    setDisableLocalVideo: DefaultTypes.AnyFunction;
    setEchoCancellation: DefaultTypes.AnyFunction;
    setExperimentalEncoders: DefaultTypes.AnyFunction;
    setExperimentalSoundshare: DefaultTypes.AnyFunction;
    setGoLiveSource: DefaultTypes.AnyFunction;
    setHardwareEncoding: DefaultTypes.AnyFunction;
    setInputDevice: DefaultTypes.AnyFunction;
    setInputVolume: DefaultTypes.AnyFunction;
    setLocalPan: DefaultTypes.AnyFunction;
    setLocalVolume: DefaultTypes.AnyFunction;
    setLoopback: DefaultTypes.AnyFunction;
    setMode: DefaultTypes.AnyFunction;
    setNoiseCancellation: DefaultTypes.AnyFunction;
    setNoiseSuppression: DefaultTypes.AnyFunction;
    setOpenH264: DefaultTypes.AnyFunction;
    setOutputDevice: DefaultTypes.AnyFunction;
    setOutputVolume: DefaultTypes.AnyFunction;
    setQoS: DefaultTypes.AnyFunction;
    setSelfMute: DefaultTypes.AnyFunction;
    setSilenceWarning: DefaultTypes.AnyFunction;
    setTemporarySelfMute: DefaultTypes.AnyFunction;
    setVideoDevice: DefaultTypes.AnyFunction;
    setVideoEnabled: DefaultTypes.AnyFunction;
    setVideoHook: DefaultTypes.AnyFunction;
    toggleLocalMute: DefaultTypes.AnyFunction;
    toggleLocalSoundboardMute: DefaultTypes.AnyFunction;
    toggleSelfDeaf: DefaultTypes.AnyFunction;
    toggleSelfMute: DefaultTypes.AnyFunction;
  }

  export type unmangled<T> = T & { raw: DefaultTypes.ModuleExports };
  export interface Modules {
    loadModules?: () => Promise<void>;
    ProfileActionsModule?: GenericModule;
    ProfileActions?: Types.unmangled<ProfileActions>;
    VoiceUser?: VoiceUser;
    CallTiles?: GenericModule;
    ForYouItems?: ForYouItems;
    RecentMentions?: RecentMentions;
    RecentUnread?: RecentUnread;
    MessageContentGenerator?: MessageContentGenerator;
    MessageConstructor?: MessageConstructor;
    ReferencedMessage?: GenericModule;
    UserMentions?: GenericModule;
    BlockedMessage?: BlockedMessage;
    GuildTooltipRow?: GuildTooltipRow;
    ChannelAutoCompleteOptions?: ChannelAutoCompleteOptions;
    User?: UserType;
    VoiceUtils?: VoiceUtils;
    DisplayProfileUtils?: DisplayProfileUtils;
    RelationshipStore?: RelationshipStore;
    TypingStore?: TypingStore;
    ChannelMemberStore?: ChannelMemberStore;
    MediaEngineStore?: MediaEngineStore;
    ApplicationStreamingStore?: ApplicationStreamingStore;
    VoiceStateStore?: VoiceStateStore;
    QuickSwitcherStore?: QuickSwitcherStore;
    PrivateChannelSortStore?: PrivateChannelSortStore;
    IncomingCallStore?: IncomingCallStore;
  }
  export interface Settings {
    ids: Array<{ channelId: string; userId: string }>;
  }
}
export default Types;
