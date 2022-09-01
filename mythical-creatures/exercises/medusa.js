var Person = require("./person");
var Statue = require("./statue");

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
    this.gazeAtVictim = (person) => {
      var statue = new Statue(person.name);
      this.statues.push(statue);
      if (this.statues.length > 3) {
        var freeStatue = this.statues.shift();
        return new Person(freeStatue.name, 'relieved')
      }
    };
  }
}

module.exports = Medusa;
