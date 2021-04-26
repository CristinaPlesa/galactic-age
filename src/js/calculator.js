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
    if(this.yearOfBirth <= 1860) {
      return 26
   } else if(this.yearOfBirth <= 1870) {
      return 29
   } else if(this.yearOfBirth <= 1880) {
      return 33
   } else if(this.yearOfBirth <= 1890) {
      return 40
   } else if(this.yearOfBirth <= 1900) {
      return 48
   } else if(this.yearOfBirth <= 1910) {
      return 51
   } else if(this.yearOfBirth <= 1920) {
      return 53
   } else if(this.yearOfBirth <= 1930) {
      return 54
   } else if(this.yearOfBirth <= 1940) {
      return 56
   } else if(this.yearOfBirth <= 1950) {
      return 59
   } else if(this.yearOfBirth <= 1960) {
      return 61
   } else if(this.yearOfBirth <= 1970) {
      return 63
   } else if(this.yearOfBirth <= 1980) {
      return 67
   } else if(this.yearOfBirth <= 1990) {
      return 72
   } else if(this.yearOfBirth <= 2000) {
      return 75
   } else if(this.yearOfBirth <= 2010) {
      return 79
   } else if(this.yearOfBirth <= 2020) {
      return 84
   } else {
      return 90
   }
  }

  getLifeExpectancy() {
    const birthYear = this.birthYearExpectancy()
    if(birthYear > this.age) {
      let thereIsStillTime = birthYear - this.age;
      return ('You still have ' + thereIsStillTime + ' years left to live!')
    } else {
      let lucky = this.age - birthYear;
      return ('You have surpassed your life expectancy by ' + lucky + ' years!')
    }
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
