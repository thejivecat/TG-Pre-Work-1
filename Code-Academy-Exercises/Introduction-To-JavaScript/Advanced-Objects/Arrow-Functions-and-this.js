const robot = {
  energyLevel: 100,
  checkEnergy(){
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robot.checkEnergy();
I learned not to use arrow function notation when using the keyword "this" because arrow functions inherently bind an already defined "this" value to the function itself that is not the calling object
