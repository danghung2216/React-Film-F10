import React, { Fragment, useState } from "react";

import LoginWithGG from "./GoogleLogin";
import {
  FaFacebook,
  FaGoogle,
  FaGithub,
  FaEyeSlash,
  FaEye,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import instance from "../..";

export interface User {
  username: string;
  email?: string;
  password: string;
  confirmPassword?: string;
  id?: string | number;
}

export interface UserInfo {
  name: string;
  email: string;
  phone: number;
  address: string;
}

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isOpenGG, setIsOpenGG] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsOpenGG(true);
  };

  const handleSubmit = (user: User) => {
    (async () => {
      try {
        const { data } = await instance.post(`/login`, user);
        if (data.user) {
          sessionStorage.setItem("accessToken", data.accessToken);
          sessionStorage.setItem("username", data.user.username);
          toast("Login successfully! Welcome to Loop Store!");
          setTimeout(() => {
            navigate("/");
          }, 2000);
        }
      } catch (error) {
        alert("Please enter correct email, username and password.");
      }
    })();
  };

  return (
    <Fragment>
      <div className="container-wrap-login flex justify-items-center  items-center h-screen">
        <div className="login-wraper mx-auto border-2 p-5 rounded-2xl text-white">
          <div className="login-content flex flex-col ">
            <h1 className="my-auto text-center text-5xl">Login</h1>
            <div className="login-form flex flex-col my-2 items-center">
              <label htmlFor="user" className="text-left w-64 mt-4 mb-1">
                User Name
              </label>
              <input
                id="user"
                className="m-auto p-2 border-2 w-64 rounded-lg text-black "
                type="text
              "
                placeholder="Username"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="password" className="text-left w-64 mt-4 mb-1">
                Pass Word
              </label>
              <div className="input-password  flex flex-row items-center relative">
                <input
                  id="password"
                  className="password1 m-auto p-2 border-2 w-64 rounded-lg z-0 text-black  "
                  type={showPassword === true ? "text" : "password"}
                  placeholder="**********"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="z-10 absolute translate-x-56">
                  <button
                    className=""
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </button>
                </span>
              </div>
              <button
                // className="border-2 w-32 rounded-2xl bg-cyan-300 my-5"
                className={
                  email && password
                    ? " border-2 w-32 rounded-2xl bg-cyan-300 my-5 mx-2 text-black"
                    : "  border-2 w-32 rounded-2xl my-5  opacity-50"
                }
                onClick={email && password ? handleSubmit : undefined}
                disabled={!email || !password}
              >
                Submit
              </button>
              <a
                href=""
                className=" hover:underline hover:text-blue-400 {user && }"
              >
                Forgot Password?
              </a>
            </div>
          </div>
          <div className="login-footer flex flex-col items-center">
            <h2>
              Login with or{" "}
              <a href="" className="text-blue-400 hover:underline">
                SignUp
              </a>
              ?
            </h2>
            <div className="login-icon flex flex-row space-x-5 mt-3 ">
              <a href="" className="facebook">
                <FaFacebook size={35} />
              </a>
              <button className="google" onClick={handleLogin}>
                <FaGoogle size={35} />
              </button>
              <a href="" className="github">
                <FaGithub size={35} />
              </a>
            </div>
          </div>
        </div>
        {isOpenGG && <LoginWithGG />}
      </div>
    </Fragment>
  );
};

export default LoginPage;
