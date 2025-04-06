import { Button } from "../../styles/Button.styles";
import { FormProps } from "../../types/forms";
import { ApiError, FormElement } from "./Form.styles";

export const Form = ({ submitForm, children, apiError }: FormProps) => {
  return (
    <>
      <FormElement onSubmit={submitForm}> 
        {children}
        {apiError && <ApiError>{apiError}</ApiError>}
        <Button type="submit">Request</Button>
      </FormElement>
    </>)
};