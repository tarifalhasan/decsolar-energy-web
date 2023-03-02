import Layout from '@/components/layout/Layout';
import Tabs from '@/components/layout/Tabs';
import { getAllProjects } from '@/lib/helper';

import Card from './Card';
import Header from './Header';
const Project = () => {
  const project = getAllProjects();
  return (
    <Layout>
      <div className="lg:ml-[280px] px-4">
        <Header />
        <Tabs />
        <div className=" grid pt-4 grid-cols-1 lg:grid-cols-2 gap-4">
          {project?.map((project, index) => (
            <Card
              key={index}
              image={project.featureImage}
              projectName={project.projectName}
              location={project.location}
              Completed={project.Completed}
              ARP={project.APR}
              Date={project.Date}
              cost={project.projectCost}
              slug={project.slug}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Project;
