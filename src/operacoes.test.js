const calculator = require('./operacoes');

test('Operação soma fucionando!', () => {
  expect(calculator.soma(2, 2)).toBe(4);
});