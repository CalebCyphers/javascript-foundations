class Person {
    constructor(name, mood) {
        this.name = name
        this.mood = mood ? mood : 'frightened'
    }
}
module.exports = Person