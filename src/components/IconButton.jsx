import React from "react";

const IconButton = ({ children }) => {
  return (
    <div className="p-1 rounded-md cursor-pointer hover:bg-purple-200 dark:hover:bg-gray-800">
      {children}
    </div>
  );
};

export default IconButton;
