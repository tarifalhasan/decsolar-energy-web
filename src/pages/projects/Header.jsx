import { TfiWorld } from 'react-icons/tfi';

const Header = () => {
  return (
    <header className="flex  py-3 bg-white items-center px-5 justify-between ">
      <h2 className="text-lg text-skin-lightDark">Projects</h2>
      <div className="flex mx-4 items-center gap-1">
        <select className="border-0 focus:outline-none font-poppins text-[18px] bg-transparent">
          <option
            className="text-skin-green  border-0 focus:border-0 bg-skin-lightDark"
            selected
            value="ES"
          >
            ES
          </option>
          <option
            className="text-skin-gree  border-0 focus:border-0 bg-skin-lightDark"
            selected
            value="CS"
          >
            CS
          </option>
        </select>
        <TfiWorld size={25} className="text-skin-green" />
      </div>
    </header>
  );
};

export default Header;
