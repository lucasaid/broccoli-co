import { SubmitHandler, useForm } from "react-hook-form";
import { useCallback, useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import Form from "../Form";
import FormField from "../FormField";
import Modal from "../Modal/Modal";

import { requestInvite } from "../../services/api";

import { Hr } from "./SignUp.styles";
import { Button } from "../../styles/Button.styles";
import { Loader } from "../../styles/Loader.styles";

import { SignUpSchema, FormData } from "../../types/forms";
import { COMPANY_NAME } from "../../utils/constants";
import { SignUpProps } from "../../types/common";

export const SignUp = ({
  isOpen,
  closeModal,
}: SignUpProps) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [controller] = useState(() => new AbortController());
  const [apiError, setApiError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(SignUpSchema),
  });

  const closeSignUp = useCallback(() => {
    controller.abort();
    reset();
    closeModal();
  }, [controller, reset, closeModal]);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      closeSignUp();
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  },[])
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
      if (response === "Registered") {
        setSuccess(true);
      } else {
        throw new Error("Unexpected response");
      }
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        console.warn("Request was aborted");
      } else {
        setApiError(
          error instanceof Error ? error.message : "Something went wrong"
        );
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <Modal isOpen={isOpen} closeModal={closeSignUp}>
      {!success ? (
        <>
          <h1>Request an invite</h1>
          <Hr />
          {loading ? (
            <Loader />
          ) : (
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
                autoComplete="email"
                error={errors.email}
              />
              <FormField
                type="email"
                placeholder="Confirm Email"
                name="confirmEmail"
                register={register}
                autoComplete="email"
                error={errors.confirmEmail}
              />
            </Form>
          )}
        </>
      ) : (
        <>
          <h1>All Done!</h1>
          <Hr />
          <p>
            You'll be the first to experience {COMPANY_NAME} when we launch.
          </p>
          <Button onClick={closeSignUp}>Ok</Button>
        </>
      )}
    </Modal>
  );
};

export default SignUp;
