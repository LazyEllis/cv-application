import { toCamelCase } from "../helpers/utils";

const Input = ({ id, label, type, entry, onChange }) => {
  const name = toCamelCase(label);
  const value = entry.stateValues[name];

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
