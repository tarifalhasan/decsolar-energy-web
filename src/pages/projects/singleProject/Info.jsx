import Image from 'next/image';

const Info = ({ image, pdtName, descripcion, services }) => {
  return (
    <div className="basis-[60%] flex flex-col gap-4 bg-white rounded-[15px] p-5">
      <div>
        <Image
          src={image}
          className="aspect-video rounded-lg w-full max-h-[200px] object-cover"
          alt={pdtName}
        />
      </div>
      <div>
        <ul className="flex justify-between gap-4">
          {services.map((serveces, i) => (
            <li className="" key={i}>
              <span className="text-[0.8em]  block font-manrope font-normal">
                {serveces.name}
              </span>
              <span className="text-[0.8em] block font-manrope font-normal text-skin-green">
                {serveces.qualtity}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-[1.3em] font-extralight text-[#333333] font-manrope">
          Descripcion
        </h2>
        <article className="text-[1em] font-manrope leading-[154%] font-normal text-[#666666]">
          {descripcion}
        </article>
      </div>
    </div>
  );
};

export default Info;
