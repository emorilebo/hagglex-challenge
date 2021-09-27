import React, { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    user: {
      username: "",
      password: "",
    },
  });

  const handleChange = (e) => {
    setFormData({
      user: {
        ...formData.user,
        [e.target.name]: e.target.value,
      },
    });
  };

  return (
    <div className="flex-row lg:flex ">
      <div className=" bg-blue-800 lg:w-3/5  pb-10">
        <div className="flex items-center justify-center mt-8">
          <img className="w-1/3 h-1/2 mb-5" src="/illustrators.png" alt="" />
        </div>
        <div className="flex items-center justify-center">
          <p className="text-3xl font-semibold text-white mb-5">Trade Globally</p>
        </div>
        <div className="flex items-center justify-center">
          <p className="text-sm text-white">
            Lorem Ipsum dolar sit amet, consectetur sadipscing elitr, sed diam{" "}
          </p>
        </div>
        <div className="flex items-center justify-center">
          <p className="text-sm text-white">nonumy eirmod tempor invident ut labore et dolore magna</p>
        </div>
      </div>

      <figure className="h-screen lg:w-2/5 flex bg-blue-900">
        <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-1">
          <blockquote className="text-2xl font-medium m-3">
            <p className="text-lg font-bold  p-6">Welcome Back</p>
          </blockquote>

          <div className="text-primary m-6">
            <form className="mx-3">
              <label className="text-left m-3 font-semibold">
                Email Address
              </label>
              <div className="mr-9">
                <input
                  name="username"
                  type="text"
                  value={formData.user.username}
                  onChange={handleChange}
                  placeholder="example@mail.com"
                  className={
                    "w-full  ml-3  text-primary placeholder-text-gray-500 border-b border-black outline-none text-md transition duration-150 ease-in-out mb-4"
                  }
                />
                <label className="m-3 font-semibold">Password</label>
                <input
                  name="password"
                  type="password"
                  value={formData.user.password}
                  onChange={handleChange}
                  placeholder="************"
                  className={
                    "w-full mx-4 text-primary placeholder-text-gray-500 border-b border-black outline-none text-md transition duration-150 ease-in-out mb-4"
                  }
                />
              </div>
              <a className="m-3 font-semibold text-blue-900" href="#">
                Forgot password?
              </a>
              <div className="flex items-center mt-4 justify-center">
                <button
                  className={
                    "bg-blue-700 w-full hover:bg-blue-500 py-2 px-4 mx-4 text-md text-white rounded border border-blue focus:outline-none focus:border-black"
                  }
                  value="Login"
                >
                  SIGN IN
                </button>
              </div>
            </form>
            <div className="flex items-center mt-3 justify-center">
              <button
                className={"justify-center text-blue-500 hover:underline"}
              >
                New user? Sign up to get started
              </button>
            </div>
          </div>

          <div className="flex justify-around py-10">
            <a className="text-sm font-bold text-blue-900" href="#">
              Need help?
            </a>
            <div className="items-end px-3">
              <a className="px-3 text-sm text-blue-900" href="#">
                Privacy
              </a>
              <a className="text-sm font-bold text-gray-600" href="#">
                Terms & Policy
              </a>
            </div>
          </div>
        </div>
      </figure>
    </div>
  );
}
