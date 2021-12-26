import React from "react";

const Datalist_Dropdown = () => {
  return (
    <>
      <p>What's your favourite browser?</p>
      <label for="browser-choice">Choose a browser:&nbsp;</label>
      <input
        list="browser-options"
        id="browser-choice"
        name="browser-choice"
        required="required"
      />
      <datalist id="browser-options">
        <option value="Google Chrome"></option>
        <option value="Edge"></option>
        <option value="Safari"></option>
        <option value="Firefox"></option>
        <option value="Internet Explorer"></option>
      </datalist>
    </>
  );
};

export default Datalist_Dropdown;
