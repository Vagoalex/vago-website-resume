import data from '../../../../app-data.json';
import ProjectCard from './project-card/ProjectCard';

import './Projects.scss';

const { title, 'project-info': projectInfo } = data.projects;

const { gitProjects } = projectInfo;
const Projects = () => {
  return (
    <>
      <section className='Projects-section' id='projects'>
        <div className='Projects-title-container'>
          <div className='Projects-title'>
            {title.map((item, index) => {
              const hiddenClass = item === '.' ? ' projects-item-hidden' : '';

              return (
                <div
                  key={index}
                  className={`Projects-title__item${hiddenClass}`}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
        <div className='Project-container wrapper'>
          {gitProjects.map((project) => (
            <ProjectCard key={project.id} data={project} />
          ))}
          <ProjectCard data={projectInfo.miniProjects} />
        </div>
      </section>
    </>
  );
};

export default Projects;
