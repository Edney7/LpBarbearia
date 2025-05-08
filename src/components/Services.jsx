// 3. components/Services.jsx
import React from 'react';
import trabalho from '../assets/barba.jpeg'; // substitua pela imagem real

const Services = () => (
  <section className="section">
    <div className="service-single-card">
      <img src={trabalho} alt="Serviço em andamento" className="service-single-img" />
      <div className="service-info">
        <h2>Transformando o visual com estilo</h2>
        <p>
          Atendimento personalizado, ambiente confortável e qualidade em cada detalhe. Agende seu horário e experimente mais que um corte.
        </p>
      </div>
    </div>
  </section>
);

export default Services;
