import { FieldError, FieldErrors, UseFormRegister } from "react-hook-form";
import { z, ZodType } from "zod";

export type FormData = {
  email: string;
  name: string;
  confirmEmail: string;
};
export type FormProps = {
  submitForm: (e?: React.BaseSyntheticEvent) => Promise<void>;
  apiError: string | null;
  children: React.ReactNode;
};

export type FormFieldProps = {
  type: string;
  placeholder: string;
  name: ValidFieldNames;
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
  value?: string;
  autoFocus?: boolean;
};

export type ValidFieldNames = "email" | "name" | "confirmEmail";

export const SignUpSchema: ZodType<FormData> = z
  .object({
    email: z.string().min(1, "Email is required.").email(),
    name: z.string().min(1, "Full name is required."),
    confirmEmail: z.string().min(1, "Confirm Email is required.").email(),
  })
  .refine((data: FormData) => data.email === data.confirmEmail, {
    message: "Emails do not match",
    path: ["confirmEmail"],
  });
