class Pirate {
  constructor(name, job) {
    this.name = name;
    this.job = job ? job : "scallywag";
    this.cursed = false;
    this.booty = 0;
    this.robShip = () => {
      if (this.booty < 500) {
        this.booty = this.booty + 100;
        return "YAARRR!";
      } else {
        this.cursed = true;
        return "ARG! I've been cursed!";
      }
    };
    this.liftCurse = () => {
      if (this.booty >= 300 && this.cursed) {
        this.booty = this.booty - 300;
        this.cursed = false;
        return "Your curse has been lifted!";
      } else {
        return "You don't need to lift a curse!";
      }
    };
  }
}

module.exports = Pirate;
