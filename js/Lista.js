// DIA 20 - Componente de Lista em React
import React from 'react';

const Lista = ({ items }) => {
  return (
    <ul>
      {items.map(item => <li key={item.id}>{item.nome}</li>)}
    </ul>
  );
};

export default Lista;

// Exemplo de uso:
// const itens = [
//   { id: 1, nome: 'Item 1' },
//   { id: 2, nome: 'Item 2' },
//   { id: 3, nome: 'Item 3' }
// ];
// <Lista items={itens} />