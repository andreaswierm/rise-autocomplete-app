import { Attendee } from "../../EventScene.types";

export type WatchAttendeesHookProps = {
  attendees: Attendee[];
  onRemove?: (attendee: Attendee) => void;
};

export type WatchAttendeesHook = (props: WatchAttendeesHookProps) => {
  checkAttendees: (eventTitle: string) => void;
};
