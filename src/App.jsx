import { useState } from "react";
import FormSection from "./components/FormSection";
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
      entry: new SingleSection(personalDetails, setPersonalDetails),
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
      entry: new SingleSection(education, setEducation),
      savedEntries: new MultiSection(educationList, setEducationList),
      inputs: [
        { label: "School", type: "text" },
        { label: "Degree", type: "text" },
        { label: "Location", type: "text" },
      ],
      timeRange: true,
    },
    {
      title: "Experience",
      entry: new SingleSection(experience, setExperience),
      savedEntries: new MultiSection(experienceList, setExperienceList),
      inputs: [
        { label: "Position", type: "text" },
        { label: "Company", type: "text" },
        { label: "Location", type: "text" },
      ],
      timeRange: true,
    },
  ];

  const contactInfo = Object.entries(personalDetails).filter(
    ([key, value]) => key !== "fullName" && value !== ""
  );

  const innerSections = forms.filter((form) => form.savedEntries);

  return (
    <>
      <header>
        <h1>CV Generator</h1>
      </header>
      <main>
        <div className="forms">
          {forms.map((form) => (
            <FormSection {...form} key={form.title} />
          ))}
        </div>
        <div className="cv">
          {hasNonEmptyValues(personalDetails) && (
            <header>
              {personalDetails.fullName && <h2>{personalDetails.fullName}</h2>}
              {hasNonEmptyValues(Object.fromEntries(contactInfo)) && (
                <div className="contact-info">
                  {contactInfo.map(([key, value], index) => (
                    <div
                      key={key}
                      className={index > 0 ? "border-left" : undefined}
                    >
                      {value}
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
              savedEntries={innerSection.savedEntries.stateValues}
              entry={innerSection.entry.stateValues}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default App;
