import calculate from '../logic/calculate';

describe('Testing Addition', () => {
  const obj = {
    total: 12,
    next: 8,
    operation: '+',
  };
  const calculation = calculate(obj, '=');
  it('Addition works', () => {
    expect(calculation.total).toBe('20');
  });
});

describe('Testing subtraction', () => {
  const obj = {
    total: 55,
    next: 10,
    operation: '-',
  };
  const calculation = calculate(obj, '=');
  it('Subtraction works', () => {
    expect(calculation.total).toBe('45');
  });
});
