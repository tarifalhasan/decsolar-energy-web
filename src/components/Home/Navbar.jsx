import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from '@/../../public/img/Logo.svg';
import LanguagrIcon from '@/../../public/img/lang.svg';
import { navLinks } from '@/data/data';
import Button from '../ui/Button';
const Navbar = () => {
  const router = useRouter();

  return (
    <header className="bg-skin-lightDark max-w-[1764px] mx-auto">
      <nav className="flex  mx-auto items-center justify-between px-6 ">
        <div className="brand">
          <Image src={Logo} alt="decsolar energy" width={120} height={60} />
        </div>
        <div className="links flex items-center gap-x-7">
          <ul className="flex  gap-x-6 items-center">
            {navLinks.map((link, i) => (
              <li key={i}>
                <Link
                  className={` ${
                    router.pathname === link.slug ? 'text-skin-green' : ''
                  } font-poppins hover:text-skin-green transition duration-300 ease-in-out text-sm`}
                  href={link.slug}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex mx-4 items-center gap-1">
            <Image src={LanguagrIcon} width={25} height={25} alt="english" />
            <select className="border-0 focus:outline-none font-poppins text-[18px] bg-transparent">
              <option
                className="text-white  border-0 focus:border-0 bg-skin-lightDark"
                selected
                value={'ES'}
              >
                ES
              </option>
              <option
                className="text-white  border-0 focus:border-0 bg-skin-lightDark"
                selected
                value={'CS'}
              >
                CS
              </option>
            </select>
          </div>
          <div className="btn-group flex items-center gap-x-2">
            <Button name="Create Account" />
            <button className="btn-secondary">Sign up</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
