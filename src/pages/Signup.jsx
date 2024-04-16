import logo from "../assets/logo.svg";
import Button from "../ui/Button";

import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="mx-auto flex min-h-dvh max-w-[25rem] flex-col items-center justify-center px-5 md:px-0">
      <img src={logo} alt="logo" className="mx-auto mb-20 block" />

      <form className="rounded-2xl bg-semi-dark px-8 py-10">
        <h2 className="mb- heading-l mb-10 text-white">Sign up</h2>
        <input
          className="body-m mb-5 w-full border-b border-b-white/50 bg-transparent pb-3 ps-3 text-white caret-red placeholder:text-white/50 focus:outline-none"
          type="email"
          placeholder="Email address"
        />
        <input
          className="body-m mb-5 w-full border-b border-b-white/50 bg-transparent pb-3 ps-3 text-white caret-red placeholder:text-white/50 focus:outline-none"
          type="password"
          placeholder="Password"
        />
        <input
          className="body-m  w-full border-b border-b-white/50 bg-transparent pb-3 ps-3 text-white caret-red placeholder:text-white/50 focus:outline-none"
          type="password"
          placeholder="Repeat Password"
        />
        <Button className="mt-10">Create an account</Button>
        <p className="body-m mt-5 text-center text-white">
          Already have an account?
          <Link to="/login" className="ms-1 text-red">
            Login
          </Link>
        </p>
      </form>
    </section>
  );
};

export default Register;
