const Input = ({ type = "text", placeholder }) => {
  let error = false;
  return (
    <div className="relative">
      <input
        type={type}
        className={`body-m mb-5 w-full border-b  bg-transparent pb-3 ps-3 text-white caret-red placeholder:text-white/50 focus:outline-none ${error ? "border-b-red" : "border-b-white/50"}`}
        placeholder={placeholder}
      />
      {error && (
        <p className="body-s absolute right-5 top-2 text-red">Error text</p>
      )}
    </div>
  );
};

export default Input;
