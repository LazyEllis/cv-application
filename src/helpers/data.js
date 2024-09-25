const currentYear = new Date().getFullYear();

export const selects = [
  {
    name: "Month",
    options: [...Array(12).keys()].map((key) =>
      new Date(0, key).toLocaleString("en", { month: "long" })
    ),
  },
  {
    name: "Year",
    options: [...Array(101).keys()].map((index) => currentYear - index),
  },
];

export const forms = [
  {
    name: "Personal Details",
    inputs: [
      { label: "Full Name", type: "text" },
      { label: "Email Address", type: "email" },
      { label: "Phone Number", type: "tel" },
      { label: "Address", type: "text" },
    ],
  },
  {
    name: "Education",
    inputs: [
      { label: "School", type: "text" },
      { label: "Degree", type: "text" },
      { label: "Location", type: "text" },
    ],
    timeRange: true,
  },
  {
    name: "Experience",
    inputs: [
      { label: "Company", type: "text" },
      { label: "Position", type: "text" },
      { label: "Location", type: "text" },
    ],
    timeRange: true,
  },
];
