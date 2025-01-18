import Input from "./Input";
import TimeRange from "./TimeRange";
import ActionButton from "./ActionButton";
import { toKebabCase } from "../helpers/utils";
import { actionButtons } from "../helpers/data";
import "../styles/form.css";

const Form = ({ title, inputs, entry, savedEntries, timeRange }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (savedEntries) {
      savedEntries.addSection(entry.stateValues);
      e.target.reset();
    }
  };

  const handleReset = () => entry.resetValues();

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      {inputs.map((input) => (
        <Input
          {...input}
          key={input.label}
          id={toKebabCase(...title.split(" "), ...input.label.split(" "))}
          entry={entry}
          onChange={(e) => entry.updateValues(e)}
        />
      ))}
      {timeRange &&
        ["Start", "End"].map((boundary) => (
          <TimeRange
            key={boundary}
            title={title}
            entry={entry}
            boundary={boundary}
          />
        ))}
      {savedEntries && (
        <div className="btn-group">
          {actionButtons.map((button) => (
            <ActionButton {...button} key={button.text} />
          ))}
        </div>
      )}
    </form>
  );
};

export default Form;
