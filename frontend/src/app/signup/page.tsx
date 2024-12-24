import Link from "next/link";

export default function Signup() {
  return (
    <div className=" tracking-wider my-20 flex flex-row justify-center content-center  ">
      <div className="bg-zinc-50 rounded-lg w-1/4 h-3/4 p-10">
        <h1 className="text-lg font-bold">Sign-up </h1>
        <div className="text-base ">
          <div className="m-4 flex flex-col ">
            {" "}
            <label htmlFor="name" className=" mb-2">
              Name
            </label>
            <input
              className="border-transparent  focus:border-0 outline outline-0"
              placeholder="Your name"
              type="text"
            />
            <div className="border-2 "></div>
          </div>
          <div className="m-4 flex flex-col">
            <label htmlFor="email" className="mb-2">
              Email
            </label>
            <input
              type="email"
              className="border-transparent  focus:border-0 outline outline-0"
              placeholder="Your email id"
            />
            <div className="border-2 "></div>
          </div>
          <div className="m-4 flex flex-col">
            {" "}
            <label htmlFor="password" className="mb-2">
              Password
            </label>
            <input
              type="password"
              className="border-transparent  focus:border-0 outline outline-0"
              placeholder="Your password"
            />
            <div className="border-2 "></div>
          </div>

          <div className="m-4 flex flex-col">
            {" "}
            <button
              className="bg-slate-950 tracking-widest text-white p-2 rounded-2xl hover:bg-slate-700"
              name="ss"
            >
              Submit
            </button>
          </div>

          <div className="text-center">
            <p>
              Have an account ? <Link href="/login">Login</Link>
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-1/4 my-5 border-2 border-slate-800 "></div>
        </div>
      </div>
    </div>
  );
}
