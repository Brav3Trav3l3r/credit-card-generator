import { useState } from "react";

export const useInputValidation = (validateInput) => {
  const [input, setInput] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const enteredInputIsValid = validateInput(input);
  const isInvalidInput = isTouched && !enteredInputIsValid;

  const handleIsTouched = () => {
    setIsTouched(true);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const reset = () => {
    setIsTouched(false);
    setInput("");
  };

  return {
    input,
    handleInputChange,
    handleIsTouched,
    enteredInputIsValid,
    isInvalidInput,
    reset,
  };
};
