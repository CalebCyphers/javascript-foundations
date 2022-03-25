class Vampire{
    constructor(name, pet){
        this.name=name;
        this.pet=decidePet(pet);
        this.thirsty=true;
        this.ouncesDrank=0;
        this.drink=function(){
            this.thirsty=false;
            if(this.ouncesDrank>=50) {return 'I\'m too full to drink anymore!'}
            else {this.ouncesDrank=this.ouncesDrank+10};
        }
    
    }
}
function decidePet(pet){
    if (pet) {return pet}
    else {return "bat"};
}

module.exports = Vampire;