import Input from "./Input";
import TimeRange from "./TimeRange";
import { toCamelCase, toKebabCase } from "../helpers/utils";
import "../styles/form.css";

const Form = ({ name, inputs, section, timeRange }) => (
  <section>
    <h2>{name}</h2>
    <form>
      {inputs.map((input) => (
        <Input
          {...input}
          key={input.label}
          id={toKebabCase(...name.split(" "), ...input.label.split(" "))}
          value={section.stateValues[toCamelCase(input.label)]}
          onChange={(e) => section.updateValues(e, toCamelCase(input.label))}
        />
      ))}
      {timeRange &&
        ["Start", "End"].map((boundary) => (
          <TimeRange key={boundary} section={section} boundary={boundary} />
        ))}
    </form>
  </section>
);

export default Form;
