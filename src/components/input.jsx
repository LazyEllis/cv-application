const Input = (props) => (
  <div>
    <label htmlFor={props.id}>{props.label}</label>
    <input type={props.type} name={props.id} id={props.id} />
  </div>
);

export default Input;
