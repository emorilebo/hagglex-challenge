import React, { useState } from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

export default function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
    phonenumber: "",
  });

  const handleChange = (e) => {
    setFormData({
        ...formData.user,
        [e.target.name]: e.target.value,
    });
  };

  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    update(proxy, result) {
      console.log(result);
    },
    variables: formData,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    addUser();
  };

  return (
    <div className="flex-row lg:flex ">
      <div className=" bg-blue-800 lg:w-3/5  pb-10">
        <div className="flex items-center justify-center mt-8">
          <img className="w-1/3 h-1/2 mb-5" src="/illustrators.png" alt="" />
        </div>
        <div className="flex items-center justify-center">
          <p className="text-3xl font-semibold text-white mb-5">
            Trade Globally
          </p>
        </div>
        <div className="flex items-center justify-center">
          <p className="text-sm text-white">
            Lorem Ipsum dolar sit amet, consectetur sadipscing elitr, sed diam{" "}
          </p>
        </div>
        <div className="flex items-center justify-center">
          <p className="text-sm text-white">
            nonumy eirmod tempor invident ut labore et dolore magna
          </p>
        </div>
      </div>

      <figure className="h-screen lg:w-2/5 flex bg-blue-900">
        <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-1">
          <blockquote className="text-2xl font-medium m-5">
            <p className="text-lg font-bold pl-6">Create new account</p>
          </blockquote>

          <div className="text-primary m-6">
            <form className="mx-3">
              <label className="text-left m-3 font-semibold">
                Email Address
              </label>
              <div className="mr-9">
                <input
                  name="email"
                  type="text"
                  value={formData.email}
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
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="************"
                  className={
                    "w-full mx-4 text-primary placeholder-text-gray-500 border-b border-black outline-none text-md transition duration-150 ease-in-out mb-4"
                  }
                />
                <label className="m-3 font-semibold">Create username</label>
                <input
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Chrissteve"
                  className={
                    "w-full mx-4 text-primary placeholder-text-gray-500 border-b border-black outline-none text-md transition duration-150 ease-in-out mb-4"
                  }
                />
                <label className="m-3 my-4 font-semibold text-sm ">
                  Enter your phone number
                </label>
                <div className="flex items-center">
                  <img className="h-4 m-3" src="/nig.png" />
                  <p>(+234)</p>
                  <input
                    name="phone"
                    type="number"
                    value={formData.phonenumber}
                    onChange={handleChange}
                    placeholder="813 000 0000"
                    className={
                      "w-full ml-2 -mr-4 text-primary placeholder-text-gray-500 border-b border-black outline-none text-md transition duration-150 ease-in-out mb-4"
                    }
                  />
                </div>
              </div>
              <a className="m-3 font-semibold text-sm text-blue-900" href="#">
                Get referal code?
              </a>
              <div className="flex items-center mt-4 justify-center">
                <button
                  onClick={onSubmit}
                  className={
                    "bg-blue-700 w-full hover:bg-blue-500 py-2 px-4 mx-4 text-md text-white rounded border border-blue focus:outline-none focus:border-black"
                  }
                  value="Login"
                >
                  SIGN UP
                </button>
              </div>
            </form>
            <div className="flex items-center mt-3 justify-center">
              <button
                className={"justify-center text-blue-900 hover:underline"}
              >
                Have an account? Sign in to explore
              </button>
            </div>
          </div>

          <div className="flex justify-around py-6">
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

const REGISTER_USER = gql`
  mutation register(
    $email: String!
    $password: String!
    $username: String!
    $phonenumber: String!
  ) {
    register(
      data: {
        email: $email
        password: $password
        username: $username
        phone: $phonenumber
      }
    ) {
      id
      email
      username
      phonenumber
      createdAt
      token
    }
  }
`;
