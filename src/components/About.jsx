import React from 'react';
import './About.scss';
import eu from '../styles/images/eu.jpeg';

const About = () => (
  <div className="about-container">
    <div className="about-image">
      <div className="avatar-container">
        <div className="avatar-wrapper">
          <img src={eu} alt="Minha foto" />
        </div>
        <div className="desk-setup">
          <div className="monitor">
            <div className="screen">
              <div className="code-lines">
                <span className="code-line">const developer = {`{`}</span>
                <span className="code-line">  name: "Daniele Karoline",</span>
                <span className="code-line">  passion: "tech",</span>
                <span className="code-line">  coffee: true</span>
                <span className="code-line">{`}`};</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="about-text">
      <h1>Daniele Karoline</h1>
      <h2>Estudante de Ciência da Computação</h2>
      <p>
        Sou estudante de Ciência da Computação apaixonada por tecnologia e inovação. 
        Tenho forte interesse em Infraestrutura, Cloud, Dados e DevOps, sempre buscando 
        aprender novas tecnologias e contribuir em projetos Open Source. Sou proativa, 
        curiosa e movida por desafios que me permitam crescer profissionalmente. 
        Estou sempre em busca de oportunidades para aplicar meus conhecimentos e 
        fazer a diferença com soluções criativas e eficazes. 🚀
      </p>
      
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/danielekarolinec/" className="social-icon">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/DanieleKaroline/" className="social-icon">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </div>
  </div>
);

export default About;