import rollDice from '../service/rollDice';

it('testa a função `rollDice`', () => {
  const dice = jest.spyOn(global.Math, 'random').mockReturnValue(0.8);

  expect(rollDice(20)).toBe(16);
  expect(dice).toHaveBeenCalledTimes(1);
});
