import React from "react";
import PropTypes from "prop-types";
export default function Button(props) {
  console.log(props);
  console.log(props.name);
  const className = ["button"];
  className.push(props.className);

  if (props.isPrimary)
    className.push(
      "bg-blue-light border rounded-md px-3 py-2 text-white font-medium focus:ring-4 focus:ring-yellow-light focus:ring-opacity-50 hover:bg-yellow-light shadow-lg"
    );
  if (props.isBlock) className.push("w-full text-center");
  if (props.isWideMobile) className.push("button-wide-mobile");
  if (props.isSmall) className.push("button-sm");

  return (
    <a href={props.link} className={className.join(" ")}>
      {props.name}
    </a>
  );
}
Button.propTypes = {
  isPrimary: PropTypes.bool,
  isBlock: PropTypes.bool,
  isWideMobile: PropTypes.bool,
  isSmall: PropTypes.bool,
  className: PropTypes.string,
  name: PropTypes.string,
  link: PropTypes.string,
};
