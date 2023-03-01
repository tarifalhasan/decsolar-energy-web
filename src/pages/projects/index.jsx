import Layout from '@/components/layout/Layout';
import { TfiWorld } from 'react-icons/tfi';
import Image from 'next/image';
import { projects } from '@/data/data';
import Card from './Card';
const Project = () => {
  return (
    <Layout>
      <div className="ml-[334px]">
        <header className="flex items-center px-5 justify-between ">
          <h2 className="text-lg text-skin-lightDark">Projects</h2>
          <div className="flex mx-4 items-center gap-1">
            <select className="border-0 focus:outline-none font-poppins text-[18px] bg-transparent">
              <option
                className="text-skin-green  border-0 focus:border-0 bg-skin-lightDark"
                selected
              >
                ES
              </option>
              <option
                className="text-skin-gree  border-0 focus:border-0 bg-skin-lightDark"
                selected
              >
                ES
              </option>
            </select>
            <TfiWorld size={25} className="text-skin-green" />
          </div>
        </header>
        <div className="px-6 grid pt-10 lg:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <Card
              key={index}
              image={project.featureImage}
              projectName={project.projectName}
              location={project.location}
              Completed={project.Completed}
              ARP={project.APR}
              Date={project.Date}
              cost={project.projectCost}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Project;
