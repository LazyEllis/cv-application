import Select from "./select";
import { selects } from "../helpers/data";
import { toCamelCase, toHyphenCase } from "../helpers/utils";

const TimeRange = (props) => {
  const phrase = [props.section.name, props.boundary];

  return (
    <fieldset>
      <legend>{phrase.join(" ")} Date</legend>
      {selects.map((select) => (
        <Select
          {...select}
          key={select.name}
          id={toHyphenCase(...phrase, select.name)}
          label={[...phrase, select.name].join(" ")}
          value={
            props.section.stateValues[toCamelCase(props.boundary + select.name)]
          }
          onChange={(e) =>
            props.section.updateValues(
              e,
              toCamelCase(props.boundary + select.name)
            )
          }
        />
      ))}
    </fieldset>
  );
};

export default TimeRange;
