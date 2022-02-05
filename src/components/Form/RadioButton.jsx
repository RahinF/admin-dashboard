const RadioButton = ({ data, name }) => {
  const { id, value } = data;
  return (
    <div className="flex gap-2 items-center">
      <input type="radio" id={id} name={name} value={value} />
      <label htmlFor={id} className="cursor-pointer">
        {value}
      </label>
    </div>
  );
};

export default RadioButton;
