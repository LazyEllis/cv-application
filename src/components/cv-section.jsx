const CVSection = (props) =>
  !Object.values(props.details).every((detail) => detail === "") && (
    <section>
      <h3>{props.title}</h3>
      <div className="cv-section-details">
        <div className="cv-section-detail">
          <div>
            <h4>
              {props.title === "Education"
                ? props.details.school
                : props.details.company}
            </h4>
            <div>{props.details.location}</div>
          </div>
          <div>
            <div>
              {props.title === "Education"
                ? props.details.degree
                : props.details.position}
            </div>
            <div>
              {props.details.startMonth.slice(0, 3)} {props.details.startYear} -{" "}
              {props.details.endMonth.slice(0, 3)} {props.details.endYear}
            </div>
          </div>
        </div>
      </div>
    </section>
  );

export default CVSection;
