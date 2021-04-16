import Calculator from './../src/js/calculator';

describe('Calculator', () => {

  test('should correctly create a calculator object with name value', () => {
  const calculator = new Calculator("name",25);
  expect (calculator.userName).toEqual("name");
  });
  test('should correctly create a calculator object with age value', () => {
    const calculator = new Calculator("name",25);
    expect (calculator.age).toEqual(25);
    });

});