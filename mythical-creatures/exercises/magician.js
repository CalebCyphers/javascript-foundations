class Magician {
    constructor({ name, assistant, clothing }) {
        this.name = `The Great ${name}`
        this.assistant = assistant
        this.favoriteAccessory = clothing ? clothing : 'top hat'
        this.confidencePercentage = 10
        this.performIncantation = (spell) => {
            this.confidencePercentage = this.confidencePercentage + 10
            return `${spell.toUpperCase()}!`
        }
        this.performTrick = () => {
            this.confidencePercentage = this.confidencePercentage + 10
            return this.favoriteAccessory === 'top hat' ? 'PULL RABBIT FROM TOP HAT' : 'PULL DOVE FROM SLEEVE'
        }
        this.performShowStopper = () => {
            return this.confidencePercentage >= 100 && this.assistant ? 'WOW! The magician totally just sawed that person in half!' : 'Oh no, this trick is not ready!'
        }
    }
}

module.exports = Magician