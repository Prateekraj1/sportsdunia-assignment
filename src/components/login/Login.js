"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/config/firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { minLengthMessage, requiredMessage, validateEmail } from "@/helpers/validationFunction";
import ErrorLabel from "../common/form/ErrorLabel";
import InputGroup from "../common/form/InputGroup";
import InputLabel from "../common/form/InputLabel";

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ mode: "all" });

    const onSubmit = async ({ email, password }) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            toast.success("Logged in successfully!", { position: "top-center" });
            window.location.href = "/dashboard";
        } catch (error) {
            toast.error(error.message, { position: "top-center" });
        }
    };

    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            toast.success("Google sign-in successful!", { position: "top-center" });
            window.location.href = "/dashboard";
        } catch (error) {
            toast.error(error.message, { position: "top-center" });
        }
    };
    const validationRules = {
        email: {
            required: requiredMessage(),
            validate: (value) => {
                return validateEmail(value);
            }
        },
        password: {
            required: requiredMessage(),
            minLength: {
                value: 6,
                message: minLengthMessage(6),
            },
        },
    };

    return (
        <div className="max-w-md mx-auto p-6 mt-10 bg-white shadow-lg rounded-lg max-h-fit">
            <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <InputGroup>
                    <InputLabel id="email">Email </InputLabel>
                    <input
                        type="email"
                        className="w-full border rounded px-3 py-2 mt-1"
                        placeholder="Enter your email"
                        {...register("email", validationRules.email)}
                    />
                    {errors.email && <ErrorLabel className=" text-sm mt-1">{errors.email.message}</ErrorLabel>}
                </InputGroup>
                <InputGroup>
                    <InputLabel id="password">Password </InputLabel>
                    <input
                        type="password"
                        className="w-full border rounded px-3 py-2 mt-1"
                        placeholder="Enter your password"
                        {...register("password", validationRules.password)}
                    />
                    {errors.password && <ErrorLabel className=" text-sm mt-1">{errors.password.message}</ErrorLabel>}
                </InputGroup>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition mb-4"
                >
                    Login
                </button>
            </form>

            <button
                onClick={handleGoogleLogin}
                className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition mb-4"
            >
                Sign in with Google
            </button>

            <p className="text-center">
                New user? <a href="/register" className="text-blue-500">Register here</a>
            </p>
        </div>
    );
}

export default Login;
