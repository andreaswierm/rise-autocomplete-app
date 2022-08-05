import { FC } from "react";

export type AutocompleteAttendeeListTileProps = {
  email: string;
  name: string;
  isActive?: boolean;
};

export type AutocompleteAttendeeListTileComponent =
  FC<AutocompleteAttendeeListTileProps>;
