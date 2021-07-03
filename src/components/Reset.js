import React from "react";

const Reset = (props) => {
  const handleReset = () => {
    props.setCounter(0);
  };
  return (
    <div className="reset">
      <button className="reset-btn" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default Reset;
