import { useState } from "react";
import Form from "./components/Form";
import CVSection from "./components/CVSection";
import {
  SingleSection,
  MultiSection,
  hasNonEmptyValues,
} from "./helpers/utils";
import "./styles/app.css";

const App = () => {
  const [personalDetails, setPersonalDetails] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    linkedIn: "",
    gitHub: "",
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
    position: "",
    company: "",
    location: "",
    startMonth: "",
    startYear: "",
    endMonth: "",
    endYear: "",
  });

  const [educationList, setEducationList] = useState([]);

  const [experienceList, setExperienceList] = useState([]);

  const forms = [
    {
      title: "Personal Details",
      currentSection: new SingleSection(personalDetails, setPersonalDetails),
      savedSection: new SingleSection(personalDetails, setPersonalDetails),
      inputs: [
        { label: "Full Name", type: "text" },
        { label: "Phone Number", type: "tel" },
        { label: "Email Address", type: "email" },
        { label: "LinkedIn", type: "url" },
        { label: "GitHub", type: "url" },
      ],
    },
    {
      title: "Education",
      currentSection: new SingleSection(education, setEducation),
      savedSection: new MultiSection(educationList, setEducationList),
      inputs: [
        { label: "School", type: "text" },
        { label: "Degree", type: "text" },
        { label: "Location", type: "text" },
      ],
      timeRange: true,
    },
    {
      title: "Experience",
      currentSection: new SingleSection(experience, setExperience),
      savedSection: new MultiSection(experienceList, setExperienceList),
      inputs: [
        { label: "Position", type: "text" },
        { label: "Company", type: "text" },
        { label: "Location", type: "text" },
      ],
      timeRange: true,
    },
  ];

  const contactInfo = Object.keys(personalDetails)
    .filter((key) => key !== "fullName" && personalDetails[key] !== "")
    .map((key) => personalDetails[key]);

  const innerSections = forms.filter(
    (form) => form.title !== "Personal Details"
  );

  return (
    <>
      <header>
        <h1>CV Generator</h1>
      </header>
      <main>
        <div className="forms">
          {forms.map((form) => {
            const handleSubmit = (e) => {
              e.preventDefault();
              if (form.savedSection instanceof MultiSection) {
                form.savedSection.addSection(form.currentSection.stateValues);
                e.target.reset();
              }
            };

            const handleReset = () => form.currentSection.resetValues();

            return (
              <Form
                {...form}
                key={form.title}
                section={form.currentSection}
                onSubmit={handleSubmit}
                onReset={handleReset}
              />
            );
          })}
        </div>
        <div className="cv">
          {hasNonEmptyValues(personalDetails) && (
            <header>
              {personalDetails.fullName && <h2>{personalDetails.fullName}</h2>}
              {contactInfo.length > 0 && (
                <div className="contact-info">
                  {contactInfo.map((info, index) => (
                    <div
                      key={info}
                      className={index > 0 ? "border-left" : undefined}
                    >
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
              savedEntries={innerSection.savedSection.stateValues}
              currentEntry={innerSection.currentSection.stateValues}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default App;
