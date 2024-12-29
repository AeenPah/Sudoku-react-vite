import { ChangeEvent } from "react";

function restrictToSingleDigit(
  event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) {
  let { value } = event.target;

  // Trim the value to the last character if it's more than one character long
  if (value.length > 1) value = value.slice(-1);

  // Check if the value is a valid single digit number, else set it to an empty string
  event.target.value = /^[1-9]$/.test(value) ? value : "";
}

export default restrictToSingleDigit;
