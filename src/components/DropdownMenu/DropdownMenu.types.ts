import { ReactElement } from "react";

export type DropdownMenuProps<T extends unknown> = {
  isOpen: boolean;
  items: T[];
  renderItem: (item: T, index: number) => ReactElement;
  children: ReactElement;
};

export type DropdownMenuComponent = <T extends unknown>(
  props: DropdownMenuProps<T>
) => ReactElement;
