import { forwardRef, useEffect } from "react";

const Input = forwardRef(({ type = "text", placeholder }, ref) => {
  let error = false;

  useEffect(() => {
    ref?.current.focus();
  }, [ref]);

  return (
    <div className="relative">
      <input
        type={type}
        className={`body-m mb-5 w-full border-b  bg-transparent pb-3 ps-3 text-white caret-red placeholder:text-white/50 focus:outline-none ${error ? "border-b-red" : "border-b-white/50"}`}
        placeholder={placeholder}
        ref={ref}
      />
      {error && (
        <p className="body-s absolute right-5 top-2 text-red">Error text</p>
      )}
    </div>
  );
});

Input.displayName = "Input";

export default Input;
