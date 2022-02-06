import { ValidationError } from "yup";


export default function getValidationErros(ValidationError) {
  const validationError = {};

  ValidationError.inner.forEach((error) => {
    validationError[error.path || ""] = error.message;
  });

  return validationError;
}