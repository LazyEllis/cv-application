import Select from "./Select";
import { selects } from "../helpers/data";
import { toKebabCase } from "../helpers/utils";

const TimeRange = ({ title, entry, boundary }) => {
  const phrase = [title, boundary];

  return (
    <fieldset>
      <legend>{phrase.join(" ")} Date</legend>
      {selects.map((select) => (
        <Select
          {...select}
          key={select.title}
          entry={entry}
          boundary={boundary}
          id={toKebabCase(...phrase, select.title)}
          label={[...phrase, select.title].join(" ")}
          onChange={(e) => entry.updateValues(e)}
        />
      ))}
    </fieldset>
  );
};

export default TimeRange;
