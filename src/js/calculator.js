export default class SpaceTraveller {
  constructor(userName, age, yearOfBirth) {
    this.userName = userName;
    this.age = age;
    this.yearOfBirth = yearOfBirth;
  }

  checkMercuryAge() {
    return Math.round(this.age / 0.24);
  }

  checkVenusAge() {
    return Math.round(this.age / 0.62);
  }

  checkMarsAge() {
    return Math.round(this.age / 1.88);
  }

  checkJupiterAge() {
    return Math.round(this.age / 11.86);
  }

  birthYearExpectancy() {
    
  }

}

// life expectancy so far is based on birth year, make it go far back.
// choose a fantasy species to determine additional life expectancy: none 0, alien 555, wizard 137, Skeksis 1000, gelfling 200, elf 300, 
// birth year: <=1860 = 26, 61-70 = 29, 71-80 = 33, 81-90 = 40, 91-1900 = 48, 1901-10 = 51, 1911-20 = 53, 1921-30 = 54, 1931-40 = 56, 1941-50 = 59, 1951-60 = 61, 1961-70 = 63, 1971-80 = 67, 1981-90 = 72, 1991-2000 = 75, 2001-2010 = 79, 2011-20 = 84, >=2021 = 90

// have another function then that calculates how much time the user has left to live for each planet, according to their life expectancy inputs.



// this.age = 25 * 365 for earth age = 9125 days (example)
// must convert someone's age to mercury, venus, mars, and jupiter years.
// think of age as an empty array with which each kind of planet current age is calculated. then have loop go through each array index (planet current age) and calculate their life expectancy based on inputted age and date of birth? how is that done?. 
// get life expectancy from statistics and then figure out how many days that is. I will make my life expectancy 90 years for earth years? that is: 32,850 days.
