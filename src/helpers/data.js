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

export const actionButtons = [
  {
    type: "reset",
    text: "Cancel",
  },
  {
    type: "submit",
    text: "Save",
  },
];
