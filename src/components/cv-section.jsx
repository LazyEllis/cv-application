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
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );

export default CVSection;
