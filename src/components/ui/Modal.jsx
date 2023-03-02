import { MdErrorOutline } from 'react-icons/md';
import { TbChecks } from 'react-icons/tb';
import { FaGasPump } from 'react-icons/fa';
import { HiOutlineMinus } from 'react-icons/hi';
import { GrClose } from 'react-icons/gr';
import { useEffect, useState } from 'react';

const Modal = ({ isOpen, toggleDrawer }) => {
  const [amount, setAmount] = useState('');
  const [greenBtn, setGreenBtn] = useState(false);

  useEffect(() => {
    if (amount > 1) {
      setGreenBtn(false);
    } else {
      setGreenBtn(true);
    }

    console.log(greenBtn);
  }, []);

  return (
    <div
      id="authentication-modal"
      className={`fixed 
       left-0 z-10 ${
         isOpen ? 'block' : 'hidden'
       } right-0 top-0 mx-auto w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0  h-modal md:h-full`}
    >
      <div className="relative w-full mt-10 h-full max-w-[32rem] mx-auto md:h-auto">
        <div className="relative bg-white rounded-lg shadow">
          <button
            type="button"
            onClick={toggleDrawer}
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent   rounded-lg text-sm p-1.5 ml-auto inline-flex items-center  dark:hover:text-white"
          >
            <GrClose />
            <span className="sr-only">Close modal</span>
          </button>
          <div className="px-6 py-6 lg:px-8">
            <h3 className="mb-4 text-xl font-bold font-manrope text-gray-900 ">
              Supply MATIC
            </h3>
            <div className="flex flex-col gap-6">
              <div className="">
                <div className="flex text-skin-muted items-center font-manrope font-bold">
                  <span>Amount</span> <MdErrorOutline size={20} />
                </div>
                <div className="border-2 rounded-md p-3 flex justify-between items-center border-slate-200">
                  <div>
                    <input
                      type="number"
                      placeholder="0.00"
                      className="text-xl block text-muted w-20  focus:outline-none font-manrope"
                      onChange={e => setAmount(e.target.value)}
                    />
                    <span>$0</span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h2 className="text-xl font-black font-manrope">MATIC</h2>
                    <p className="text-xs text-skin-muted font-manrope">
                      Wallet balance 3.45 <b>MAX</b>
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex text-skin-muted items-center font-manrope font-bold">
                  <span>Transaction overview</span>
                </div>
                <div className="border-2 rounded-md p-3 flex justify-between items-center border-slate-200">
                  <ul className="w-full">
                    <li className="text-slate-600 w-full flex justify-between items-center font-manrope">
                      <span className="block">Supply APY</span>
                      <span className="block font-bold">2.08%</span>
                    </li>
                    <li className="text-slate-600 pt-2 w-full flex justify-between items-center font-manrope">
                      <span className="block">Collaterealization</span>
                      <span className="flex items-center text-skin-green font-manrope font-bold">
                        <TbChecks />
                        <span>Enabled</span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <FaGasPump size={20} />
                <HiOutlineMinus />
              </div>
              <div>
                <button
                  className={`px-5 w-full ${
                    greenBtn ? 'bg-skin-green' : 'bg-slate-200'
                  } text-md py-3 text-skin-muted `}
                >
                  Enter an amount
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
