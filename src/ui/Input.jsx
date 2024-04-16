const Input = ({ type = "text", placeholder }) => {
  return (
    <input
      type={type}
      className="body-m mb-5 w-full border-b border-b-white/50 bg-transparent pb-3 ps-3 text-white caret-red placeholder:text-white/50 focus:outline-none"
      placeholder={placeholder}
    />
  );
};

export default Input;
