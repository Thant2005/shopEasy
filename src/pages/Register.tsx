import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import type { User } from "../types/User";
import { useAuth } from "../context/AuthContext";
function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();
  const { signUp } = useAuth();
  const onsubmit = (data: User) => {
    const { success, error } = signUp(data);
    if (!success) {
      alert(error);
    } else {
      navigate("/");
      alert("Registration successful!");
    }
  };
  return (
    <div className="mt-30 max-w-xs  bg-white shadow-lg mx-auto">
      <div className="px-5 py-7">
        <h1 className="text-lg font-semibold mb-3.5">Sign Up</h1>
        <form onSubmit={handleSubmit(onsubmit)}>
          <div className="">
            <label htmlFor="email" className="text-sm block mb-1 font-semibold">
              Email
            </label>

            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              id="email"
              autoComplete="email"
              className="px-2  py-0.5 border border-zinc-300 block rounded-sm w-full
            "
            />
            {errors.email && (
              <p className="text-xs text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div className="my-3 ">
            <label
              htmlFor="password"
              className="text-sm mb-1 block font-semibold"
            >
              Password
            </label>
            <input
              autoComplete="current-password"
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
                maxLength: {
                  value: 12,
                  message: "Password must be less than 12 characters",
                },
              })}
              id="password"
              className="px-2  py-0.5 border border-zinc-300 block rounded-sm w-full
            "
            />
            {errors.password && (
              <p className="text-xs text-red-600">{errors.password?.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="text-sm bg-blue-600 text-white px-3 py-1 rounded-xs font-normal hover:bg-blue-700 cursor-pointer"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center mt-4 text-sm text-zinc-600">
          <span>Already have an account? </span>
          <Link className="text-blue-600 text-xs" to={"/login"}>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
