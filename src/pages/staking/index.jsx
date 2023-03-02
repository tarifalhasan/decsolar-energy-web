import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import Navbar from './Navbar';
import Ethereum from '@/../../public/img/Ethereum.svg';
import Image from 'next/image';
import Toast from './Toast';
import Safety from '@/../../public/img/Safety.svg';
import Link from 'next/link';
import Card from './Staking';
import { StakingData } from '@/data/data';

//import styles 👇
import 'react-modern-drawer/dist/index.css';

const Staking = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(prevState => !prevState);

    console.log(isOpen);
  };

  return (
    <Layout>
      <div className="lg:ml-[280px] px-4">
        <Navbar />

        <div className="main-content  gap-5 flex flex-col flex-grow ">
          <div className="top">
            <div className="heading">
              <h2 className="flex items-center gap-2">
                <span className="text-lg"> Available on</span>
                <span className="flex text-lg  gap-1 text-skin-green items-center">
                  <Image src={Ethereum} alt="Ethereum" />
                  Ethereum Mainnet
                </span>
              </h2>
              <p className="text-base pt-2 text-skin-muted">
                P2Pholders (Ethereum network only) can stake their P2P in the
                Safety Module to add more security to the protocol and earn
                Safety Incentives. In the case of a shortfall event, up to 30%
                of your stake can be slashed to cover the deficit, providing an
                additional layer of protection for the protocol.
                <Link href="/" className="underline decoration-solid">
                  Learn more about risks involved
                </Link>
              </p>
            </div>
          </div>
          <div className="flex  gap-4">
            <Toast
              icon={Safety}
              title={'Funds in the Safety Module'}
              price="$434.99M"
            />
            <Toast
              icon={Safety}
              title={'Funds in the Safety Module'}
              price="$434.99M"
            />
          </div>
          <div className="grid gap-4 py-7  lg:grid-cols-2">
            {StakingData.map((staking, index) => (
              <Card
                key={index}
                titile={staking.title}
                StakingAPR={staking.StakingAPR}
                MaxSlashing={staking.MaxSlashing}
                WalletBalance={staking.WalletBalance}
                totalStaked={staking.CooldownToUnstake.totalStaked}
                CooldownPeriod={staking.CooldownToUnstake.CooldownPeriod}
                totalClaimble={staking.Claim.totalClaimble}
                cliamPerMonth={staking.Claim.cliamPerMonth}
                isOpen={isOpen}
                toggleDrawer={toggleDrawer}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Staking;
