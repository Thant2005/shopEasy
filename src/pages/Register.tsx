import { useForm } from "react-hook-form";
import { Link } from "react-router";

function Register() {
  const {} = useForm();
  return (
    <div className="mt-30 max-w-xs  bg-white shadow-lg mx-auto">
      <div className="px-5 py-7">
        <h1 className="text-lg font-semibold mb-3.5">Sign Up</h1>
        <form action="">
          <div>
            <label htmlFor="" className="text-sm font-semibold">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="current-email"
              className="px-2 mt-1 py-0.5 border border-zinc-300 block rounded-sm w-full
            "
            />
          </div>
          <div className="my-3 ">
            <label htmlFor="" className="text-sm font-semibold">
              Password
            </label>
            <input
              autoComplete="current-password"
              type="password"
              name="password"
              id="password"
              className="px-2 mt-1 py-0.5 border border-zinc-300 block rounded-sm w-full
            "
            />
          </div>
          <button className="text-sm bg-blue-600 text-white px-3 py-1 rounded-xs font-normal hover:bg-blue-700 cursor-pointer">
            Sign Up
          </button>
        </form>
        <div className="text-center mt-4 text-sm text-zinc-600">
          <span>Already have an account? </span>
          <Link className="text-blue-600" to={"/login"}>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
