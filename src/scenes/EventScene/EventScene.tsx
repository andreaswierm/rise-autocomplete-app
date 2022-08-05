import { useRef } from "react";
import { DropdownMenu, Flex, Text } from "../../components";
import { EventSceneComponent } from "./EventScene.types";
import { defaultSearchAttendeesFetcher, replaceRange } from "./utils";

import {
  AutocompleteAttendeeListTile,
  EventNameInput,
  Scaffold,
  SelectedAttendeeListTile,
} from "./components";
import { useAutocompleteController } from "../../hooks";
import { useAttendees, useWatchAttendees } from "./hooks";

export const EventScene: EventSceneComponent = ({
  searchAttendeesFetcher = defaultSearchAttendeesFetcher,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { addAttendee, attendees, removeAttendee } = useAttendees();

  const autocompleteController = useAutocompleteController({
    inputRef,
    fetcher: searchAttendeesFetcher,
    onSelect: (selection, attendee) => {
      const input = inputRef.current;

      if (!input) return;

      input.value = replaceRange(
        input.value,
        selection.start,
        selection.end,
        attendee.name
      );

      addAttendee(attendee);
    },
  });

  const { checkAttendees } = useWatchAttendees({
    attendees,
    onRemove: removeAttendee,
  });

  return (
    <Scaffold>
      <Flex flexDirection="column" gap="2rem">
        <DropdownMenu
          isOpen={autocompleteController.isOpen}
          items={autocompleteController.items}
          renderItem={(attendee, index) => (
            <AutocompleteAttendeeListTile
              key={attendee.email}
              name={attendee.name}
              email={attendee.email}
              isActive={autocompleteController.activeIndex === index}
            />
          )}
        >
          <EventNameInput
            ref={inputRef}
            type="text"
            placeholder="Event name"
            onChange={(event) => checkAttendees(event.target.value)}
          />
        </DropdownMenu>

        <Flex gap="1rem">
          <Text color="secondary">Attendees</Text>

          <Flex gap="1rem" flexGrow={1} flexDirection="column">
            {attendees.map((attendee) => (
              <SelectedAttendeeListTile
                key={attendee.email}
                email={attendee.email}
                name={attendee.name}
              />
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Scaffold>
  );
};
