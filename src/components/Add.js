import React from "react";

const Subtract = (props) => {
  const handleAdd = () => {
    props.setCounter(props.counter + 1);
  };
  const style = props.counter === 10 ? { display: "none" } : {};

  return (
    <div className="add" style={style}>
      <span>
        <i class="fas fa-plus fa-3x" onClick={handleAdd}></i>
      </span>
    </div>
  );
};

export default Subtract;
