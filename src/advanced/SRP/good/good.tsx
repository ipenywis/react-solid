import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { InputField } from "./inputField";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProfilePictureUploader } from "./profilePictureUploader";
import axios from "axios";
import { updateUserProfile } from "./services";

interface UserFormInput {
  name: string;
  email: string;
  password: string;
}

const validationSchema = z
  .object({
    name: z.string().min(1, "Please enter your name"),
    email: z.string().email("Please enter a valid email"),
    password: z
      .string()
      .regex(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
        "Please enter a strong password"
      ),
  })
  .required();

//GOOD ✅
export function EditUserProfileGOOD() {
  const onSubmit = async (data) => {
    // e.preventDefault(); ///< No more

    // Perform API POST request here with formData
    // Replace this with your actual API endpoint and payload
    console.log("Sending data to the API:", data);
    await updateUserProfile(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormInput>({
    resolver: zodResolver(validationSchema),
  });

  console.log("Errors: ", errors);

  return (
    <div className="flex flex-col max-w-md p-4">
      <h1 className="text-2xl font-bold mb-4">Edit User Profile</h1>
      <form
        className="flex flex-col items-start"
        onSubmit={handleSubmit(onSubmit)}
      >
        <ProfilePictureUploader />
        <InputField
          labelText="Name"
          fieldRegister={register("name")}
          error={errors.name?.message}
        />
        <InputField
          labelText="Email"
          fieldRegister={register("email")}
          error={errors.email?.message}
        />
        <InputField
          labelText="Password"
          fieldRegister={register("password")}
          error={errors.password?.message}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
}
