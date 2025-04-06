import { FieldError, UseFormRegister } from "react-hook-form";
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
  autoFocus?: boolean;
  autoComplete?: string;
};

export type ValidFieldNames = "email" | "name" | "confirmEmail";

export const SignUpSchema: ZodType<FormData> = z
  .object({
    email: z.string().min(1, "Email is required.").email(),
    name: z.string().min(1, "Full name is required.").min(3, "Full name must be at least 3 characters."),
    confirmEmail: z.string().min(1, "Confirm Email is required.").email(),
  })
  .refine((data: FormData) => data.email === data.confirmEmail, {
    message: "Emails do not match",
    path: ["confirmEmail"],
  });
