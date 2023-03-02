import Link from 'next/link';
import Image from 'next/image';
import { getAllProjects } from '@/lib/helper';
import Info from './singleProject/Info';
import { sideLinks } from '@/data/data';
import logo from '../../../public/img/Logo-sin-fondo.svg';
import Header from './Header';

import Participate from './singleProject/Participate';
import Chart from './singleProject/Chart';
import EstimateYourProfits from './singleProject/EstimateYourProfits';
import Tabs from '@/components/layout/Tabs';

const SingleProduct = ({ project }) => {
  return (
    <main className="flex max-w-[1764px] mx-auto gap-4 bg-[#F7F6F9] flex-row min-h-screen">
      <div className="h-full  hidden lg:block	fixed w-[334px] bg-skin-white">
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
                    i === 1 ? 'active text-white' : ''
                  }   items-center gap-x-4 rounded-l-full pl-[2.5rem]`}
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
      {project?.map(p => (
        <main className="lg:ml-[334px] px-6" key={p.slug}>
          <div className="py-5">
            <Header />
            <Tabs />
          </div>
          <div className="flex flex-col lg:flex-row gap-4">
            <Info
              image={p.featureImage}
              descripcion={p.descripetion}
              pdtName={p.projectName}
              services={p.services}
            />
            <Participate
              NetProfit={p.NetProfit}
              APR={p.APR}
              CostOf1P2P={p.CostOf1P2P}
              StartOfInstallation={p.StartOfInstallation}
              EstimatedStartOfOperation={p.EstimatedStartOfOperation}
              FirstEstimatedProfitability={p.FirstEstimatedProfitability}
            />
          </div>
          <div className="flex flex-col lg:flex-row my-5 gap-4">
            <Chart services={p.services} />
            <EstimateYourProfits EstimateYourProfits={p.EstimateYourProfits} />
          </div>
        </main>
      ))}
    </main>
  );
};

export default SingleProduct;

//getStaticProps
export async function getStaticProps({ params }) {
  const { projectSlug } = params;

  const project = getAllProjects(projectSlug);

  return {
    props: { project }, // will be passed to the page component as props
  };
}
// getStatic Paths
export async function getStaticPaths() {
  const projects = getAllProjects();

  const paths = projects
    .filter(
      project => project.slug !== undefined && typeof project.slug === 'string'
    )
    .map(project => ({
      params: { projectSlug: project.slug.toString() },
    }));

  return {
    paths,
    fallback: false,
  };
}
