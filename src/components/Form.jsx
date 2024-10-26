import Input from "./Input";
import TimeRange from "./TimeRange";
import ActionButton from "./ActionButton";
import { toCamelCase, toKebabCase } from "../helpers/utils";
import { actionButtons } from "../helpers/data";
import "../styles/form.css";

const Form = ({ name, inputs, section, timeRange, onSubmit, onReset }) => (
  <section>
    <h2>{name}</h2>
    <form onSubmit={onSubmit} onReset={onReset}>
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
      <div className="btn-group">
        {actionButtons.map((button) => (
          <ActionButton {...button} key={button.text} />
        ))}
      </div>
    </form>
  </section>
);

export default Form;
