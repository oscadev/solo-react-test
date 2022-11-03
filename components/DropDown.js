import React from "react";

export default function DropDown({ options = [], value = "", setValue }) {
  const handleChange = (e) => {
    setValue(e.currentTarget.value);
  };
  return (
    <select value={value} onChange={handleChange}>
      {options.map((option, ind) => (
        <option key={option.code} value={ind}>
          {option.name}
        </option>
      ))}
    </select>
  );
}
