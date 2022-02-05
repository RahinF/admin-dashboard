import Label from "./Label";

const Dropdown = ({ id, name, label, options }) => {
  return (
    <div>
      <Label id={id}>{label}</Label>
      <select
        className="w-full max-w-sm bg-transparent border px-3 py-2 border-neutral-200 focus-within:outline focus-within:outline-slate-900 rounded-md cursor-pointer bg-white dark:bg-gray-800 dark:text-white"
        name={name}
        id={id}
      >
        {options.map(({ value, text }) => (
          <option key={value} value={value}>
            {text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
