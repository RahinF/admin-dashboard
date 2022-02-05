const Button = ({ status, children }) => {
  let styles;

  switch (status) {
    case "approved":
      styles = "bg-green-100 hover:bg-green-200 text-green-800";
      break;

    case "pending":
      styles = "bg-neutral-100 hover:bg-neutral-200 text-neutral-800";
      break;

    case "declined":
      styles = "bg-red-100 hover:bg-red-200 text-red-800";
      break;

    default:
      styles = "bg-purple-100 hover:bg-purple-200 dark:bg-gray-800 dark:hover:bg-gray-900 text-gray-900 dark:text-white";
      break;
  }

  return (
    <button className={`${styles} p-2 capitalize shadow-lg rounded-3xl w-28`}>
      {children}
    </button>
  );
};

export default Button;
