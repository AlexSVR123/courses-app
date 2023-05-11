import React from "react";
import "./Input.scss";

function Input(
  props: { label?: string } & React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) {
  return (
    <>
      <div className="Input">
        {props.label && <label>{props.label}</label>}
        <input type="text" {...props}></input>
      </div>
    </>
  );
}

export default Input;
