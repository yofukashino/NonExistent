import { components as DiscordComponents } from "replugged/common";
import { Clickable, Tooltip } from "replugged/components";
import RemoveCheckmark from "./RemoveCheckmark";
import Types from "../types";
export default ({ user, checked, setChecked }) => {
  const { BlobMask, Avatar } = DiscordComponents as Types.DiscordComponents;
  return (
    <Tooltip text={`${user.globalName} \n @${user.username}`}>
      <Clickable
        onClick={() => {
          setChecked?.(!checked);
        }}>
        <BlobMask
          upperBadge={
            checked ? (
              <RemoveCheckmark className="nonExistent-RemovalCheckmark" width={18} height={18} />
            ) : null
          }>
          <Avatar isMobile={false} isTyping={false} size="SIZE_40" src={user.getAvatarURL()!} />
        </BlobMask>
      </Clickable>
    </Tooltip>
  );
};
