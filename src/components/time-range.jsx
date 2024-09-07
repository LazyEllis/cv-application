import Select from "./select";
import { selects } from "../data";

const TimeRange = (props) => {
  const phrase = [props.section, props.boundary];

  return (
    <fieldset>
      <legend>{phrase.join(" ")} Date</legend>
      {selects.map((select) => (
        <Select
          {...select}
          key={select.name}
          id={[...phrase, select.name].join("-").toLowerCase()}
          label={[...phrase, select.name].join(" ")}
        />
      ))}
    </fieldset>
  );
};

export default TimeRange;
