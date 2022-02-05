export const username = {
  id: "username",
  name: "username",
  type: "text",
  label: "username",
  errorMessage: "Please enter a valid name.",
  required: true,
};

export const fullName = {
  id: "fullName",
  name: "fullName",
  type: "text",
  label: "Full Name",
  errorMessage: "Please enter a valid name.",
  required: true,
};

export const email = {
  id: "email",
  name: "email",
  type: "email",
  label: "Email",
  errorMessage: "Please enter a valid email.",
  required: true,
};
export const phone = {
  id: "phone",
  name: "phone",
  type: "text",
  label: "Phone",
  errorMessage: "Please enter a valid phone number.",
  required: true,
};

export const address = {
  id: "address",
  name: "address",
  type: "text",
  label: "Address",
  errorMessage: "Please enter a valid address.",
  required: true,
};

export const password = {
  id: "password",
  name: "password",
  type: "password",
  label: "password",
  pattern: `^(?=.{8,20})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+*!=]).*$`,
  errorMessage: `A password must contain 1 uppercase, 1 lowercase, 1 digit, 1 special character and must be bewteen 8-20 characters.`,
  required: true,
};
