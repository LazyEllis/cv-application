import Select from "./Select";
import { selects } from "../helpers/data";
import { toCamelCase, toKebabCase } from "../helpers/utils";

const TimeRange = ({ section, boundary }) => {
  const phrase = [section.title, boundary];

  return (
    <fieldset>
      <legend>{phrase.join(" ")} Date</legend>
      {selects.map((select) => (
        <Select
          {...select}
          key={select.name}
          id={toKebabCase(...phrase, select.name)}
          label={[...phrase, select.name].join(" ")}
          value={section.stateValues[toCamelCase(boundary + select.name)]}
          onChange={(e) =>
            section.updateValues(e, toCamelCase(boundary + select.name))
          }
        />
      ))}
    </fieldset>
  );
};

export default TimeRange;
