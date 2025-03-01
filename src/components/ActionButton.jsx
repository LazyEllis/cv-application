import styles from "../styles/Form.module.css";

const ActionButton = ({ type, text }) => (
  <button
    className={`${styles.btn} ${
      type === "reset" ? styles.btnCancel : styles.btnSave
    }`}
    type={type}
  >
    {text}
  </button>
);

export default ActionButton;
