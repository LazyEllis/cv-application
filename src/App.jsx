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
    fullName: "Jake Ryan",
    phoneNumber: "123-456-7890",
    emailAddress: "jake@su.edu",
    linkedIn: "linkedin.com/in/jake",
    gitHub: "github.com/jake",
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

  const [educationList, setEducationList] = useState([
    {
      id: "1",
      school: "Southwestern University",
      degree: "BA in Comp Sci, Minor in Business",
      location: "Georgetown, TX",
      startMonth: "August",
      startYear: "2018",
      endMonth: "May",
      endYear: "2021",
    },
    {
      id: "2",
      school: "Blinn College",
      degree: "Associate's in Liberal Arts",
      location: "Bryan, TX",
      startMonth: "August",
      startYear: "2014",
      endMonth: "May",
      endYear: "2018",
    },
  ]);

  const [experienceList, setExperienceList] = useState([
    {
      id: "1",
      position: "Undergraduate Research Assistant",
      company: "Texas A&M University",
      location: "College Station, TX",
      startMonth: "June",
      startYear: "2020",
      endMonth: "January",
      endYear: "2025",
    },
    {
      id: "2",
      position: "IT Support Specialist",
      company: "Southwestern University",
      location: "Georgetown, TX",
      startMonth: "September",
      startYear: "2018",
      endMonth: "January",
      endYear: "2025",
    },
    {
      id: "3",
      position: "AI Research Assistant",
      company: "Southwestern University",
      location: "Georgetown, TX",
      startMonth: "May",
      startYear: "2019",
      endMonth: "July",
      endYear: "2019",
    },
  ]);
  const [selectedEducationID, setSelectedEducationID] = useState(null);

  const [selectedExperienceID, setSelectedExperienceID] = useState(null);

  const setToggler = (title) =>
    title === "Education" ? setSelectedEducationID : setSelectedExperienceID;

  const setSelectedID = (title) =>
    title === "Education" ? selectedEducationID : selectedExperienceID;

  const forms = [
    {
      title: "Personal Details",
      currentEntry: new SingleSection(personalDetails, setPersonalDetails),
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
      currentEntry: new SingleSection(education, setEducation),
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
      currentEntry: new SingleSection(experience, setExperience),
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
            <FormSection
              {...form}
              key={form.title}
              selectedID={setSelectedID(form.title)}
              toggler={setToggler(form.title)}
            />
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
              currentEntry={innerSection.currentEntry.stateValues}
              selectedID={setSelectedID(innerSection.title)}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default App;
