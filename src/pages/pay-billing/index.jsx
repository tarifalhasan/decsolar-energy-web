import Layout from '@/components/layout/Layout';
import Navbar from './Navbar';
import { payBilling } from '../../data/data';
import Image from 'next/image';

import Button from '@/components/ui/Button';
const PayBill = () => {
  return (
    <Layout>
      <div className="ml-[334px]">
        <Navbar />
        <div className="main-content  gap-5 flex p-4 flex-col flex-grow ">
          <div className="bg-white max-w-[900px] rounded-[5px]">
            {payBilling.map((data, i) => (
              <div key={i} className="px-5  py-8">
                <h1 className="text-[#333333] pb-5 border-b border-slate-600 text-[1.563em] font-varela">
                  Electricity Bill for the month of {data.billingMonth}
                </h1>
                <div className="my-4">
                  <Image src={data.featureImage} alt={data.billlingAddress} />
                </div>
                <div className="border-b-4 pb-3 border-skin-green">
                  <div className="flex   items-center w-[80%] justify-between">
                    <h2 className="text-xl font-manrope font-bold">
                      {data.billlingAddress}
                    </h2>
                    <address className="text-skin-muted font-manrope font-normal">
                      {data.address}
                    </address>
                  </div>
                </div>
                <div className="my-10">
                  <div className=" flex items-center justify-between w-[80%]">
                    <h2 className="text-xl font-manrope font-semibold">
                      Total Usage Kwh
                    </h2>
                    <span className="text-skin-muted">
                      {data.TotalUsageKwh}Kwh
                    </span>
                  </div>
                  <div className=" flex py-2 items-center justify-between w-[80%]">
                    <h2 className="text-xl font-manrope font-semibold">
                      Cost per 1 Kwh
                    </h2>
                    <span className="text-skin-muted font-manrope font-semibold">
                      {data.Costper1Kwh}cents/Kwh
                    </span>
                  </div>
                  <hr className="h-[3px] bg-skin-muted w-full " />
                  <div className=" flex items-center justify-between w-[80%]">
                    <h2 className="text-xl font-manrope font-semibold">
                      Total Cost Electricity Bill{' '}
                    </h2>
                    <span className="text-skin-muted">
                      {Math.floor(data.TotalUsageKwh * data.Costper1Kwh)} USD
                    </span>
                  </div>
                </div>
                <div className="btn-group flex px-10 justify-between items-center">
                  <Button name={'Pay in P2P'} />
                  <Button name={'Pay in USD'} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default PayBill;
