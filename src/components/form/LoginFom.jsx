import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./schemal";
import InputCustom from "components/customField/InputCustom";

const LoginForm = () => {
  // Declare schema
  const schema = loginSchema;
  // useForm
  const {
    handleSubmit,
    control,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  // Function handle submit
  const handleSubmitData = (data) => console.log(data);
  return (
    <div className="flex flex-col items-center">
      <div className="my-3 text-3xl font-semibold text-primary">Login</div>
      <div className="w-full h-[1px] bg-primary"></div>
      <form
        autoComplete="false"
        onSubmit={handleSubmit(handleSubmitData)}
        className="w-full p-4 m-2 mx-auto"
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

        {/*--------------------------- Button ---------------------------------*/}
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-2 text-white bg-primary rounded-xl hover:opacity-80"
        >
          <span>Login</span>
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
