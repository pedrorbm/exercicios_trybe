import { render, screen } from '@testing-library/react';
import App from '../App';

it('testa a requisção para a API', async () => {
  const obj = [{
    id: 1,
    name: 'Legolas',
    source: 'Lord of The Rings',
    defensePoints: 50,
  }];

  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(obj),
  });

  render(<App />);

  const perso = await screen.findByRole('heading', { name: 'Legolas' });
  expect(perso).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(1);
});
