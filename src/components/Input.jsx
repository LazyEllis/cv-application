import { toCamelCase } from "../helpers/utils";
import styles from "../styles/Form.module.css";

const Input = ({ id, label, type, entry, onChange }) => {
  const name = toCamelCase(label);
  const value = entry.stateValues[name];

  return (
    <div className={styles.inputGroup}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        className={styles.input}
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
