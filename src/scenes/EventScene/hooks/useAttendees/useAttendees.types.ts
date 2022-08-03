import { Attendee } from "../../EventScene.types";

export type AttendeesHook = () => {
  attendees: Attendee[];
  addAttendee: (attendee: Attendee) => void;
  removeAttendee: (attendee: Attendee) => void;
};
