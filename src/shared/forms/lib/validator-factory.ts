type CallbackValidator = (value: string) => boolean;
type CreateValidatorReturn = true | string;

const createValidator =
  (callbackValidator: CallbackValidator) =>
  (message: string) =>
  (value: string): CreateValidatorReturn => {
    return callbackValidator(value) || message;
  };

export default createValidator;
