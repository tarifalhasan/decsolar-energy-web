import Image from 'next/image';
const Card = ({ image, projectName, location, cost, Completed, ARP, Date }) => {
  return (
    <div className="bg-white rounded-[10px]">
      <Image className="max-h-[183px] w-full" src={image} alt={'sd'} />
      <div className=" p-5 ">
        <div className="flex items-center justify-between">
          <h2 className="text-[1.1em] font-manrope font-medium">
            {projectName}
          </h2>
          <span className="text-[1.1em] font-manrope font-normal text-skin-muted">
            {location}
          </span>
          {/* pregressbar */}
        </div>
        <div className="w-full my-3 bg-[#D3D3D3] rounded-full h-2 ">
          <div
            className={`bg-skin-green h-2 rounded-full`}
            style={{ width: `${Completed}%` }}
          ></div>
        </div>

        {/* data */}
        <ul className="flex gap-4">
          <li className="">
            <span className="text-[1em] block font-manrope font-normal">
              Project Cost
            </span>
            <span className="text-[0.8em text-skin-green font-manrope]">
              <span className="block">{cost.dollar}</span>
              or <span>{cost.twoP2}</span>
            </span>
          </li>
          <li className="">
            <span className="text-[1em]  block font-manrope font-normal">
              APR
            </span>
            <span className="text-[1.3em] block font-manrope font-semibold text-skin-green">
              {ARP}
            </span>
          </li>
          <li className="">
            <span className="text-[1em] text-center block font-manrope font-normal">
              Date
            </span>
            <span className="text-[1.3em] text-center font-manrope font-semibold text-skin-green">
              {Date}
            </span>
          </li>
          <li className="">
            <span className="text-[1em] block font-manrope font-normal">
              %Completed
            </span>
            <span className="text-[1.3em] block text-center font-manrope font-semibold text-skin-green">
              {Completed}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
