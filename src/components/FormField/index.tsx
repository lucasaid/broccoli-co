import { Input } from "../../styles/Input.styles";
import { FormFieldProps } from "../../types/forms";
import { Error } from "./FormField.styles";

/**
 * A form field component that renders an input element, with
 * an option to show an error message below the input.
 *
 * @param {boolean} autoFocus Whether the input should autofocus.
 * @param {FieldError} error The error message to display.
 * @param {string} name The name of the input element.
 * @param {string} placeholder The placeholder text to show in the input.
 * @param {UseFormRegister<FormData>} register A function to register the input with the form.
 * @param {string} type The type of the input element.
 * @param {string} autoComplete The autocomplete attribute of the input element.
 */
export const FormField = ({
  autoFocus,
  error,
  name,
  placeholder,
  register,
  type,
  autoComplete
}: FormFieldProps) => (
  <>
    <Input
      type={type}
      aria-label={placeholder}
      autoFocus={autoFocus}
      placeholder={placeholder}
      autoComplete={autoComplete}
      {...register(name)}
      error={error || undefined}
    />
    {error && <Error>{error.message}</Error>}
  </>
);
export default FormField;
