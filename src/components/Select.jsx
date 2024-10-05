const Select = ({ id, label, name, options, value, onChange }) => (
  <select
    name={id}
    id={id}
    aria-label={label}
    value={value}
    onChange={onChange}
  >
    <option value="">{name}</option>
    {options.map((item) => (
      <option key={item} value={item}>
        {item}
      </option>
    ))}
  </select>
);

export default Select;
