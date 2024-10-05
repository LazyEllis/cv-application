import { hasNonEmptyValues } from "../helpers/utils";
import "../styles/cv-section.css";

const CVSection = ({ title, details }) => {
  const timeRange = `${details.startMonth.slice(0, 3)} ${
    details.startYear
  } - ${details.endMonth.slice(0, 3)} ${details.endYear}`;

  return (
    hasNonEmptyValues(details) && (
      <section>
        <h3>{title}</h3>
        <div className="cv-section-details">
          <div className="cv-section-detail">
            <div>
              <h4>
                {title === "Education" ? details.school : details.position}
              </h4>
              <div>{title === "Education" ? details.location : timeRange}</div>
            </div>
            <div>
              <div>
                {title === "Education" ? details.degree : details.company}
              </div>
              <div>{title === "Education" ? timeRange : details.location}</div>
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default CVSection;
