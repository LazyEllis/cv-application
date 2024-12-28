import { toCamelCase } from "../helpers/utils";

const Select = ({ id, label, entry, boundary, title, options, onChange }) => {
  const name = toCamelCase(boundary + title);
  const value = entry.stateValues[name];

  return (
    <select
      name={name}
      id={id}
      aria-label={label}
      value={value}
      onChange={onChange}
    >
      <option value="">{title}</option>
      {options.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default Select;
