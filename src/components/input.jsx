const Input = (props) => (
  <div>
    <label htmlFor={props.id}>{props.label}</label>
    <input
      type={props.type}
      name={props.id}
      id={props.id}
      value={props.value}
      onChange={props.onChange}
    />
  </div>
);

export default Input;
