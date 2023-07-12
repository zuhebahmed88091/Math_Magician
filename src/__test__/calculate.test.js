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

describe('Test Calculate multiply', () => {
  const obj = {
    total: 6,
    next: 2,
    operation: 'x',
  };
  const calculation = calculate(obj, '=');
  it('test for multiplication', () => {
    expect(calculation.total).toBe('12');
  });
});

describe('Test Calculate remainder', () => {
  const obj = {
    total: 5,
    next: 3,
    operation: '%',
  };
  const calculation = calculate(obj, '=');
  it('test for remainder', () => {
    expect(calculation.total).toBe('2');
  });
});
