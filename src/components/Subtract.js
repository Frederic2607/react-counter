import React from "react";

const Subtract = (props) => {
  const handleSubtract = () => {
    props.setCounter(props.counter - 1);
  };
  const style = props.counter === 0 ? { display: "none" } : {};
  return (
    <div className="subtract" style={style}>
      <span>
        <i class="fas fa-minus fa-3x" onClick={handleSubtract}></i>
      </span>
    </div>
  );
};

export default Subtract;
