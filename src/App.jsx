import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/form";
import MainContent from "./components/main-content";
import { forms } from "./helpers/data";
import { Section } from "./helpers/utils";

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
  });

  const [experience, setExperience] = useState({
    company: "",
    position: "",
    location: "",
  });

  const sections = [
    new Section("Personal Details", personalDetails, setPersonalDetails),
    new Section("Education", education, setEducation),
    new Section("Experience", experience, setExperience),
  ];

  return (
    <>
      <Header />
      <MainContent>
        <div>
          {forms.map((form) => (
            <Form
              {...form}
              section={sections.find((section) => section.title === form.name)}
              key={form.name}
            />
          ))}
        </div>
      </MainContent>
    </>
  );
};

export default App;
