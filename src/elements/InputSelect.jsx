import React from "react";

export default function InputSelect(props) {
  const className = ["select "];
  className.push(props.className);

  if (props.isPrimary)
    className.push("select select-bordered w-full select-sm max-w-xs");

  return (
    <select className={className.join(" ")}>
      <option disabled="" selected="">
        Pilih Aktifitas
      </option>
      <option>telekinesis</option>
      <option>time travel</option>
      <option>invisibility</option>
    </select>
  );
}
