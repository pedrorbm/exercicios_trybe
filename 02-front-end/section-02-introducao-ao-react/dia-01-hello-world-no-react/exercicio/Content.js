import React from 'react';

const conteudos = [
  {
    nome: 'JavaScript assíncrono',
    bloco: 9,
    status: 'já aprendi',
  },
  {
    nome: 'Composição de Componentes',
    bloco: 10,
    status: 'estou aprendendo',
  },
  {
    nome: 'Composição de Estados',
    bloco: 11,
    status: 'aprenderei',
  },
  {
    nome: 'Redux',
    bloco: 15,
    status: 'aprenderei',
  },
];

class Content extends React.Component {
  render() {
    return (
      <main>
        <div>
          { conteudos.map((element) => {
            const { status, nome, bloco } = element;
            const frase = `Eu ${status} o conteúdo ${nome} no bloco ${bloco}`;
            const retorno = <p>{ frase }</p>;
            return retorno;
          }) }
        </div>
      </main>
    );
  }
}

export default Content;
