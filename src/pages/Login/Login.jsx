import React from "react";
import { Link, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth/useAuth";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Login = () => {
  const {signInUser} = useAuth()

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-9/12 mx-auto">
      <div className="my-20">
        <div className="text-center">
          <h1 className="text-primary">Welcome Back!</h1>
          <h3 className="text-center text-3xl font-bold my-1">Member Login</h3>
          <p className="text-gray-500">
            Access to all features. No credit card required.
          </p>
        </div>

        <SocialLogin></SocialLogin>

        <form
          onSubmit={handleLogin}
          className="fieldset  rounded-box w-md mx-auto p-4"
        >
          <label className="label">Email</label>
          <input
            type="email"
            className="input w-full"
            placeholder="Email"
            name="email"
          />

          <label className="label">Password</label>
          <input
            type="password"
            className="input w-full"
            placeholder="Password"
            name="password"
          />

          <button className="btn btn-neutral mt-4">Login</button>

          <span className="text-center text-[14px] mt-3">
            Don't Have an Account?<Link to={"/auth/register"}>Sign up</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
