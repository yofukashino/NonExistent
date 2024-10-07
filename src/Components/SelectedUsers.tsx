import {
  components as DiscordComponents,
  React,
  users as UltimateUserStore,
} from "replugged/common";
import { Button, Flex, Loader, Text } from "replugged/components";
import Modules from "../lib/requiredModules";
import User from "./User";
import Types from "../types";
export default ({
  header,
  subText,
  unselectedSubText,
  selectedSubText,
  userIds,
  onConfirm,
  onCancel,
}: {
  header?: string;
  subText?: string;
  unselectedSubText?: string;
  selectedSubText?: string;
  userIds?: string[];
  onConfirm?: (users: { unselectedUsers: string[]; selectedUsers: string[] }) => void;
  onCancel?: () => void;
}) => {
  const { Scroller } = DiscordComponents as Types.DiscordComponents;
  const [mappedUser, setMappedUsers] = React.useState({});
  const [unselectedUsers, setUnselectedUsers] = React.useState(userIds);
  const [selectedUsers, setSelectedUsers] = React.useState([]);
  React.useEffect(() => {
    const fetchUserAndMap = async (): Promise<void> => {
      for (const userId of userIds) {
        await Modules?.ProfileActions?.fetchProfile?.(userId, {
          original: true,
          withMutualGuilds: false,
        });
      }
      setMappedUsers(
        Object.fromEntries(
          userIds.map((id) => [
            id,
            (UltimateUserStore.getUser as (id: string, original: boolean) => Types.User)(id, true),
          ]),
        ),
      );
    };
    fetchUserAndMap();
  }, [userIds]);
  const toogleUser = (userId: string, toggle: boolean): void => {
    if (toggle) {
      setUnselectedUsers((prevUnselected) => prevUnselected.filter((id) => id !== userId));
      setSelectedUsers((prevSelected) => [...prevSelected, userId]);
    } else {
      setSelectedUsers((prevSelected) => prevSelected.filter((id) => id !== userId));
      setUnselectedUsers((prevUnselected) => [...prevUnselected, userId]);
    }
  };
  return (
    <Flex
      direction={Flex.Direction.VERTICAL}
      style={{ gap: "16px" }}
      className="nonExistent-UserSelector">
      <Flex direction={Flex.Direction.VERTICAL} align={Flex.Align.CENTER} style={{ gap: "5px" }}>
        <Text.H1>{header}</Text.H1>
        <Text.H4>{subText}</Text.H4>
      </Flex>
      <Flex
        direction={Flex.Direction.VERTICAL}
        align={Flex.Align.CENTER}
        style={{ gap: "16px" }}
        key={JSON.stringify(mappedUser)}>
        <div className="nonExistent-RemovalRow">
          <div className="nonExistent-RemovalRowHeader">
            <Text.H2>Unselected ({unselectedUsers.length || "0"})</Text.H2>
            <Text.Normal>{unselectedSubText}</Text.Normal>
            <Button
              className={[
                "nonExistent-ToggleAll",
                unselectedUsers.length <= 1 && "nonExistent-hidden",
              ]
                .filter(Boolean)
                .join(" ")}
              color={Button.Colors.TRANSPARENT}
              look={Button.Looks.OUTLINED}
              size={Button.Sizes.SMALL}
              onClick={() => {
                for (const userId of unselectedUsers) {
                  toogleUser(userId, true);
                }
              }}>
              All
            </Button>
          </div>
          {Object.keys(mappedUser).length ? (
            <Scroller className="nonExistent-RemovalScroller">
              <div className="nonExistent-RemovalScrollerInner">
                {unselectedUsers.map(
                  (userId) =>
                    mappedUser[userId] && (
                      <User
                        user={mappedUser[userId]}
                        checked={false}
                        setChecked={(e) => {
                          toogleUser(userId, e);
                        }}
                      />
                    ),
                )}
                <Flex
                  direction={Flex.Direction.VERTICAL}
                  align={Flex.Align.CENTER}
                  justify={Flex.Justify.END}
                  className={[
                    "nonExistent-Waumpus",
                    unselectedUsers.length !== 0 && "nonExistent-hidden",
                  ]
                    .filter(Boolean)
                    .join(" ")}>
                  <img src="/assets/68691bc51a5e2da8e8cf.svg" className="nonExistent-WaumpusImg" />
                  <Text.Normal className="nonExistent-WaumpusText">
                    Wumpus Exists in nothingness
                  </Text.Normal>
                </Flex>
              </div>
            </Scroller>
          ) : (
            <Loader type={Loader.Type.WANDERING_CUBES} style={{ display: "flex", height: "75%" }} />
          )}
        </div>
        <div
          className={["nonExistent-RemovalRow", selectedUsers.length === 0 && "nonExistent-hidden"]
            .filter(Boolean)
            .join(" ")}>
          <div className="nonExistent-RemovalRowHeader">
            <Text.H2>Selected ({selectedUsers.length || "0"})</Text.H2>
            <Text.Normal>{selectedSubText}</Text.Normal>
            <Button
              className={[
                "nonExistent-ToggleAll",
                selectedUsers.length <= 1 && "nonExistent-hidden",
              ]
                .filter(Boolean)
                .join(" ")}
              color={Button.Colors.TRANSPARENT}
              look={Button.Looks.OUTLINED}
              size={Button.Sizes.SMALL}
              onClick={() => {
                for (const userId of selectedUsers) {
                  toogleUser(userId, false);
                }
              }}>
              All
            </Button>
          </div>
          <Scroller className="nonExistent-RemovalScroller">
            <div className="nonExistent-RemovalScrollerInner">
              {selectedUsers.map(
                (userId) =>
                  mappedUser[userId] && (
                    <User
                      user={mappedUser[userId]}
                      checked={true}
                      setChecked={(e) => {
                        toogleUser(userId, e);
                      }}
                    />
                  ),
              )}
            </div>
          </Scroller>
        </div>
      </Flex>
      <Flex
        direction={Flex.Direction.HORIZONTAL}
        align={Flex.Align.CENTER}
        justify={Flex.Justify.BETWEEN}
        style={{ paddingLeft: "50px", paddingRight: "50px" }}>
        <Button
          color={Button.Colors.TRANSPARENT}
          look={Button.Looks.OUTLINED}
          onClick={onCancel ?? (() => {})}>
          Cancel
        </Button>
        <Button
          color={Button.Colors.TRANSPARENT}
          look={Button.Looks.OUTLINED}
          onClick={() => {
            onConfirm?.({ unselectedUsers, selectedUsers });
          }}>
          Confirm
        </Button>
      </Flex>
    </Flex>
  );
};
