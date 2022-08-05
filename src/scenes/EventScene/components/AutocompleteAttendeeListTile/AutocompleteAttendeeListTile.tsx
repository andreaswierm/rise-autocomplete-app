import { Flex, Text } from "../../../../components";
import { Container } from "./AutocompleteAttendeeListTile.styles";
import { AutocompleteAttendeeListTileComponent } from "./AutocompleteAttendeeListTile.types";

export const AutocompleteAttendeeListTile: AutocompleteAttendeeListTileComponent =
  ({ name, email, isActive = false }) => (
    <Container isActive={isActive}>
      <Flex flexDirection="column" gap="0.25rem">
        <Text>{name}</Text>

        <Text color="secondary">{email}</Text>
      </Flex>
    </Container>
  );
