const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
};
const tinCan = robotFactory('P-500', true);
tinCan.beep();
I learned how to make multiple related objects with the factory function by specifying it's properties 
