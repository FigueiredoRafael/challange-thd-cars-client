import axios from "axios";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import userRegisterModal from "../../hooks/useRegisterModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import { toast } from "react-hot-toast";

const apiUrl = import.meta.env.VITE_API_URL;


const RegisterModal = () => {
  const registerModal = userRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post(`${apiUrl}cars`, data)
      .then(() => {
        toast.success("Congratulations!");
        registerModal.onClose();
      })
      .catch(() => {
        toast.error("Something went wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Heading title='Welcome to Car Challenge' subtitle='Add a car to database!' />
      <Input
        id='make'
        label='Make'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id='model'
        label='Model'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id='package'
        label='Package'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id='color'
        label='Color'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id='year'
        label='Year'
        type="number"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id='category'
        label='Category'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id='mileage'
        label='Mileage (mi)'
        type="number"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id='price'
        label='Price (cents)'
        type="number"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className='flex flex-col gap-4 mt-3'>
      <hr />
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title='Register'
      actionLabel='Continue'
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
