import { Form } from "../Form";
import { Hr } from "./SignUp.styles";
import { Loader } from "../../styles/Loader.styles";
import { requestInvite } from "../../services/api";
import { SignUpSchema, FormData } from "../../types/forms";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "../FormField";
import Modal from "../Modal/Modal";
import { Button } from "../../styles/Button.styles";
import { COMPANY_NAME } from "../../utils/constants";

export const SignUp = ({
  isOpen,
  closeModal,
}: {
  isOpen: boolean;
  closeModal: () => void;
}) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [controller] = useState(new AbortController());
  const [apiError, setApiError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(SignUpSchema), // Apply the zodResolver
  });

  const closeSignUp = () => {
    controller.abort();
    reset();
    closeModal();
  };
  const submitForm: SubmitHandler<FormData> = async (data) => {
    try {
      setLoading(true);
      setApiError(null);
      const response = await requestInvite(
        {
          name: data.name,
          email: data.email,
        },
        controller.signal
      );
      setLoading(false);
      if (response === "Registered") {
        setSuccess(true);
      } else {
        throw new Error();
      }
    } catch (error) {
      setApiError(
        error instanceof Error ? error.message : "Something went wrong"
      );
      setLoading(false);
    }
  };
  return (
    <Modal isOpen={isOpen} closeModal={closeSignUp}>
      {!success && <><h1>Request an invite</h1>
      <Hr />
      {loading && <Loader />}
      {!loading && (
        <Form submitForm={handleSubmit(submitForm)} apiError={apiError}>
          <FormField
            type="text"
            placeholder="Full Name"
            name="name"
            autoFocus
            register={register}
            error={errors.name}
          />
          <FormField
            type="email"
            placeholder="Email"
            name="email"
            register={register}
            error={errors.email}
          />
          <FormField
            type="email"
            placeholder="Confirm Email"
            name="confirmEmail"
            register={register}
            error={errors.confirmEmail}
          />
        </Form>
      )}</>}
      {success && <>
        <h1>All Done!</h1>
        <Hr />
        <p>You'll be the first to experience ${COMPANY_NAME}. when we launch.</p>
        <Button onClick={closeSignUp}>Ok</Button>
      </>}
    </Modal>
  );
};
