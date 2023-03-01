const Input = ({ placeholder, name, type }) => {
  return (
    <input
      className="w-full text-skin-white border-[none] px-4 py-3 rounded-[8px] opacity-[3.5] block focus:outline-none bg-[#27293E]"
      type={type}
      placeholder={placeholder}
      name={name}
    />
  );
};

export default Input;
