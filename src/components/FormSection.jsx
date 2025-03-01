import Form from "./Form";
import FormEntry from "./FormEntry";
import styles from "../styles/FormSection.module.css";
import formStyles from "../styles/Form.module.css";

const FormSection = ({ title, savedEntries, selectedID, toggler, ...rest }) => (
  <section className={styles.section}>
    <h2 className={styles.title}>{title}</h2>
    {savedEntries && savedEntries.stateValues.length > 0 && (
      <div className={formStyles.formEntries}>
        {savedEntries.stateValues.map((entry) => (
          <FormEntry
            key={entry.id}
            title={title}
            savedEntries={savedEntries}
            entry={entry}
            selectedID={selectedID}
            toggler={toggler}
            {...rest}
          />
        ))}
      </div>
    )}
    {(!savedEntries || !selectedID) && (
      <Form title={title} savedEntries={savedEntries} {...rest} />
    )}
  </section>
);

export default FormSection;
