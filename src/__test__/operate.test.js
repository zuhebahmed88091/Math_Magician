import operate from '../logic/operate';

describe('Test operate', () => {
  test('add 12 and 8 to equal 20', () => {
    expect(operate(12, 8, '+')).toBe('20');
  });
});

describe('Test operate', () => {
  test('subtract 55 and 10 to equal 45', () => {
    expect(operate(55, 10, '-')).toBe('45');
  });
});

describe('Test operate', () => {
  test('multiply 6 and 2 to equal 12', () => {
    expect(operate(6, 2, 'x')).toBe('12');
  });
});

describe('Test operate', () => {
  test('remainder of 5 and 3 to equal 2', () => {
    expect(operate(5, 3, '%')).toBe('2');
  });
});
