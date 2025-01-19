import Form from "./Form";
import DeleteIcon from "../assets/icons/delete.svg";
import EditIcon from "../assets/icons/edit.svg";

const FormEntry = ({
  title,
  savedEntries,
  entry,
  selectedID,
  toggler,
  ...rest
}) => {
  const handleSectionDelete = () => savedEntries.deleteSection(entry.id);

  const handleSectionEditToggle = () => {
    rest.currentEntry.setValues(entry);
    toggler(entry.id);
  };

  const handleSectionSaveToggle = () => toggler(null);

  return entry.id !== selectedID ? (
    <div>
      {title === "Education" ? entry.school : entry.position}
      <div className="action-icons">
        <button onClick={handleSectionDelete}>
          <img src={DeleteIcon} alt="Delete Entry" />
        </button>
        <button onClick={handleSectionEditToggle}>
          <img src={EditIcon} alt="Edit Entry" />
        </button>
      </div>
    </div>
  ) : (
    <Form
      title={title}
      savedEntries={savedEntries}
      selectedID={selectedID}
      onSectionSave={handleSectionSaveToggle}
      {...rest}
    />
  );
};

export default FormEntry;
