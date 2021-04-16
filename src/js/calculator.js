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

  // checkPlanetAge() {
  //   const planetAges = [];

  // }
}


// this.age = 25 * 365 for earth age = 9125 days (example)
// must convert someone's age to mercury, venus, mars, and jupiter years.
// think of age as an empty array with which each kind of planet current age is calculated. then have loop go through each array index (planet current age) and calculate their life expectancy based on inputted age and date of birth? how is that done?. 
// get life expectancy from statistics and then figure out how many days that is. I will make my life expectancy 90 years for earth years? that is: 32,850 days.