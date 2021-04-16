import Calculator from './../src/js/calculator';

describe('Calculator', () => {

  test('should correctly create a calculator object with name and age values', () => {
  const calculator = new Calculator("name",25);
  expect (calculator.userName).toEqual("name");
  expect (calculator.age).toEqual(25);
  });

});