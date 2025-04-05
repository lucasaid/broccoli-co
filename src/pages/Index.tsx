import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useModal } from "../hooks/useModal";
import { requestInvite } from "../services/api";
import { Button } from "../styles/Button.styles";
import { Loader } from "../styles/Loader.styles";
import styled from "styled-components";
import Modal from "../components/Modal/Modal";
import { Input } from "../styles/Input.styles";

const Hr = styled.hr`
  border: 1px solid white;
  width: 3rem;
`;
type Inputs = {
  name: string;
  email: string;
  confirm_email: string;
};
const Index = () => {
  const { openModal, isOpen, closeModal } = useModal();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const submitForm: SubmitHandler<Inputs> = async (data) => {
    try {
      setLoading(true);
      await requestInvite({ name: data.name, email: data.email });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        {loading && <Loader />}
        {!loading && (
          <>
            <h1>Request an invite</h1>
            <Hr />
            <form onSubmit={handleSubmit(submitForm)} style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}> 
              <Input
                placeholder="Full Name"
                {...register("name", { required: true })}
              />
              {errors.name && <span>This field is required</span>}
              <Input
                type="email"
                placeholder="Email"
                {...register("email", { required: true })}
              />
              <Input
                type="email"
                placeholder="Confirm Email"
                {...register("confirm_email", { required: true })}
              />
              {errors.email && <span>This field is required</span>}
              <Button type="submit">Request</Button>
            </form>
          </>
        )}
      </Modal>
      <h2>
        A better way
        <br />
        to enjoy every day.
      </h2>
      <p>Be the first to know when we launch.</p>
      <Button onClick={openModal}>Request an invite</Button>
    </>
  );
};

export default Index;
