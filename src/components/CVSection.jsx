import { hasNonEmptyValues } from "../helpers/utils";
import CVEntry from "./CVEntry";
import styles from "../styles/CVSection.module.css";

const CVSection = ({ title, savedEntries, currentEntry, selectedID }) =>
  (savedEntries.length > 0 || hasNonEmptyValues(currentEntry)) && (
    <section className={styles.section}>
      <h3>{title}</h3>
      <div className={styles.entries}>
        {savedEntries.map((entry) =>
          selectedID === entry.id ? (
            <CVEntry key={entry.id} title={title} entry={currentEntry} />
          ) : (
            <CVEntry key={entry.id} title={title} entry={entry} />
          )
        )}
        {hasNonEmptyValues(currentEntry) && !selectedID && (
          <CVEntry title={title} entry={currentEntry} />
        )}
      </div>
    </section>
  );

export default CVSection;
