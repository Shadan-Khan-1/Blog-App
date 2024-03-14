import React, { useId } from "react";

const Input = ({
  label,
  type = "",
  className = "",
  placeholder = "Placeholder",
  isRequired,
  // req="required",
  ...props
}) => {
  const id = useId();
  return (
    <>
      <div className="form-group row mt-3">
        <label className="col-sm-2 col-form-label">{label}</label>
        <div className="col-sm-10">
          <input
            type={type}
            className="form-control"
            id={id}
            placeholder={placeholder}
            {...(isRequired ? { required: true } : {})}
            {...props}
          />
        </div>
      </div>
    </>
  );
};

export default Input;
