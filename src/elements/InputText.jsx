import React from "react";
import PropTypes from "prop-types";

export default function InputText(props) {
  const className = ["input"];
  className.push(props.className);

  if (props.isPrimary) className.push("input input-bordered input-sm w-full");

  return (
    <label className="input-group input-group-sm">
      <input
        type={props.type}
        placeholder={props.placeholder}
        // value=""
        className={className.join(" ")}
      />
      <span className="font-semibold">{props.spanTitle}</span>
    </label>
  );
}

InputText.propTypes = {
  isPrimary: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
