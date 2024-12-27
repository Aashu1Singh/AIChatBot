"use client";

import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

export default function Signup() {
  const { signup } = useAuth();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const name = formData.get("name") as string;
    signup(name, email, password);
  }

  return (
    <div className=" tracking-wider my-20 flex flex-row justify-center content-center  ">
      <div className="bg-white rounded-lg shadow-md p-10 w-96 h-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Welcome back!</h1>
          <p className="mt-2 text-center text-gray-500">Lets have fun</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="text-base ">
            <div className="m-4 flex flex-col ">
              {" "}
              <label htmlFor="name" className=" mb-2 text-gray-600">
                Name
              </label>
              <input
                className="border-transparent text-gray-500 focus:border-0 outline outline-0"
                placeholder="Your name"
                type="text"
                name="name"
              />
              <div className="border-2 "></div>
            </div>
            <div className="m-4 flex flex-col">
              <label htmlFor="email" className="mb-2 text-gray-600">
                Email
              </label>
              <input
                type="email"
                className="border-transparent text-gray-500  focus:border-0 outline outline-0"
                placeholder="Your email id"
                name="email"
              />
              <div className="border-2 "></div>
            </div>
            <div className="m-4 flex flex-col">
              {" "}
              <label htmlFor="password" className="mb-2 text-gray-600">
                Password
              </label>
              <input
                type="password"
                className="border-transparent text-gray-500 focus:border-0 outline outline-0"
                placeholder="Your password"
                name="password"
              />
              <div className="border-2 "></div>
            </div>

            <div className="m-4 flex flex-col">
              {" "}
              <button
                className="bg-slate-950 tracking-widest text-white p-2 rounded-2xl hover:bg-slate-700"
                type="submit"
              >
                Submit
              </button>
            </div>

            <div className="text-center">
              <p className="text-gray-500">
                Have an account ?{" "}
                <Link className="text-black" href="/login">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </form>
        <div className="flex justify-center ">
          <div className="w-1/4 my-5 border-2 border-slate-800 "></div>
        </div>
      </div>
    </div>
  );
}
