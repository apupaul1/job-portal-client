import React, { use } from "react";
import { Link, Navigate, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Register = () => {
  const { createUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const uname = form.uname.value;
    const password = form.password.value;

    const user = {
      name,
      email,
      username: uname,
      password,
    };

    createUser(email, password)
      .then((result) => {
        console.log(result);
        navigate('/')
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(user);
  };

  return (
    <div className="w-9/12 mx-auto">
      <div className="my-20">
        <div className="text-center">
          <h1 className="text-primary">Register</h1>
          <h3 className="text-center text-3xl font-bold my-1">
            Start for Free Today
          </h3>
          <p className="text-gray-500">
            Access to all features. No credit card required.
          </p>
        </div>

        <SocialLogin></SocialLogin>

        <form
          onSubmit={handleRegister}
          className="fieldset  rounded-box w-md mx-auto p-4"
        >
          <label className="label">Full Name</label>
          <input
            type="text"
            className="input w-full"
            placeholder="Full Name"
            name="name"
          />
          <label className="label">Email</label>
          <input
            type="email"
            className="input w-full"
            placeholder="Email"
            name="email"
          />

          <label className="label">Username</label>
          <input
            type="text"
            className="input w-full"
            placeholder="Username"
            name="uname"
          />

          <label className="label">Password</label>
          <input
            type="password"
            className="input w-full"
            placeholder="Password"
            name="password"
          />

          <button className="btn btn-neutral mt-4">Register</button>

          <span className="text-center text-[14px] mt-3">
            Already Have an account?<Link to={'/auth/login'}>Login</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Register;
