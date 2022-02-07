import { ValidationError } from "yup";


export default function getValidationErros(err) {
  const validationError = {};

  err.inner.forEach((error) => {
    validationError[error.path || ""] = error.message;
  });

  return validationError;
}