import Button from '@/components/ui/Button';

const Participate = ({
  CostOf1P2P,
  APR,
  NetProfit,
  StartOfInstallation,
  EstimatedStartOfOperation,
  FirstEstimatedProfitability,
}) => {
  return (
    <div className="rounded-[15px] p-4 basis-[40%] bg-white shadow">
      <ul className="flex justify-between gap-4">
        <li className="">
          <span className="text-[1em] text-[#666666] block font-manrope font-semibold">
            Cost of 1 P2P
          </span>
          <span className="text-[1em] block font-manrope font-semibold text-skin-green">
            {CostOf1P2P}
          </span>
        </li>
        <li className="">
          <span className="text-[1em]  text-[#666666] block font-manrope font-semibold">
            ARP
          </span>
          <span className="text-[1em] block font-manrope font-semibold text-skin-green">
            {APR}
          </span>
        </li>
        <li className="">
          <span className="text-[1em] text-[#666666] block font-manrope font-semibold">
            Net Profit
          </span>
          <span className="text-[1em] block font-manrope font-semibold text-skin-green">
            {NetProfit}%
          </span>
        </li>
      </ul>
      {/* Contribution Progress  */}
      <div className="text-center flex flex-col gap-3">
        <div className="mt-4">
          <h2 className="text-[1.3em] leading-tight font-manrope font-semibold">
            Contribution Progress
          </h2>
          <p className="text-skin-muted font-manrope font-normal leading-[154%] text-[1.1em]">
            Cost of The Project <br /> $500,000 USD
          </p>
        </div>
        <div className="w-full my-3 bg-[#D3D3D3] rounded-full h-2 ">
          <div
            className={`bg-skin-green h-2 rounded-full`}
            style={{ width: `${NetProfit}%` }}
          ></div>
        </div>
        <h2 className="text-xl text-skin-green font-manrope font-semibold ">
          {NetProfit}% Financed
        </h2>
        <div className="py-5">
          <h2 className="text-xl text-skin-muted">Project Road Map</h2>
        </div>
        <ul className="flex flex-col gap-3">
          <li className="flex justify-between">
            <span className="inline-flex text-base font-manrope font-normal text-skin-muted">
              Start of installation
            </span>
            <span className="inline-flex text-md text-skin-green font-semibold">
              {StartOfInstallation}
            </span>
          </li>
          <li className="flex justify-between">
            <span className="inline-flex text-base font-manrope font-normal text-skin-muted">
              Estimated start of operation:
            </span>
            <span className="inline-flex text-md text-skin-green font-semibold">
              {EstimatedStartOfOperation}
            </span>
          </li>
          <li className="flex justify-between">
            <span className="inline-flex text-base font-manrope font-normal text-skin-muted">
              First Estimated Profitability:
            </span>
            <span className="inline-flex text-md text-skin-green font-semibold">
              {FirstEstimatedProfitability}
            </span>
          </li>
        </ul>
        <div className="flex justify-center">
          <Button name={'Participate'} />
        </div>
      </div>
    </div>
  );
};

export default Participate;
