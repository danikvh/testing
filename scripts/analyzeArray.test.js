import analyzeArray from './analyzeArray';

test('normal number array', () => {
    expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
        average: 3,
        min: 1,
        max: 5,
        length: 5,
    });
});

test('array with non-number', () => {
    expect(analyzeArray([1, 2, 3, 4, '5'])).toBe('Error: Array should contain only numbers.');
});

test('array empty', () => {
    expect(analyzeArray([])).toBe('Error: Array is empty.');
});

test('array-like object (string)', () => {
    expect(analyzeArray('12345')).toBe('not an array');
});