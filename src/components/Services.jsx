// 3. components/Services.jsx
import React from 'react';
import cortes from '../assets/cortes.jpeg'; // substitua pela imagem real

const Services = () => (
  <section className="section">
    <div className="service-single-card">
      <img src={cortes} alt="Serviço em andamento" className="service-single-img" />
      <div className="service-info">
        <h1>Transformando seu visual com estilo</h1>
        
        <p>
          Atendimento personalizado, ambiente confortável e qualidade em cada detalhe. Agende seu horário e experimente mais que um corte.
        </p>
        
      </div>
    </div>
  </section>
);

export default Services;
