import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [inputs, setInputs] = useState(initialState);

  const inputChange = ({ target }) => {
    setInputs({
      ...inputs,
      [target.name]: target.value,
    });
  };

  const reset = (values = initialState) => {
    setInputs(values);
  };

  return [inputs, inputChange, reset];
};
