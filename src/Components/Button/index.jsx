import React from "react";

let i = 1;

const Button = ({ name, setPage, page }) => {
  const handleClick = () => {
    if (name !== page) setPage(name);
  };

  return (
    <div className="nav-item" onClick={handleClick}>
      <p>{name}</p>
    </div>
  );
};

export default Button;
