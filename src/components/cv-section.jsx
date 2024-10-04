const CVSection = (props) => {
  const timeRange = `${props.details.startMonth.slice(0, 3)} ${
    props.details.startYear
  } - ${props.details.endMonth.slice(0, 3)} ${props.details.endYear}`;

  return (
    !Object.values(props.details).every((detail) => detail === "") && (
      <section>
        <h3>{props.title}</h3>
        <div className="cv-section-details">
          <div className="cv-section-detail">
            <div>
              <h4>
                {props.title === "Education"
                  ? props.details.school
                  : props.details.position}
              </h4>
              <div>
                {props.title === "Education"
                  ? props.details.location
                  : timeRange}
              </div>
            </div>
            <div>
              <div>
                {props.title === "Education"
                  ? props.details.degree
                  : props.details.company}
              </div>
              <div>
                {props.title === "Education"
                  ? timeRange
                  : props.details.location}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default CVSection;
