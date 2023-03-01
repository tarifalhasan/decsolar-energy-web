const DasboardButton = ({ name }) => {
  return (
    <button className="bg-skin-green block text-skin-white text-[1.125em] leading-[1.6875em] px-4 py-[5px] rounded-[10px] w-full">
      {name}
    </button>
  );
};

export default DasboardButton;
