import { ApiError, FormElement } from "./Form.styles";
import { Button } from "../../styles/Button.styles";
import { FormProps } from "../../types/forms";

/**
 * Renders a form component with customizable children and error display.
 *
 * @param {FormProps} props - The properties for the form component.
 * @param {Function} props.submitForm - The function to handle form submission.
 * @param {React.ReactNode} props.children - The content elements to be rendered inside the form.
 * @param {string | null} props.apiError - An error message to be displayed if present.
 */

export const Form = ({ submitForm, children, apiError }: FormProps) => {
  return (
    <>
      <FormElement onSubmit={submitForm} noValidate>
        {children}
        {apiError && <ApiError>{apiError}</ApiError>}
        <Button type="submit">Request</Button>
      </FormElement>
    </>
  );
};

export default Form;
