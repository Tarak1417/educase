import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <main className="bg-gray-100">
      <div className="flex flex-col justify-end h-svh p-4 sm:max-w-lg md:max-w-xl mx-auto">
        <h1 className="text-[26px] mb-2 font-[700] text-[#1D2226]  leading-[18px] font-rubik">
          Welcome to PopX
        </h1>
        <p className="mt-1 mb-3 text-[17px] font-[400] text-[#919191] leading-[25px] font-rubik">
          Lorem ipsum dolor sit amet <br className="md:hidden lg:hidden block"/> consectetur adipisicing elit.
        </p>

        <section className="flex flex-col gap-2.5 mt-4 mb-6">
          <button
            className="py-3 px-4 text-[16px] font-medium text-white bg-[#6C25FF] rounded-md hover:bg-indigo-700 leading-[17px] font-rubik"
            onClick={() => navigate("/create")}
          >
            Create Account
          </button>
          <button
            className="p-3 text-[16px] font-[700] text-[#1D2226] bg-[#6c25FF48] rounded-md leading-[17px] font-rubik"
            onClick={() => navigate("/login")}
          >
            Already Registered? Login
          </button>
        </section>
      </div>
    </main>
  );
};

export default Welcome;