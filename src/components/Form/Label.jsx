const Label = ({ id, children }) => {
  return (
    <label
      className="block cursor-pointer capitalize mb-2 font-medium text-sm text-neutral-500 dark:text-white"
      htmlFor={id}
    >
      {children}
    </label>
  );
};

export default Label;
