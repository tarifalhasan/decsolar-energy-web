import twop2 from '@/../../public/img/2p2.svg';
import Image from 'next/image';
const EstimateYourProfits = ({ EstimateYourProfits }) => {
  return (
    <div className="basis-[40%] bg-white rounded-[15px] p-4">
      <div className="flex flex-col gap-7">
        <div className="py-5">
          <h2 className="text-[1.5em] text-center text-skin-muted">
            Estimate Your Profits
          </h2>
        </div>

        <div className="flex justify-between">
          <button className="px-6 flex justify-between gap-4 py-2.5 border marker:border-skin-muted rounded-lg">
            <span className="font-semibold flex font-manrope text-skin-green">
              <Image src={twop2} alt="2p2" />
              2p2
            </span>
            <span>400,206</span>
          </button>
          <button className="px-6 flex justify-between gap-4 py-2.5 border border-skin-green rounded-lg">
            <span>400,206</span>
          </button>
        </div>

        <div className="bg-skin-green py-4">
          <h2 className="text-base pb-2 font-manrope text-skin-white text-center">
            The Minimum Investment is 10 USD
          </h2>
        </div>
        <div>
          <ul className="flex flex-col gap-3">
            <h2 className="text-[1.2em] pb-2 font-manrope text-skin-muted text-center">
              The Minimum Investment is 10 USD
            </h2>
            <li className="flex justify-between">
              <span className="inline-flex text-base font-manrope font-normal text-skin-muted">
                Net Profit
              </span>
              <span className="inline-flex text-md text-skin-green font-semibold">
                {EstimateYourProfits?.NetProfit}$
              </span>
            </li>
            <li className="flex justify-between">
              <span className="inline-flex text-base font-manrope font-normal text-skin-muted">
                Bonus Profit
              </span>
              <span className="inline-flex text-md text-skin-green font-semibold">
                {EstimateYourProfits?.BonusProfit}$
              </span>
            </li>
            <hr className="h-[2px] opacity-40 bg-skin-muted w-full " />
            <li className="flex justify-between">
              <span className="inline-flex text-base font-manrope font-normal text-skin-muted">
                Total Profit
              </span>
              <span className="inline-flex text-md text-skin-green font-semibold">
                {Math.floor(
                  EstimateYourProfits?.NetProfit +
                    EstimateYourProfits?.BonusProfit
                )}
                $
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EstimateYourProfits;
