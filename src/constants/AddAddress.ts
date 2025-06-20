export const addressInitialValues = {
  fullName: "",
  phone: "",
  email: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  zip: "",
  country: "India",
};

export const addressFormFields = [
  { name: "fullName", placeholder: "Full Name" },
  { name: "phone", placeholder: "Phone Number", type: "tel" },
  {
    name: "email",
    placeholder: "Email Address",
    type: "email",
    span: 2,
  },
  {
    name: "addressLine1",
    placeholder: "Address Line 1",
    span: 2,
  },
  {
    name: "addressLine2",
    placeholder: "Address Line 2 (Optional)",
    span: 2,
  },
  { name: "city", placeholder: "City" },
  { name: "state", placeholder: "State" },
  { name: "zip", placeholder: "ZIP Code" },
];
