const robot = {
  _energyLevel: 'high',
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};
console.log(robot.recharge());



I learned there are properties that can be coded to signal to other coders not to manipulate their values (such as underscore). Changing these values can have unintended consequences
