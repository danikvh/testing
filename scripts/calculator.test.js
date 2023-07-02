import calculator from './calculator'

test('1+1 = 2', () => {
    expect(calculator.add(1,1)).toBe(2);
});

test('1+a = Introduce números', () => {
    expect(calculator.add(1,"a")).toBe("Introduce numeros");
});

test('add(-4, 2) is -2', () => {
    expect(calculator.add(-4, 2)).toBe(-2);
});
  
test('add(0.5, 0.2) is 0.7', () => {
    expect(calculator.add(0.5, 0.2)).toBe(0.7);
});
  
test('subtract(4, 2) is 2', () => {
    expect(calculator.subtract(4, 2)).toBe(2);
});
  
test('subtract(-4, 2) is -6', () => {
    expect(calculator.subtract(-4, 2)).toBe(-6);
});
  
test('subtract(0.5, 0.2) is 0.3', () => {
    expect(calculator.subtract(0.5, 0.2)).toBe(0.3);
});
  
test('subtract("4", 2) is "Introduce numeros"', () => {
    expect(calculator.subtract('4', 2)).toBe('Introduce numeros');
});
  
test('divide(4, 2) is 2', () => {
    expect(calculator.divide(4, 2)).toBe(2);
});
  
test('divide(-4, 2) is -2', () => {
    expect(calculator.divide(-4, 2)).toBe(-2);
});
  
test('divide(0.5, 0.2) is 2.5', () => {
    expect(calculator.divide(0.5, 0.2)).toBe(2.5);
});
  
test('divide("4", 2) is "Introduce numeros"', () => {
    expect(calculator.divide('4', 2)).toBe('Introduce numeros');
});
  
test('multiply(4, 2) is 8', () => {
    expect(calculator.multiply(4, 2)).toBe(8);
});
  
test('multiply(-4, 2) is -8', () => {
    expect(calculator.multiply(-4, 2)).toBe(-8);
});
  
test('multiply(0.5, 0.2) is 0.1', () => {
    expect(calculator.multiply(0.5, 0.2)).toBe(0.1);
});
  
test('multiply("4", 2) is "Introduce numeros"', () => {
    expect(calculator.multiply('4', 2)).toBe('Introduce numeros');
});