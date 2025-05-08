// 4. components/Schedule.jsx
import React from 'react';

const Schedule = () => (
  <section className="section">
    <h2>Horário de Funcionamento</h2>
    <div className="schedule-table-wrapper">
      <table className="schedule-table">
        <thead>
          <tr>
            <th>Dia</th>
            <th>Horário</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Segunda</td>
            <td>18:00 - 21:00</td>
          </tr>
          <tr>
            <td>Quarta</td>
            <td>18:00 - 21:00</td>
          </tr>
          <tr>
            <td>Quinta</td>
            <td>18:00 - 21:00</td>
          </tr>
          <tr>
            <td>Sexta</td>
            <td>18:00 - 21:00</td>
          </tr>
          <tr>
            <td>Sábado</td>
            <td>09:00 - 18:00</td>
          </tr>
          <tr>
            <td>Domingo</td>
            <td>09:00 - 13:00</td>
          </tr>
        </tbody>
      </table>
    </div>
    <a
      href="https://calendly.com/edneyaraujosilva00"
      target="_blank"
      rel="noreferrer"
      className="button-agendar"
    >
      Agende seu horário
    </a>
  </section>
);

export default Schedule;
