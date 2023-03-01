import { IoIosArrowDown } from 'react-icons/io';
import avatar from '@/../../public/img/avatar.svg';
import Image from 'next/image';
const Navbar = () => {
  return (
    <header className="flex   w-full  bg-white py-1 px-5 justify-between">
      <h2 className="text-4xl">Staking</h2>
      <div className="flex gap-2 items-center">
        <IoIosArrowDown size={24} className="text-[#111]" />
        <Image src={avatar} className="w-10 h-10  rounded-full" alt={'tarif'} />
      </div>
    </header>
  );
};

export default Navbar;
