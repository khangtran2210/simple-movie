import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "./schemal";
import InputCustom from "components/customField/InputCustom";

const SignupForm = () => {
  // Declare schema
  const schema = signupSchema;
  // useForm
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  // Function handle submit
  const handleSubmitData = (data) => console.log(data);
  return (
    <div className="flex flex-col items-center p-4">
      <div className="my-2 text-3xl font-semibold text-primary">Sign Up</div>
      <div className="w-full h-[1px] bg-primary"></div>
      <form
        autoComplete="false"
        onSubmit={handleSubmit(handleSubmitData)}
        className="w-full m-2 mx-auto"
      >
        {/*--------------------------- Field ---------------------------------*/}
        {/* Username */}
        <div className="flex flex-col gap-2 mb-2">
          <label htmlFor="username" className="text-yellow-100 cursor-pointer">
            Username
          </label>
          <InputCustom
            control={control}
            id="username"
            name="username"
            type="text"
            placeholder="Enter your username"
          ></InputCustom>
          {errors?.username && (
            <p className="text-sm text-red-500">{errors?.username?.message}</p>
          )}
        </div>
        {/* Password */}
        <div className="flex flex-col gap-2 mb-2">
          <label htmlFor="password" className="text-yellow-100 cursor-pointer">
            Password
          </label>
          <InputCustom
            control={control}
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
          ></InputCustom>
          {errors?.password && (
            <p className="text-sm text-red-500">{errors?.password?.message}</p>
          )}
        </div>
        {/* Confirm Password */}
        <div className="flex flex-col gap-2 mb-2">
          <label
            htmlFor="confirm_password"
            className="text-yellow-100 cursor-pointer"
          >
            Confirm Password
          </label>
          <InputCustom
            control={control}
            id="confirm_password"
            name="confirm_password"
            type="password"
            placeholder="Enter your password"
          ></InputCustom>
          {errors?.confirm_password && (
            <p className="text-sm text-red-500">
              {errors?.confirm_password?.message}
            </p>
          )}
        </div>
        {/* Email */}
        <div className="flex flex-col gap-2 mb-2">
          <label htmlFor="email" className="text-yellow-100 cursor-pointer">
            Email
          </label>
          <InputCustom
            control={control}
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
          ></InputCustom>
          {errors?.email && (
            <p className="text-sm text-red-500">{errors?.email?.message}</p>
          )}
        </div>
        <div className="w-full h-[1px] bg-primary"></div>
        {/*--------------------------- Button ---------------------------------*/}
        <div className="flex items-center mt-5 justify-evenly">
          {/* Reset Button */}
          <button
            type="button"
            className="w-1/3 p-2 text-white bg-secondary rounded-xl hover:opacity-80"
            onClick={(e) => {
              e.preventDefault();
              reset({
                username: "",
                password: "",
                comfirm_password: "",
                email: "",
              });
            }}
          >
            <span>Reset</span>
          </button>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-1/2 p-2 text-white bg-primary rounded-xl hover:opacity-80"
          >
            <span>Submit</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
