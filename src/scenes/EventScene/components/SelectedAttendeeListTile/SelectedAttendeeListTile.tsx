import { Flex, Text } from "../../../../components";
import { SelectedAttendeeListTileComponent } from "./SelectedAttendeeListTile.types";

export const SelectedAttendeeListTile: SelectedAttendeeListTileComponent = ({
  email,
  name,
}) => (
  <Flex flexDirection="column" gap="0.25rem">
    <Text>{name}</Text>

    <Text color="secondary">{email}</Text>
  </Flex>
);
