import React, { useState } from "react";
import Dropdown from "../components/Form/Dropdown";
import { phone, username } from "../components/Form/Input/data";
import Input from "../components/Form/Input/Input";
import Button from "../components/Button";
import { Publish } from "@mui/icons-material";

const NewProduct = () => {
  const [values, setValues] = useState({
    name: "",
    stock: "",
    active: "",
  });

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const active = [
    { value: "Yes", text: "Yes" },
    { value: "No", text: "No" },
  ];

  const inputs = [username, phone];

  return (
    <div className="p-5 dark:text-white">
      <h1 className="text-3xl font-bold mb-4">New Product</h1>
      <form className="p-5 shadow-lg rounded-lg bg-white dark:bg-gray-700">
        <div className="my-4">
          <label htmlFor="file">
            <div className="w-24 h-24 rounded-xl cursor-pointer border-2 border-dashed border-black dark:border-white flex items-center justify-center">
              <Publish />
            </div>
          </label>
          <input type="file" id="file" className="hidden" />
        </div>

        <div className="mb-4 flex flex-col gap-4">
          {inputs.map((input) => (
            <Input
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}

          <Dropdown id="active" name="active" label="Active" options={active} />
        </div>
        <Button>Create</Button>
      </form>
    </div>
  );
};

export default NewProduct;
