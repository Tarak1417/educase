import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = () => {
    navigate("/settings");
  };

  return (
    <div className="flex  flex-row md:flex-col lg:flex-col  justify-center md:justify-center lg:justify-center md:items-center lg:items-center pt-4  min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md   rounded-2xl p-2">
        {/* Heading */}
        <h2 className="text-[28px] font-[700] text-[#1D2226] mb-2">
          Sign in to your <br className="md:hidden lg:hidden block"/> PopX account
        </h2>
        <p className="text-[18px] text-[#919191] font-[600] mb-6">
          Lorem ipsum dolor sit amet,<br className="md:hidden lg:hidden block"/> consectetur adipiscing elit.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email Field */}
          <fieldset className="border border-gray-300 rounded-lg pb-2 ">
            <legend className="text-[13px] text-[#6C25FF] px-2 font-[500]">
              Email Address
            </legend>
            <input
              type="email"
              placeholder="Enter email address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Invalid email format",
                },
              })}
              className="w-full px-3 text-[14px] text-gray-900 outline-none  focus:border-none  font-[500]"
            />
          </fieldset>
          {errors.email && (
            <p className="text-[13px] text-[#DD4A3D]">{errors.email.message}</p>
          )}

          {/* Password Field */}
          <fieldset className="border border-gray-300 rounded-lg pb-2">
            <legend className="text-[13px] text-[#6C25FF] px-2  font-[500]">
              Password
            </legend>
            <input
              type="password"
              placeholder="Enter password"
              {...register("password", {
                required: "Password is required",
              })}
              className="w-full text-[14px] text-gray-900 outline-none px-3 focus:border-none  font-[500]"
            />
          </fieldset>
          {errors.password && (
            <p className="text-[13px] text-[#DD4A3D]">
              {errors.password.message}
            </p>
          )}

          {/* Login Button */}
          <button
            type="submit"
            disabled={!isValid}
            className={`w-full p-3 text-[16px] font-medium text-white rounded-lg transition-all ${
              isValid
                ? "bg-[#6C25FF] hover:bg-[#5a1fd1]"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;