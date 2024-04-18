import logo from "../assets/logo.svg";
import Button from "../ui/Button";
import Input from "../ui/Input";

import { useRef } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const focusEl = useRef();

  return (
    <section className="mx-auto flex min-h-dvh flex-col items-center justify-center px-5 md:px-0">
      <img src={logo} alt="logo" className="mx-auto mb-20 block" />

      <form className="rounded-2xl bg-semi-dark px-8 py-10 sm:min-w-[25rem]">
        <h2 className="mb- heading-l mb-10 text-white">Sign up</h2>
        <Input type="email" placeholder="Email address" ref={focusEl} />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Repeat Password" />

        <Button className="mt-10">Create an account</Button>
        <p className="body-m mt-5 text-center text-white">
          Already have an account?
          <Link to="/login" className="ms-1 text-red hover:underline">
            Login
          </Link>
        </p>
      </form>
    </section>
  );
};

export default Signup;
