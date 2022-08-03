import { FC } from "react";

export type Attendee = {
  name: string;
  email: string;
};

export type SearchAttendeesFetcher = (term: string) => Promise<Attendee[]>;

export type EventSceneProps = {
  searchAttendeesFetcher?: SearchAttendeesFetcher;
};

export type EventSceneComponent = FC<EventSceneProps>;
