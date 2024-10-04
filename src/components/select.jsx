const Select = (props) => (
  <select
    name={props.id}
    id={props.id}
    aria-label={props.label}
    value={props.value}
    onChange={props.onChange}
  >
    <option value="">{props.name}</option>
    {props.options.map((item) => (
      <option key={item} value={item}>
        {item}
      </option>
    ))}
  </select>
);

export default Select;
