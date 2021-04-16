import SpaceTraveller from './../src/js/calculator';

describe('User', () => {
  let traveller;

  beforeEach(() => {
    traveller = new SpaceTraveller("name", 30, 1991)
  });

  test('should correctly create a SpaceTraveller object with name value', () => {
  expect (traveller.userName).toEqual("name");
  });
  test('should correctly create a calculator object with age value', () => {
    expect (traveller.age).toEqual(30);
  });
  test('should correctly create a calculator object with yearOfBirth value', () => {
    expect (traveller.yearOfBirth).toEqual(1991);
  });
  test

});