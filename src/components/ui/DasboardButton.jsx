const DasboardButton = ({ name, onClick }) => {
  return (
    <button
      className="bg-skin-green block text-skin-white text-[1.125em] leading-[1.6875em] px-4 py-[5px] rounded-[10px] w-full"
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default DasboardButton;
