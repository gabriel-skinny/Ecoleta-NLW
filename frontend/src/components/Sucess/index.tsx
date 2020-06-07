import React from 'react';

import "./styles.css"

import { FiCheckCircle } from "react-icons/fi"

const Sucess: React.FC = () => {
  return (
      <div className="sucess-container">
          <FiCheckCircle color="#26bd6b" size={70}/>
          <h1>Cadastro feito com sucesso</h1>
      </div>
  );
}

export default Sucess;