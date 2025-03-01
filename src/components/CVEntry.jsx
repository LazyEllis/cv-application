import styles from "../styles/CVSection.module.css";

const CVEntry = ({ title, entry }) => {
  const timeRange = `${entry.startMonth.slice(0, 3)} ${
    entry.startYear
  } - ${entry.endMonth.slice(0, 3)} ${entry.endYear}`;

  return (
    <div className={styles.entry}>
      <div className={styles.row}>
        <h4>{title === "Education" ? entry.school : entry.position}</h4>
        <div className={styles.dateRange}>
          {title === "Education" ? timeRange : entry.location}
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.secondary}>
          {title === "Education" ? entry.degree : entry.company}
        </div>
        <div className={styles.location}>
          {title === "Education" ? entry.location : timeRange}
        </div>
      </div>
    </div>
  );
};

export default CVEntry;
