export const toKebabCase = (...str) => str.join("-").toLowerCase();

export const toCamelCase = (str) =>
  str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
      index === 0 ? word.toLowerCase() : word.toUpperCase()
    )
    .replace(/\s+/g, "");

export const hasNonEmptyValues = (object) =>
  !Object.values(object).every((element) => element === "");

class Section {
  constructor(stateValues, setState) {
    this.stateValues = stateValues;
    this.setState = setState;
  }
}

export class SingleSection extends Section {
  updateValues(e) {
    this.setState({
      ...this.stateValues,
      [e.target.name]: e.target.value,
    });
  }

  setValues(entry) {
    this.setState(
      Object.fromEntries(Object.entries(entry).filter(([key]) => key !== "id"))
    );
  }

  resetValues() {
    this.setState(
      Object.fromEntries(Object.keys(this.stateValues).map((key) => [key, ""]))
    );
  }
}

export class MultiSection extends Section {
  addSection(section) {
    this.setState([
      ...this.stateValues,
      { id: crypto.randomUUID(), ...section },
    ]);
  }

  updateSection(newSection, sectionID) {
    this.setState(
      this.stateValues.map((section) =>
        section.id === sectionID ? { id: sectionID, ...newSection } : section
      )
    );
  }

  deleteSection(sectionID) {
    this.setState(
      this.stateValues.filter((section) => section.id !== sectionID)
    );
  }
}
