import React from "react";
import { useFetchProjects } from "./fetchProjects";

const Project = () => {
  const { loading, projects } = useFetchProjects();
  console.log(loading, projects);

  if (loading) {
    return (
      <section className="projects">
        <h2>Loading....</h2>
      </section>
    );
  }

  return (
    <section className="projects">
      <div className="title">
        <h2>projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="project-center">
        {projects.map((project) => {
          const { id, url, image, title } = project;
          return (
            <>
              <a key={id} href={url} className="project">
                <img src={image} alt={title} className="img" />
                <h5>{title}</h5>
              </a>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
