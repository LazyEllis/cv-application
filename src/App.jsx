import { useState } from "react";
import Form from "./components/Form";
import CVSection from "./components/CVSection";
import { forms } from "./helpers/data";
import { Section, hasNonEmptyValues } from "./helpers/utils";
import "./styles/app.css";

const App = () => {
  const [personalDetails, setPersonalDetails] = useState({
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    address: "",
  });

  const [education, setEducation] = useState({
    school: "",
    degree: "",
    location: "",
    startMonth: "",
    startYear: "",
    endMonth: "",
    endYear: "",
  });

  const [experience, setExperience] = useState({
    company: "",
    position: "",
    location: "",
    startMonth: "",
    startYear: "",
    endMonth: "",
    endYear: "",
  });

  const sections = [
    new Section("Personal Details", personalDetails, setPersonalDetails),
    new Section("Education", education, setEducation),
    new Section("Experience", experience, setExperience),
  ];

  const contactInfo = Object.keys(personalDetails)
    .filter((key) => key !== "fullName" && personalDetails[key] !== "")
    .map((key) => personalDetails[key]);

  const innerSections = sections.filter(
    (section) => section.title !== "Personal Details"
  );

  return (
    <>
      <header>
        <h1>CV Generator</h1>
      </header>
      <main>
        <div className="forms">
          {forms.map((form) => (
            <Form
              {...form}
              section={sections.find((section) => section.title === form.name)}
              key={form.name}
            />
          ))}
        </div>
        <div className="cv">
          {hasNonEmptyValues(personalDetails) && (
            <header>
              {personalDetails.fullName && <h2>{personalDetails.fullName}</h2>}
              {contactInfo.length > 0 && (
                <div className="contact-info">
                  {contactInfo.map((info, index) => (
                    <div key={info} className={index > 0 && "border-left"}>
                      {info}
                    </div>
                  ))}
                </div>
              )}
            </header>
          )}
          {innerSections.map((innerSection) => (
            <CVSection
              key={innerSection.title}
              title={innerSection.title}
              details={innerSection.stateValues}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default App;
