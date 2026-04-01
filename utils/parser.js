import _ from "lodash";

// TODO 5.1: Parse Numbers Function
export function parseNumbers(input) {
  const numbers = _.map(input, (str) => Number(str));
  return _.compact(numbers);
}

// TODO 5.2: Validate Operation Function
export function isValidOperation(operation) {
  const validOps = ["add", "subtract", "multiply", "divide"];
  return _.includes(validOps, operation);
}