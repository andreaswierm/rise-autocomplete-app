export const isAlphabeticalCharacter = (character: string) =>
  character.length === 1 && RegExp("[a-zA-Z]").test(character);
