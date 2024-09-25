export const toHyphenCase = (...str) => str.join("-").toLowerCase();

export const toCamelCase = (str) =>
  str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
      index === 0 ? word.toLowerCase() : word.toUpperCase()
    )
    .replace(/\s+/g, "");

export class Section {
  constructor(title, stateValues, setState) {
    this.title = title;
    this.stateValues = stateValues;
    this.setState = setState;
  }

  updateValues(event, field) {
    this.setState({
      ...this.stateValues,
      [field]: event.target.value,
    });
  }
}
