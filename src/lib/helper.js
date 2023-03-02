import { projects } from '@/data/data';

export function getAllProjects(projectSlug) {
  if (projectSlug) {
    const getOneProject = projects.filter(p => p.slug === projectSlug);
    return getOneProject;
  }
  return projects;
}
