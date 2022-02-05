import { useState } from "react";
import Label from "../Label";

const Input = (props) => {
  const [focused, setFocused] = useState(false);

  const handleBlur = () => {
    setFocused(true);
  };

  const { id, label, onChange, errorMessage, ...inputProps } = props;

  const darkMode = `dark:bg-gray-800 dark:text-white`;
  
  return (
    <div className="max-w-sm">
      <Label id={id}>{label}</Label>
      <input
        className={`${focused && `invalid:border-red-400`} peer w-full border px-3 py-2 border-neutral-200 focus-within:outline focus-within:outline-slate-900 rounded-md ${darkMode}`}
        id={id}
        {...inputProps}
        onChange={onChange}
        onBlur={handleBlur}
      />

      <p className={`${focused && `peer-invalid:block`} hidden text-red-400 mt-2 text-sm`}>
        {errorMessage}
      </p>
    </div>
  );
};

export default Input;
