import { ChangeEvent, useState } from 'react';

type InputValue = string;
type InputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => void;
type InputResetHandler = () => void;

interface InputProps {
  value: InputValue;
  handleChange: InputChangeHandler;
  resetValue: InputResetHandler;
}

const useInputValue = (initialValue: InputValue): InputProps => {
  const [value, setValue] = useState(initialValue);

  const handleChange: InputChangeHandler = (event) => {
    setValue(event.target.value);
  };

  const resetValue: InputResetHandler = () => {
    setValue(initialValue);
  };

  return { value, handleChange, resetValue };
};

export default useInputValue;
