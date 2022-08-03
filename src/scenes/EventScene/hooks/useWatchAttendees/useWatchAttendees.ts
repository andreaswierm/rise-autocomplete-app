import { useCallback } from "react";
import { WatchAttendeesHook } from "./useWatchAttendees.types";

export const useWatchAttendees: WatchAttendeesHook = ({
  attendees,
  onRemove,
}) => {
  const checkAttendees = useCallback(
    (eventTitle: string) => {
      attendees.forEach((attendee) => {
        const attendeeNameIsPresent = eventTitle.includes(attendee.name);

        if (attendeeNameIsPresent === false) {
          onRemove?.(attendee);
        }
      });
    },
    [attendees, onRemove]
  );

  return {
    checkAttendees,
  };
};
