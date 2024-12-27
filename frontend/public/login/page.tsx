"use client";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

export default function Login() {

  const { login  } = useAuth();
  function handleSubmit(e : React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    login(email, password);

  }
  return (
    <div className=" flex items-center justify-center min-h-screen ">
      <div className=" bg-white rounded-lg shadow-md p-8 w-96">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Welcome back!</h1>
          <p className="mt-2 text-center text-gray-500">Sign in to continue</p>
        </div>
        <form id="myform" onSubmit={handleSubmit}>
         
          <div className="text-base ">
            <div className="m-4 flex flex-col">
              <label htmlFor="email" className="mb-2 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="border-transparent text-gray-500 focus:border-0 outline outline-0"
                placeholder="Your email id"
                required
              />
              <div className="border-2 "></div>
            </div>
            <div className="m-4 flex flex-col">
              {" "}
              <label htmlFor="password" className="mb-2 text-sm text-gray-600">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="border-transparent text-gray-500 focus:border-0 outline outline-0"
                placeholder="Your password"
                required
              />
              <div className="border-2 "></div>
            </div>

            <div className="m-4 flex flex-col">
              {" "}
              <button
                className="bg-slate-950 tracking-widest text-white p-2 rounded-2xl hover:bg-slate-700"
                type="submit"
              >
                Login
              </button>
            </div>

            <div className="text-center">
              <p className="text-gray-500">
                Does&apos;t have an account ?{" "}
                <Link className="text-black" href="/signup">
                  Signup
                </Link>
              </p>
            </div>
          </div>
        </form>
        <div className="flex justify-center">
          <div className="w-1/4 my-5 border-2 border-slate-800 "></div>
        </div>
      </div>
    </div>
  );
}
