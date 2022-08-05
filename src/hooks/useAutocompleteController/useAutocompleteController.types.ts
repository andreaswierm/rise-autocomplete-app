import { MutableRefObject } from "react";

export type AutocompleteControllerState<T> = {
  activeIndex: number;
  isOpen: boolean;
  items: T[];
};

export type AutocompleteSelection = {
  start: number;
  end: number;
};

export type AutocompleteControllerHookProps<T> = {
  inputRef: MutableRefObject<HTMLInputElement | null>;
  fetcher: (term: string) => Promise<T[]>;
  onSelect?: (autocompleteSelection: AutocompleteSelection, item: T) => void;
};

export type AutocompleteControllerHook = <T extends unknown>(
  props: AutocompleteControllerHookProps<T>
) => AutocompleteControllerState<T>;
