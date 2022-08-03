import { FC } from "react";

export type SelectedAttendeeListTileProps = {
  email: string;
  name: string;
};

export type SelectedAttendeeListTileComponent =
  FC<SelectedAttendeeListTileProps>;
