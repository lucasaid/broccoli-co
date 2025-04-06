import { Input } from "../../styles/Input.styles";
import { FormFieldProps } from "../../types/forms";
import { Error } from "./FormField.styles";

const FormField: React.FC<FormFieldProps> = ({
  type,
  placeholder,
  name,
  value,
  register,
  error,
  valueAsNumber,
}) => (
  <>
    <Input
      type={type}
      value={value}
      placeholder={placeholder}
      {...register(name, { valueAsNumber })}
      error={error || undefined}
    />
    {error && <Error>{error.message}</Error>}
  </>
);
export default FormField;
