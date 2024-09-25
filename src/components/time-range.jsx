import Select from "./select";
import { selects } from "../helpers/data";
import { toHyphenCase } from "../helpers/utils";

const TimeRange = (props) => {
  const phrase = [props.section, props.boundary];

  return (
    <fieldset>
      <legend>{phrase.join(" ")} Date</legend>
      {selects.map((select) => (
        <Select
          {...select}
          key={select.name}
          id={toHyphenCase(...phrase, select.name)}
          label={[...phrase, select.name].join(" ")}
        />
      ))}
    </fieldset>
  );
};

export default TimeRange;
