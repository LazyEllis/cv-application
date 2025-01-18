import DeleteIcon from "../assets/icons/delete.svg";
import EditIcon from "../assets/icons/edit.svg";

const FormEntry = ({ title, savedEntries, selectedEntry }) => {
  const handleSectionDelete = () =>
    savedEntries.deleteSection(selectedEntry.id);

  return (
    <div>
      {title === "Education" ? selectedEntry.school : selectedEntry.position}
      <div className="action-icons">
        <button onClick={handleSectionDelete}>
          <img src={DeleteIcon} alt="Delete Entry" />
        </button>
        <button>
          <img src={EditIcon} alt="Edit Entry" />
        </button>
      </div>
    </div>
  );
};

export default FormEntry;
