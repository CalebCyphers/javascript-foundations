class Dragon {
  constructor(name, rider) {
    this.name = name
    this.rider = rider
    this.hungry = true
    this.foodInStomach = 0
  }

  eat = () => {
    this.foodInStomach++
    if (this.foodInStomach >= 3) {
      this.hungry = false
    }
  }

  greet = () => {
    return `Hi, ${this.rider}!`
  }
}

module.exports = Dragon;