import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

// arquivo App.test.js pode servir de exemplo
describe('Testando a aplicação, testando botão, e sua funcionalidade', () => {
  test('Verifica se o botão está na tela com o texto "Adicionar"', () => {
    render(<App />);
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Adicionar');
    expect(button).toHaveProperty('type', 'button');
  });

  test('Ao clicar no botão Adicionar a tarefa deve ser adicionada na tela', () => {
    // Use o userEvent, para simular a digitação do usuário e o clique.
    render(<App />);
    const labelInput = screen.getByLabelText('Tarefa:');
    const button = screen.getByRole('button');

    expect(labelInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Adicionar');

    userEvent.type(labelInput, 'Pedro');

    expect(labelInput).toHaveValue('Pedro');

    userEvent.click(button);
    const textScreen = screen.getByText('Pedro');

    expect(textScreen).toBeInTheDocument();
    expect(labelInput).toHaveValue('');
  });
});
