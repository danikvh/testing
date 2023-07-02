import capitalize from './capitalize'

test('"test" should become "Test"', () => {
    expect(capitalize('test')).toBe('Test');
});

test('"Test" should become "Test"', () => {
    expect(capitalize('Test')).toBe('Test');
});

test('"TEST" should become "TEST"', () => {
    expect(capitalize('TEST')).toBe('TEST');
});

test('"three word test" should become "Three word test"', () => {
    expect(capitalize('three word test')).toBe('Three word test');
});

test('"124rt#" should become "124Rt#"', () => {
    expect(capitalize('124rt#')).toBe('124Rt#');
});

test('"124Rt#" should become "124Rt#"', () => {
    expect(capitalize('124Rt#')).toBe('124Rt#');
});

test('"1234" should become "no valid characters"', () => {
    expect(capitalize('1234')).toBe('no valid characters');
});