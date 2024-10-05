const Input = ({ id, label, type, value, onChange }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input type={type} name={id} id={id} value={value} onChange={onChange} />
  </div>
);

export default Input;
