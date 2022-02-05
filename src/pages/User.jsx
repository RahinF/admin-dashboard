import {
  CalendarToday,
  EmailOutlined,
  LocationSearchingOutlined,
  Person,
  PhoneIphone,
  Publish,
} from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Form/Input/Input";
import {
  address,
  email,
  fullName,
  phone,
  username,
} from "../components/Form/Input/data";
import { userDetails as user } from "../dummyData";
import Button from "../components/Button";

const User = () => {
  const [values, setValues] = useState({
    username: "",
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const inputs = [username, fullName, email, phone, address];

  return (
    <div className="w-full p-5 dark:text-white">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Edit User</h1>
        <Link to="/users/create">
          <Button>Create</Button>
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex flex-col gap-5 p-5 shadow-lg rounded-lg basis-2/6 bg-white dark:bg-gray-700">
          <div className="flex gap-2">
            <img
              src={user.avatar}
              alt={`${user.name}'s avatar`}
              className="h-10 w-10 rounded-full object-cover"
            />

            <div>
              <p className="m-0 font-semibold">{user.name}</p>
              <p className="m-0 text-sm text-neutral-500 dark:text-white">
                {user.occupation}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-neutral-500 dark:text-white">
              Account Details
            </h2>

            <div className="flex items-center gap-2">
              <Person /> <span>{user.username}</span>
            </div>

            <div className="flex items-center gap-2">
              <CalendarToday /> <span>{user.dob}</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-neutral-500 dark:text-white">
              Contact Details
            </h2>

            <div className="flex items-center gap-2">
              <PhoneIphone /> <span>{user.phone}</span>
            </div>

            <div className="flex items-center gap-2">
              <EmailOutlined /> <span>{user.email}</span>
            </div>

            <div className="flex items-center gap-2">
              <LocationSearchingOutlined /> <span>{user.location}</span>
            </div>
          </div>
        </div>

        <div className="basis-4/6 p-5 shadow-lg rounded-lg bg-white dark:bg-gray-700">
          <div className="lg:flex gap-5">
            <div className="flex flex-col basis-4/6 p-5 gap-4">
              {inputs.map((input) => (
                <Input
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                />
              ))}
            </div>

            <div className="flex basis-2/6 justify-center items-center my-4">
              <label htmlFor="file">
                <div className="w-24 h-24 rounded-xl cursor-pointer border-2 border-dashed border-black dark:border-white flex items-center justify-center">
                  <Publish />
                </div>
              </label>
              <input type="file" id="file" className="hidden" />
            </div>
          </div>
          <div className="flex justify-end">
            <Button>Update</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
