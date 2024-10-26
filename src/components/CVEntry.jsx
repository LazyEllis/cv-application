const CVEntry = ({ title, entry }) => {
  const timeRange = `${entry.startMonth.slice(0, 3)} ${
    entry.startYear
  } - ${entry.endMonth.slice(0, 3)} ${entry.endYear}`;

  return (
    <div className="cv-section-entry">
      <div>
        <h4>{title === "Education" ? entry.school : entry.position}</h4>
        <div>{title === "Education" ? entry.location : timeRange}</div>
      </div>
      <div>
        <div>{title === "Education" ? entry.degree : entry.company}</div>
        <div>{title === "Education" ? timeRange : entry.location}</div>
      </div>
    </div>
  );
};

export default CVEntry;
