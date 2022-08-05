import { AutocompleteSelection } from "../../useAutocompleteController.types";

export const getAutocompleteSelection = (
  target: HTMLInputElement
): AutocompleteSelection | undefined => {
  const { selectionEnd, selectionStart, value } = target;

  if (
    selectionEnd === null ||
    selectionStart === null ||
    selectionEnd !== selectionStart
  )
    return;

  const initialPartOfValue = value.slice(0, selectionEnd);

  const lastWord: string = initialPartOfValue.split(" ").slice(-1)[0];

  return {
    start: selectionEnd - lastWord.length,
    end: selectionEnd,
  };
};
