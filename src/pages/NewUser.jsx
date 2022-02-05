import React, { useState } from "react";
import Dropdown from "../components/Form/Dropdown";
import RadioButton from "../components/Form/RadioButton";
import {
  address,
  email,
  fullName,
  password,
  phone,
  username,
} from "../components/Form/Input/data";
import Input from "../components/Form/Input/Input";
import Label from "../components/Form/Label";
import Button from "../components/Button";

const NewUser = () => {
  const [values, setValues] = useState({
    username: "",
    fullName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const genders = [
    { id: "male", value: "Male" },
    { id: "female", value: "Female" },
    { id: "other", value: "Other" },
  ];

  const active = [
    { value: "Yes", text: "Yes" },
    { value: "No", text: "No" },
  ];

  const inputs = [username, fullName, email, password, phone, address];

  return (
    <div className="p-5 w-full dark:text-white">
      <h1 className="text-3xl font-bold mb-4">New User</h1>
      <form className="p-5 shadow-lg rounded-lg bg-white dark:bg-gray-700">
        <div className="grid lg:grid-cols-2 gap-x-5 gap-y-3 mb-5">
          {inputs.map((input) => (
            <Input
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}

          <div>
            <Label>Gender</Label>
            <div className="flex gap-3">
              {genders.map((gender) => (
                <RadioButton
                  key={gender.id}
                  data={gender}
                  id={gender.id}
                  name="gender"
                />
              ))}
            </div>
          </div>

          <Dropdown id="active" name="active" label="Active" options={active} />
        </div>
        <Button>Create</Button>
      </form>
    </div>
  );
};

export default NewUser;
