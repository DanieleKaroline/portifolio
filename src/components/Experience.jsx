import React, { useState } from 'react';
import './Experience.scss';


const Experience = () => {
  const [selectedCompany, setSelectedCompany] = useState(0);

  const experiences = [
    {
      company: "UDESC",
      role: "Estagiária de Suporte",
      period: "2024 - Presente",
      description: "Estagio realizado no setor de T.I da UDESC Oeste, campus Chapecó. Atuo como suporte ao usuário e realizo manutenção de computadores e hardwares, instalação de softwares e configuração de redes.",
      activities: [
        "Suporte ao usuário",
        "Manutenção de computadores e hardwares",
        "Instalação de softwares",
        "Configuração de redes",
      ]
    },
    {
      company: "iFortis", 
      role: "Estagiária Suporte Técnico e Implementação",
      period: "2022 - 2023",
      description: "Estágio realizado na empresa iFortis, empresa de tecnologia que atua no ramo de identificação digital e tecnologias sustentáveis. Atuei como suporte técnico e na implementação de soluções para os clientes da empresa.",
      activities: [
        "Suporte técnico aos clientes e servidores",
        "Implementação de software e conformidades com normas",
        "Manutenção de computadores e hardwares"
      ]
    },
    {
      company: "Câmara Municipal de Registro, SP",
      role: "Estagiária de T.I",
      period: "2019", 
      description: "Estágio realizado na Câmara Municipal de Registro, SP. Atuei como estagiária de T.I, onde realizava manutenção de computadores e hardwares, instalação de softwares e configuração de redes.",
      activities: [
        "Suporte ao usuário",
        "Manutenção de computadores e hardwares",
        "Instalação de softwares",
        "Configuração de redes",
      ]
    }
  ];

  return (
    <div className="experience-container">
      <h2 className="section-title">Experiência</h2>
      
      <div className="experience-content">
        <div className="companies-menu">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`company-item ${selectedCompany === index ? 'active' : ''}`}
              onClick={() => setSelectedCompany(index)}
            >
              <h3>{exp.company}</h3>
              <p className="role">{exp.role}</p>
              <p className="period">{exp.period}</p>
            </div>
          ))}
        </div>
        
        <div className="experience-details">
          {experiences[selectedCompany] && (
            <div className="selected-experience">
              <h3>{experiences[selectedCompany].company}</h3>
              <p className="description">{experiences[selectedCompany].description}</p>
              
              <div className="activities">
                <h4>Principais atividades:</h4>
                <ul>
                  {experiences[selectedCompany].activities.map((activity, index) => (
                    <li key={index}>{activity}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
