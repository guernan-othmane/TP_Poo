class Spaceship{
    constructor(name,speed,healthStatut){
        this._name = name;
        this._speed = speed;
        this._healthStatut = healthStatut;
        this._altitude = 0;
        this._isFlying = false;
    }

    get name(){
        return this._name; 
    }
    set name(newName){
        this._name = newName;
    }

    get speed(){
        return this._speed; 
    }
    set speed(newSpeed){
        this._speed = newSpeed;
    }

    get healthStatut(){
        return this._healthStatut; 
    }
    set healthStatut(newhealthStatut){
        this._healthStatut = newhealthStatut;
    }
    isFlying() {
        return this._isFlying;
    }

    fly(hauteur){
        if (!this._isFlying) {
            this._isFlying = true;
            console.log(`${this._name} is now flying at an altitude of ${hauteur} meters.`);
            this._altitude += hauteur;
        } else {
            console.log(`${this._name} is already flying at an altitude of ${this._altitude} meters.`);
        }
    }
    land(){
        if (!this._isFlying) {
            this._isFlying = true;
            console.log(`${this._name} is now landing at an altitude.`);
        } else {
            console.log(`${this._name} is already landing.`);
        }
    }
}
const spaceship = new Spaceship("Starship 1",30, "Healthy");

console.log(spaceship.name); 
console.log(spaceship.speed); 
console.log(spaceship.healthStatut); 

spaceship.fly(300); 
spaceship.fly(0); 

spaceship.land(300); 
spaceship.land(0);