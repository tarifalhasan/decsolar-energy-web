import logo from '@/../../public/img/Logo-sin-fondo.svg';
import { sideLinks } from '@/data/data';
import Image from 'next/image';

import Link from 'next/link';
import { useRouter } from 'next/router';
const Sidebar = () => {
  const router = useRouter();
  return (
    <div className="h-full 	fixed w-[334px] bg-skin-white">
      <div className="sidebar-header flex items-center justify-center">
        <div className="">
          <Link href="/">
            <Image src={logo} alt="decsolar" width={200} height={80} />
          </Link>
        </div>
      </div>
      <hr className="h-[2px] opacity-60 bg-black px-10" />
      <div className="py-10">
        <div className=" pl-[25px] w-full">
          {sideLinks.map((link, i) => (
            <Link
              key={i}
              className={` relative  rounded-l-full block  text-[1em]`}
              href={link.slug}
            >
              <span
                className={`h-[45px] flex ${
                  router.pathname === link.slug
                    ? 'active rounded-l-full text-[#fff] '
                    : ''
                }   items-center gap-x-4 pl-[2.5rem]`}
              >
                <span>{link.icon}</span>
                <span>{link.name}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <Link href={'logout'}>Logout</Link>
      </div>
    </div>
  );
};

export default Sidebar;
