// TODO 4.1: Add Function
export function add(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

// TODO 4.2: Subtract Function
export function subtract(numbers) {
  return numbers.reduce((result, num) => result - num);
}

// TODO 4.3: Multiply Function
export function multiply(numbers) {
  return numbers.reduce((result, num) => result * num, 1);
}

// TODO 4.4: Divide Function
export function divide(numbers) {
  return numbers.reduce((result, num) => result / num);
}