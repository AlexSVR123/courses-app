import React from "react";
import { MouseEventHandler } from "react";
import './Button.scss'

function Button(props: { title: string, onClick: MouseEventHandler<HTMLElement> | undefined }) {
  return (
    <>
      <div onClick={props.onClick} className="button">{props.title}</div>
    </>
  );
}

export default Button;
