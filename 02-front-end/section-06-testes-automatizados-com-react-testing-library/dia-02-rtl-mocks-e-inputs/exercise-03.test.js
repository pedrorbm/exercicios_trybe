import rollMultipleDice from '../service/rollMultipleDice';
import attackEnemy from '../service/attackEnemy';

jest.mock('../service/rollMultipleDice');

const enemy = {
  id: 1,
  name: 'Chapolin Colorado',
  source: 'Chaves',
  defensePoints: 30,
};

it('testa uma vitória na função `attackEnemy`', () => {
  rollMultipleDice.mockReturnValueOnce(31);

  expect(attackEnemy(3, 12, enemy)).toHaveProperty('success', true);
});

it('testa uma derrota na função `attackEnemy`', () => {
  rollMultipleDice.mockReturnValueOnce(25);

  expect(attackEnemy(2, 8, enemy)).toHaveProperty('success', false);
});

it('testa um empate nos dados, gerando derrota no `attackEnemy`', () => {
  rollMultipleDice.mockReturnValueOnce(30);

  expect(attackEnemy(3, 10, enemy)).toHaveProperty('success', false);
});
