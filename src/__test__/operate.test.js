import operate from '../logic/operate';

describe('Test operate', () => {
    test('add 1 and 2 to equal 3', () => {
        expect(operate(1, 2, '+')).toBe('3');
    });
});