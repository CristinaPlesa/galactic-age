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
  test('should correctly take year of birth and set life expectancy to 26 years if before 1860', () => {
    traveller.yearOfBirth = 1860
    expect(traveller.birthYearExpectancy()).toEqual(26);
  });
  test('should correctly take year of birth and set life expectancy to 29 years if before 1870', () => {
    traveller.yearOfBirth = 1870
    expect(traveller.birthYearExpectancy()).toEqual(29);
  });
  test('should correctly take year of birth and set life expectancy to 33 years if before 1880', () => {
    traveller.yearOfBirth = 1880
    expect(traveller.birthYearExpectancy()).toEqual(33);
  });
  test('should correctly take year of birth and set life expectancy to 40 years if before 1890', () => {
    traveller.yearOfBirth = 1890
    expect(traveller.birthYearExpectancy()).toEqual(40);
  });
  test('should correctly take year of birth and set life expectancy to 48 years if before 1900', () => {
    traveller.yearOfBirth = 1900
    expect(traveller.birthYearExpectancy()).toEqual(48);
  });
  test(`should correctly take year of birth and set life expectancy to 51 years if before 1910`, () => {
    traveller.yearOfBirth = 1910
    expect(traveller.birthYearExpectancy()).toEqual(51);
  });
  test(`should correctly take year of birth and set life expectancy to 53 years if before 1920`, () => {
    traveller.yearOfBirth = 1920
    expect(traveller.birthYearExpectancy()).toEqual(53);
  });
  test(`should correctly take year of birth and set life expectancy to 54 years if before 1930`, () => {
    traveller.yearOfBirth = 1930
    expect(traveller.birthYearExpectancy()).toEqual(54);
  });
  test(`should correctly take year of birth and set life expectancy to 56 years if before 1940`, () => {
    traveller.yearOfBirth = 1940
    expect(traveller.birthYearExpectancy()).toEqual(56);
  });
  
});