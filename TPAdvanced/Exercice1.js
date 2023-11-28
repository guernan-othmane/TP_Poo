const readline = require('readline');

const space = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});
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
// Demander à l'utilisateur d'entrer les valeurs
space.question('Enter the name for spaceship: ', (spaceshipName) => {
    space.question('Enter Speed for spaceship: ', (spaceshipSpeed) => {
        space.question('Enter HealthStatut for spaceship: ', (spaceshiphealthStatut) => {
            const spaceship1 = new Spaceship(spaceshipName,spaceshipSpeed,spaceshiphealthStatut);
            
            spaceship1.fly();
            spaceship1.land();

            // Fermer l'interface readline
            space.close();
        });
    });
});
module.exports = Spaceship;