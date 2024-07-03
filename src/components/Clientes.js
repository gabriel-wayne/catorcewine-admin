import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Clientes = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    axios.get('/api/clientes')
      .then(response => {
        setClientes(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  return (
    <div>
      <h2>Clientes</h2>
      <ul>
        {clientes.map(cliente => (
          <li key={cliente._id}>{cliente.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default Clientes;
