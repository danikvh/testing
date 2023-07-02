import reverseString from './reverseString'

test('"test" returns "tset"', () => {
    expect(reverseString('test')).toBe('tset');
});

test('"Test" returns "tseT"', () => {
    expect(reverseString('Test')).toBe('tseT');
});

test('"abba" returns "abba"', () => {
    expect(reverseString('abba')).toBe('abba');
});