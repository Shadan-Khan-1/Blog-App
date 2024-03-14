import React from "react";

export default function Button({
  children,
  // type = "button",
  bgColor = "",
  textColor = "",
  className = "",
  ...props
}) {
  return (
    <button
      className={`btn btn-primary rounded-pill ${bgColor} ${textColor} ${className} `}
      {...props}
    >
      {children}
    </button>
  );
}
