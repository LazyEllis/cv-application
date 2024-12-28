import { hasNonEmptyValues } from "../helpers/utils";
import CVEntry from "./CVEntry";
import "../styles/cv-section.css";

const CVSection = ({ title, savedEntries, entry }) =>
  (savedEntries.length > 0 || hasNonEmptyValues(entry)) && (
    <section>
      <h3>{title}</h3>
      <div className="cv-section-entries">
        {savedEntries.map((entry) => (
          <CVEntry key={entry.id} title={title} entry={entry} />
        ))}
        {hasNonEmptyValues(entry) && <CVEntry title={title} entry={entry} />}
      </div>
    </section>
  );

export default CVSection;
