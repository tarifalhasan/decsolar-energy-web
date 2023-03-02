import Layout from '@/components/layout/Layout';

import { projects } from '@/data/data';
import Card from './Card';
import Header from './Header';
const Project = () => {
  return (
    <Layout>
      <div className="ml-[334px]">
        <Header />
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
              slug={project.slug}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Project;
