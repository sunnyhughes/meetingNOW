import React from 'react';

const ClientList = ({ clients }) => {
  return (
    <div className="client-list">
      <h3>Clients</h3>
      <ul>
        {clients.map((client, index) => (
          <li key={index}>{client.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ClientList;
