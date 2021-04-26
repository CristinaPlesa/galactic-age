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
  test(`should correctly take year of birth and set life expectancy to 59 years if before 1950`, () => {
    traveller.yearOfBirth = 1950
    expect(traveller.birthYearExpectancy()).toEqual(59);
  });
  test(`should correctly take year of birth and set life expectancy to 61 years if before 1960`, () => {
    traveller.yearOfBirth = 1960
    expect(traveller.birthYearExpectancy()).toEqual(61);
  });
  test(`should correctly take year of birth and set life expectancy to 63 years if before 1970`, () => {
    traveller.yearOfBirth = 1970
    expect(traveller.birthYearExpectancy()).toEqual(63);
  });
  test(`should correctly take year of birth and set life expectancy to 67 years if before 1980`, () => {
    traveller.yearOfBirth = 1980
    expect(traveller.birthYearExpectancy()).toEqual(67);
  });
  test(`should correctly take year of birth and set life expectancy to 72 years if before 1990`, () => {
    traveller.yearOfBirth = 1990
    expect(traveller.birthYearExpectancy()).toEqual(72);
  });
  test(`should correctly take year of birth and set life expectancy to 75 years if before 2000`, () => {
    traveller.yearOfBirth = 2000
    expect(traveller.birthYearExpectancy()).toEqual(75);
  });
  test(`should correctly take year of birth and set life expectancy to 79 years if before 2010`, () => {
    traveller.yearOfBirth = 2010
    expect(traveller.birthYearExpectancy()).toEqual(79);
  });
  test(`should correctly take year of birth and set life expectancy to 84 years if before 2020`, () => {
    traveller.yearOfBirth = 2020
    expect(traveller.birthYearExpectancy()).toEqual(84);
  });
  test(`should correctly take year of birth and set life expectancy to 90 years if before 2030`, () => {
    traveller.yearOfBirth = 2030
    expect(traveller.birthYearExpectancy()).toEqual(90);
  });
  test(`should correctly return a user's life expectancy on at age 30 with birth year 1991`, () => {
    expect(traveller.getLifeExpectancy()).toEqual(45);
  })
});