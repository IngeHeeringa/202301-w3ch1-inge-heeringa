/* eslint-disable @typescript-eslint/consistent-type-imports */
import { Character } from "../Character/Character";
import { CharacterDataStructure, KingStructure } from "../types";

export class King extends Character implements KingStructure {
  constructor(
    characterData: CharacterDataStructure,
    public yearsOfReign: number
  ) {
    super(characterData);
  }

  communicate(): string {
    return `${super.communicate()}Everybody will die`;
  }
}
