import { useCallback, useEffect, useState } from "react";
import {
  AutocompleteControllerHook,
  AutocompleteControllerHookProps,
  AutocompleteControllerState,
} from "./useAutocompleteController.types";
import { getAutocompleteSelection, isAlphabeticalCharacter } from "./utils";

export const useAutocompleteController: AutocompleteControllerHook = <
  T extends unknown
>({
  inputRef,
  fetcher,
  onSelect,
}: AutocompleteControllerHookProps<T>) => {
  const [state, setState] = useState<AutocompleteControllerState<T>>({
    activeIndex: 0,
    isOpen: false,
    items: [],
  });

  const close = useCallback(() => {
    setState({
      activeIndex: 0,
      isOpen: false,
      items: [],
    });
  }, [setState]);

  const handleOnPressArrowUp = useCallback(
    (event: KeyboardEvent) => {
      event.preventDefault();

      setState((state) => {
        if (state.activeIndex <= 0) return state;

        return {
          ...state,
          activeIndex: state.activeIndex - 1,
        };
      });
    },
    [setState]
  );

  const handleOnPressArrowDown = useCallback(
    (event: KeyboardEvent) => {
      event.preventDefault();

      setState((state) => {
        if (state.activeIndex >= state.items.length - 1) return state;

        return {
          ...state,
          activeIndex: state.activeIndex + 1,
        };
      });
    },
    [setState]
  );

  const handleOnCharacterAdded = useCallback(async () => {
    const target = inputRef.current;

    if (!target) return;

    const autocompleteSelection = getAutocompleteSelection(target);

    if (!autocompleteSelection) return;

    const term = target.value.slice(
      autocompleteSelection.start,
      autocompleteSelection.end
    );

    const items = await fetcher(term);

    const hasItems = items.length > 0;

    setState((state) => ({
      ...state,
      items,
      isOpen: hasItems,
      activeIndex: 0,
    }));
  }, [inputRef, fetcher]);

  const handleOnPressEnter = useCallback(
    (event: KeyboardEvent) => {
      event.preventDefault();

      const item = state.items[state.activeIndex];
      const input = inputRef.current;

      if (!item || !input) return;

      const range = getAutocompleteSelection(input);

      if (!range) return;

      onSelect?.(range, item);
      close();
    },
    [state, onSelect, inputRef, close]
  );

  const handleOnKeyDown = useCallback(
    async (event: KeyboardEvent) => {
      if (event.key === "ArrowUp") {
        return handleOnPressArrowUp(event);
      }

      if (event.key === "ArrowDown") {
        return handleOnPressArrowDown(event);
      }

      if (event.key === "Enter") {
        return handleOnPressEnter(event);
      }
    },
    [handleOnPressArrowUp, handleOnPressArrowDown, handleOnPressEnter]
  );

  const handleOnKeyUp = useCallback(
    (event: KeyboardEvent) => {
      if (isAlphabeticalCharacter(event.key)) {
        handleOnCharacterAdded();
      } else if (event.key === "Escape") {
        close();
      }
    },
    [handleOnCharacterAdded, close]
  );

  useEffect(() => {
    const input = inputRef.current;

    if (!input) return;

    input.addEventListener("blur", close);
    input.addEventListener("keyup", handleOnKeyUp);
    input.addEventListener("keydown", handleOnKeyDown);

    return () => {
      input.removeEventListener("blur", close);
      input.removeEventListener("keyup", handleOnKeyUp);
      input.removeEventListener("keydown", handleOnKeyDown);
    };
  }, [inputRef, close, handleOnKeyUp, handleOnKeyDown]);

  return state;
};
