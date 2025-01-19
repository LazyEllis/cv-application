import Input from "./Input";
import TimeRange from "./TimeRange";
import ActionButton from "./ActionButton";
import { toKebabCase } from "../helpers/utils";
import { actionButtons } from "../helpers/data";
import "../styles/form.css";

const Form = ({
  title,
  inputs,
  currentEntry,
  savedEntries,
  timeRange,
  selectedID,
  onSectionSave,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (savedEntries) {
      selectedID
        ? savedEntries.updateSection(currentEntry.stateValues, selectedID)
        : savedEntries.addSection(currentEntry.stateValues);
      e.target.reset();
    }
  };

  const handleReset = () => {
    currentEntry.resetValues();
    if (selectedID) onSectionSave();
  };

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      {inputs.map((input) => (
        <Input
          {...input}
          key={input.label}
          id={toKebabCase(...title.split(" "), ...input.label.split(" "))}
          entry={currentEntry}
          onChange={(e) => currentEntry.updateValues(e)}
        />
      ))}
      {timeRange &&
        ["Start", "End"].map((boundary) => (
          <TimeRange
            key={boundary}
            title={title}
            entry={currentEntry}
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
