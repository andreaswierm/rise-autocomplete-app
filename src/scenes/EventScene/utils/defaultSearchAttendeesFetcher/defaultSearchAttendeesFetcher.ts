import { Attendee, SearchAttendeesFetcher } from "../../EventScene.types";

const mockAttendees: Attendee[] = [
  {
    name: "Baghera",
    email: "baguera@gmail.com",
  },
  {
    name: "Sherikhan",
    email: "sheri@gmail.com",
  },
  {
    name: "Andreas",
    email: "andreas@gmail.com",
  },
  {
    name: "Andre",
    email: "andre@gmail.com",
  },
  {
    name: "Bruna",
    email: "bruna@gmail.com",
  },
];

export const defaultSearchAttendeesFetcher: SearchAttendeesFetcher = async (
  name
) => {
  return mockAttendees.filter((attendee) =>
    attendee.name.toLowerCase().startsWith(name.toLowerCase())
  );
};
