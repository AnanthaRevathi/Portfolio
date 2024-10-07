import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/pageHeader'; // Assuming you have this
import { Animate } from 'react-simple-animate';
import './styles.scss'; // Custom styles

const Projects = () => {
  const [projects, setProjects] = useState([]); // Stores project data
  const [error, setError] = useState(false); // Handles errors
  const [selectedProject, setSelectedProject] = useState(null); // For modal popup

  // Function to fetch projects from the external JSON file
  const fetchProjects = async () => {
    try {
      const response = await fetch('https://raw.githubusercontent.com/AnanthaRevathi/projects/refs/heads/main/projects.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setProjects(data); // Populate the projects state
    } catch (error) {
      setError(true); // Set error if something goes wrong
      console.error('Error fetching project data:', error);
    }
  };

  // Fetch project data on component mount
  useEffect(() => {
    fetchProjects();
  }, []);

  // Function to handle project click and toggle showing details
  const handleProjectClick = (project) => {
    setSelectedProject((prevProject) =>
      prevProject?.title === project.title ? null : project
    ); // Toggle between showing and hiding details
  };

  return (
    <section id="projects" className="projects">
      <PageHeader headerText="My Projects" />

      <div className="projects__content__wrapper">
        {error ? (
          <p className="error">Failed to load projects. Please try again later.</p>
        ) : projects.length === 0 ? (
          <p>No projects found.</p>
        ) : (
          projects.map((project, i) => (
            <Animate
              key={i}
              play
              duration={1}
              delay={0.5 * i}
              start={{ opacity: 0, transform: 'translateY(50px)' }}
              end={{ opacity: 1, transform: 'translateY(0)' }}
            >
              <div
                className={`projects__item ${
                  selectedProject?.title === project.title ? 'expanded' : ''
                }`}
                onClick={() => handleProjectClick(project)}
              >
                <h3>{project.title}</h3>
                {selectedProject?.title === project.title && (
                  <>
                    <p>{project.description}</p>
                    <p>{project.details}</p>
                    <button onClick={(event) => {
                      event.stopPropagation(); // Prevent click event from bubbling up
                      setSelectedProject(null); // Close the project details
                    }}>
                      Close
                    </button>
                  </>
                )}
              </div>
            </Animate>
          ))
        )}
      </div>
    </section>
  );
};

export default Projects;
