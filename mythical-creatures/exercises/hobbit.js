class Hobbit{
    constructor({ name }){
        this.name = name
        this.age = 0
        this.adult = false
        this.old = false
        this.hasRing = false
        this.celebrateBirthday = function(){
            this.age++
            if(this.age > 32){
                this.adult = true
            }
            if(this.age > 100){
                this.old = true
            }
        }
        this.getRing = function(){
            if(this.name === 'Frodo'){
                this.hasRing = true
                return 'Here is the ring!'
            } else {
                return 'You can\'t have it!'
            }
        }
    }
}

module.exports = Hobbit