import React, { useState } from 'react';
import './Projects.scss';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: "Atlética Navegadores",
      description: "Fundadora de AAACCN (Associação Atlética Acadêmica de Ciência da Computação Navegadores)",
      image: "https://via.placeholder.com/400x250/1a0b3a/8b5cf6?text=Portfolio",
      link: "https://instagram.com/aaaccnavegadores",
      technologies: ["Comunicação", "Organização", "Trabalho em equipe", "Inclusão"],
      isInstagram: true,
      instagramEmbed: "https://www.instagram.com/aaaccnavegadores/embed"
    },
    {
      title: "CCGirls",
      description: "Fundadora do CCGirls, um grupo da comunidade do curso de Ciência da Computação da UFFS, focado na inclusão de mulheres e não bnários.",
      image: "https://via.placeholder.com/400x250/1a0b3a/8b5cf6?text=Sistema+Gestao",
      link: "https://instagram.com/ccgirls.comp",
      technologies: ["Liderança", "Comunicação", "Trabalho em equipe", "Inclusão"],
      isInstagram: true,
      instagramEmbed: "https://www.instagram.com/ccgirls.comp/embed"
    },
    {
      title: "Portifólio",
      description: "Portifólio desenvolvido com React, SCSS e design responsivo.",
      image: "https://via.placeholder.com/400x250/1a0b3a/8b5cf6?text=E-commerce",
      link: "https://github.com/DanieleKaroline/portifolio",
      technologies: ["React", "JavaScript", "SCSS"],
      isGitHub: true,
      githubRepo: "DanieleKaroline/portifolio"
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index) => {
    setCurrentProject(index);
  };

  const GitHubPreview = ({ repo }) => (
    <div className="github-preview">
      <div className="github-header">
        <i className="fab fa-github"></i>
        <span className="repo-name">{repo}</span>
      </div>
      <div className="github-content">
        <div className="repo-info">
          <div className="repo-stats">
            <span className="stat">
              <i className="fas fa-code-branch"></i>
              main
            </span>
            <span className="stat">
              <i className="fas fa-star"></i>
              Portfolio React
            </span>
          </div>
          <div className="repo-description">
            Portfólio pessoal desenvolvido com React, SCSS e design responsivo.
          </div>
          <div className="repo-languages">
            <span className="language">
              <span className="language-color" style={{backgroundColor: '#61dafb'}}></span>
              JavaScript
            </span>
            <span className="language">
              <span className="language-color" style={{backgroundColor: '#cc6699'}}></span>
              SCSS
            </span>
            <span className="language">
              <span className="language-color" style={{backgroundColor: '#149eca'}}></span>
              React
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="projects-container">
      <h2 className="section-title">Projetos</h2>
      
      <div className="projects-content">
        <div className="carousel-container">
          <button className="carousel-btn prev" onClick={prevProject}>
            <i className="fas fa-chevron-left"></i>
          </button>
          
          <div className="project-card">
            <div className="project-image">
              {projects[currentProject].isInstagram ? (
                <iframe
                  src={projects[currentProject].instagramEmbed}
                  width="400"
                  height="250"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency={true}
                  title={projects[currentProject].title}
                />
              ) : projects[currentProject].isGitHub ? (
                <GitHubPreview repo={projects[currentProject].githubRepo} />
              ) : (
                <img src={projects[currentProject].image} alt={projects[currentProject].title} />
              )}
            </div>
            
            <div className="project-info">
              <h3>{projects[currentProject].title}</h3>
              <p className="description">{projects[currentProject].description}</p>
              
              <div className="technologies">
                {projects[currentProject].technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <a href={projects[currentProject].link} target="_blank" rel="noopener noreferrer" className="project-link">
                {projects[currentProject].isInstagram ? 'Ver no Instagram' : projects[currentProject].isGitHub ? 'Ver no GitHub' : 'Ver Projeto'} <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
          
          <button className="carousel-btn next" onClick={nextProject}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        
        <div className="carousel-indicators">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`indicator ${currentProject === index ? 'active' : ''}`}
              onClick={() => goToProject(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
