"use client";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const { loggedIn }  = useAuth();
  console.log(loggedIn);

  function handleLogin(val: string) {
    router.push(val);
  }
  function LoggedinView() {
    return (
      <>
        <div className="m-4 flex flex-col">
          {" "}
          <button
            className="bg-slate-950  text-white p-2 rounded-2xl hover:bg-slate-700"
            onClick={() => {
              handleLogin("login");
            }}
          >
            Go to chats
          </button>
        </div>
        <div className="m-4 flex flex-col">
          {" "}
          <button
            className="bg-slate-950  text-white p-2 rounded-2xl hover:bg-slate-700"
            onClick={() => {
              handleLogin("signup");
            }}
          >
            Logout
          </button>
        </div>
      </>
    );
  }
  function LogOutView() {
    return (
      <>
        <div className="m-4 flex flex-col">
          {" "}
          <button
            className="bg-slate-950  text-white p-2 rounded-2xl hover:bg-slate-700"
            onClick={() => {
              handleLogin("login");
            }}
          >
            Login
          </button>
        </div>
        <div className="m-4 flex flex-col">
          {" "}
          <button
            className="bg-slate-950  text-white p-2 rounded-2xl hover:bg-slate-700"
            onClick={() => {
              handleLogin("signup");
            }}
          >
            Signup
          </button>
        </div>
      </>
    );
  }

  return (
    <div className="bg-gray-200 h-[100px] w-full">
      <div className=" flex justify-between ">
        <div className=" p-6">Logo</div>

        <div className=" flex">
          {" "}
          {!loggedIn ? <LogOutView /> : <LoggedinView />}
        </div>
      </div>
    </div>
  );
}
