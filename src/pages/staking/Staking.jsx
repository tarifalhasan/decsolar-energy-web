import moneda from '@/../../public/img/moneda-dec-final 3.svg';
import Image from 'next/image';
import DasboardButton from '../../components/ui/DasboardButton';

import Modal from '@/components/ui/Modal';
const Card = ({
  titile,
  StakingAPR,
  MaxSlashing,
  WalletBalance,
  totalStaked,
  CooldownPeriod,
  totalClaimble,
  cliamPerMonth,
  isOpen,
  toggleDrawer,
}) => {
  return (
    <div className="bg-skin-white  z-50 px-5 shadow-lg rounded-[6px]">
      <div className="">
        <div className="flex  py-5  gap-9 ">
          <h2 className="text-[1.500em] leading-[148%] text-[#333333]">
            Stake {titile}
          </h2>
          <span className="bg-[#DEFFD8] flex items-center justify-center rounded-[21px] py-1 px-3">
            <span className="text-skin-green">Buy {titile} with FIAT</span>
          </span>
        </div>
        <hr className="h-[3px] w-full px-3 bg-black opacity-30" />
      </div>
      <div className="py-8 z-50 flex gap-3">
        <div className="basis-[45%] border-r border-slate-400 pr-2">
          <div className="logo items-center gap-3 flex ">
            <Image src={moneda} alt="moneda" />
            <h2 className="text-[18px]">{titile}</h2>
          </div>
          <ul className="flex w-full flex-col gap-3 mt-6">
            <li className="flex gap-10 justify-between">
              <span className="block text-xs">Staking APR</span>
              <span className="block text-xs text-skin-muted ">
                {StakingAPR}
              </span>
            </li>
            <li className="flex gap-10 justify-between">
              <span className="block text-xs">Max Slashing</span>
              <span className="block text-xs text-skin-muted ">
                {MaxSlashing}
              </span>
            </li>
            <li className="flex gap-10 justify-between">
              <span className="block text-xs">Wallet Balance</span>
              <span className="block text-xs text-skin-muted ">
                {WalletBalance}
              </span>
            </li>
          </ul>

          <div className="w-full py-4">
            <DasboardButton name="Stake" onClick={toggleDrawer} />
          </div>
        </div>
        {/* Drawer */}
        <Modal toggleDrawer={toggleDrawer} isOpen={isOpen} />
        <div className="basis-[55%] text-center ">
          <div className="flex flex-col gap-2">
            <h2 className="text-lg text-skin-lightDark">Staked {titile}</h2>
            <h2 className="text-2xl text-[#666666]">{totalStaked}</h2>
            <p className="text-[#333333] text-base">Cooldown Period</p>
            <h4 className="text-xs text-skin-muted">{CooldownPeriod}</h4>
            <button className="py-2 px-3 rounded-[5px] border border-skin-green text-skin-green">
              Cooldown to Unstake
            </button>
          </div>
          <hr className="h-[3px] w-full my-6 px-3 bg-black opacity-30" />
          <div className="flex flex-col gap-2">
            <h2 className="text-lg text-skin-lightDark">Claimable {titile}</h2>
            <h2 className="text-2xl text-[#666666]">{totalClaimble}</h2>
            <p className="text-[#333333] text-base">{titile} per month</p>
            <h4 className="text-xs text-skin-muted">{cliamPerMonth}</h4>
            <button className="py-2 px-3 rounded-[5px] border border-skin-green text-skin-green">
              Claim {titile}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
