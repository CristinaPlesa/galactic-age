import SpaceTraveller from './../src/js/calculator';

describe('User', () => {
  let traveller;

  beforeEach(() => {
    traveller = new SpaceTraveller("name", 30, 1991)
  });

  test('should correctly create a SpaceTraveller object with name value', () => {
  expect(traveller.userName).toEqual("name");
  });
  test('should correctly create a SpaceTraveller object with age value', () => {
    expect(traveller.age).toEqual(30);
  });
  test('should correctly create a SpaceTraveller object with yearOfBirth value', () => {
    expect(traveller.yearOfBirth).toEqual(1991);
  });
  test('should correctly take age value and return age in Mercury years', () => {
    traveller.age = 62;
    expect(traveller.checkMercuryAge()).toEqual(258);
  });
  test('should correctly take Earth age value and return rounded Venus age', () => {
  expect(traveller.checkVenusAge()).toEqual(48);
  });
  test('should correctly take Earth age value and return rounded Mars age', () => {
  expect(traveller.checkMarsAge()).toEqual(16);
  });
  test('should correctly take Earth age value and return rounded Jupiter age', () => {
  expect(traveller.checkJupiterAge()).toEqual(3);
  });
  test('should correctly take year of birth and set life expectancy to 23 years if before 1860', () => {
  expect(traveller.birthYearExpectancy()).toEqual(26);
  });
});