import React, { useEffect } from "react";

const RadioCheck = () => {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector("input[name=flexRadioDefault]").checked = true;
    }, 2000);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      document.querySelector("input[name=flexRadioDefault1]").checked = false;
    }, 5000);
  }, []);
  return (
    <div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <label class="form-check-label" for="flexRadioDefault1">
          Default radio
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault1"
          id="flexRadioDefault2"
        />
        <label class="form-check-label" for="flexRadioDefault2">
          Default checked radio
        </label>
      </div>
    </div>
  );
};

export default RadioCheck;
