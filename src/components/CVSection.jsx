import { hasNonEmptyValues } from "../helpers/utils";
import CVEntry from "./CVEntry";
import "../styles/cv-section.css";

const CVSection = ({ title, savedEntries, currentEntry }) =>
  (savedEntries.length > 0 || hasNonEmptyValues(currentEntry)) && (
    <section>
      <h3>{title}</h3>
      <div className="cv-section-entries">
        {savedEntries.map((entry) => (
          <CVEntry key={entry.id} title={title} entry={entry} />
        ))}
        {hasNonEmptyValues(currentEntry) && (
          <CVEntry title={title} entry={currentEntry} />
        )}
      </div>
    </section>
  );

export default CVSection;
