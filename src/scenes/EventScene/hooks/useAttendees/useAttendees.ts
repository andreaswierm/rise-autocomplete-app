import { useState, useCallback } from "react";
import { uniquenessFilter } from "../../../../utils";
import { Attendee } from "../../EventScene.types";
import { AttendeesHook } from "./useAttendees.types";

export const useAttendees: AttendeesHook = () => {
  const [attendees, setAttendees] = useState<Attendee[]>([]);

  const addAttendee = useCallback(
    (attendee: Attendee) => {
      setAttendees((attendees) =>
        [...attendees, attendee].filter(uniquenessFilter)
      );
    },
    [setAttendees]
  );

  const removeAttendee = useCallback(
    (attendeeToRemove: Attendee) => {
      setAttendees((attendees) =>
        [...attendees].filter(
          (attendee) => attendee.email !== attendeeToRemove.email
        )
      );
    },
    [setAttendees]
  );

  return {
    addAttendee,
    attendees,
    removeAttendee,
  };
};
