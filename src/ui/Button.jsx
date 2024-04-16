const Button = ({ children, className, onClick }) => {
  return (
    <button
      className={`body-m w-full rounded-xl border-none bg-red px-10 py-4 text-white focus:outline-none ${className || ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
