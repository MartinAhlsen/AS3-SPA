import React from "react";

const Instructions = ({ instructions }) => {
  return (
    <div>
      <h3> instructions:</h3>
      <ol>
        {instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </div>
  );
};

export default Instructions;
