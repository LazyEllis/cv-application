import Form from "./Form";
import FormEntry from "./FormEntry";
import "../styles/form.css";

const FormSection = ({ title, savedEntries, ...rest }) => (
  <section>
    <h2>{title}</h2>
    {savedEntries && savedEntries.stateValues.length > 0 && (
      <div className="form-entries">
        {savedEntries.stateValues.map((entry) => (
          <FormEntry
            key={entry.id}
            title={title}
            savedEntries={savedEntries}
            selectedEntry={entry}
          />
        ))}
      </div>
    )}
    <Form title={title} savedEntries={savedEntries} {...rest} />
  </section>
);

export default FormSection;
