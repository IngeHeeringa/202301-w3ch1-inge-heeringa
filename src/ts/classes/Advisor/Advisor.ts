import {
  type CharacterDataStructure,
  type AdvisorStructure,
} from "../../types";
import Character from "../Character/Character";

export class Advisor extends Character implements AdvisorStructure {
  constructor(
    characterData: CharacterDataStructure,
    public advises: Character
  ) {
    super(characterData);
    if (advises instanceof Character) {
      this.advises = advises;
    }
  }

  communicate(): string {
    return `${super.communicate()}I have a funny feeling that I'm going to die`;
  }
}
