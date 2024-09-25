import Input from "./input";
import TimeRange from "./time-range";
import "../styles/form.css";
import { toCamelCase, toHyphenCase } from "../helpers/utils";

const Form = (props) => (
  <section>
    <h2>{props.name}</h2>
    <form>
      {props.inputs.map((input) => (
        <Input
          {...input}
          key={input.label}
          id={toHyphenCase(...props.name.split(" "), ...input.label.split(" "))}
          value={props.section.stateValues[toCamelCase(input.label)]}
          onChange={(e) =>
            props.section.updateValues(e, toCamelCase(input.label))
          }
        />
      ))}
      {props.timeRange &&
        ["Start", "End"].map((boundary) => (
          <TimeRange key={boundary} section={props.name} boundary={boundary} />
        ))}
    </form>
  </section>
);

export default Form;
