"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/config/firebase";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import InputGroup from "../common/form/InputGroup";
import InputLabel from "../common/form/InputLabel";
import ErrorLabel from "../common/form/ErrorLabel";
import {
  minLengthMessage,
  requiredMessage,
  validateEmail,
} from "@/helpers/validationFunction";
import { setCookie } from "cookies-next";

const Register = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  const validationRules = {
    email: {
      required: requiredMessage(),
      validate: (value) => {
        return validateEmail(value);
      },
    },
    password: {
      required: requiredMessage(),
      minLength: {
        value: 6,
        message: minLengthMessage(6),
      },
    },
    name: {
      required: requiredMessage(),
      minLength: {
        value: 5,
        message: minLengthMessage(5),
      },
    },
  };

  const onSubmit = async ({ name, email, password }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, { displayName: name });

      const token = await userCredential.user.getIdToken();
      setCookie("token", token);

      toast.success("Registered successfully");
      router.push("/dashboard");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-white shadow rounded max-h-fit">
      <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <InputLabel id="name">Name </InputLabel>
          <input
            placeholder="Write your name"
            className="mb-4 p-2 border rounded w-full"
            {...register("name", validationRules.name)}
            type="text"
          />
          {errors.name && <ErrorLabel>{errors.name.message}</ErrorLabel>}
        </InputGroup>
        <InputGroup>
          <InputLabel id="email">Email </InputLabel>
          <input
            placeholder="Write your email"
            className="mb-4 p-2 border rounded w-full"
            {...register("email", validationRules.email)}
            type="email"
          />
          {errors.email && <ErrorLabel>{errors.email.message}</ErrorLabel>}
        </InputGroup>

        <InputGroup>
          <InputLabel id="password">Password </InputLabel>
          <input
            type="password"
            placeholder="Write your password"
            {...register("password", validationRules.password)}
            className="mb-4 p-2 border rounded w-full"
          />
          {errors.password && (
            <ErrorLabel>{errors.password.message}</ErrorLabel>
          )}
        </InputGroup>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition mb-4"
        >
          Register
        </button>
      </form>
    </div>
  );
};
export default Register;
