const SpaceShip = require('./Exercice1')
const readline = require('readline');
const cargo = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

class CargoShip extends SpaceShip {
    constructor(name,speed,healthStatut,cargoCapacity){
        super(name,speed,healthStatut)
        this._cargoCapacity = cargoCapacity;
    }
    get cargoCapacity(){
        return this._cargoCapacity;
    }
    loadCargo(cargoCapacity){
        if(cargoCapacity>=10){
            console.log(`${this._name} have a large capacity = ${cargoCapacity}.`);
        } else{
            console.log(`${this._name} dont have a large capacity`);
        }
    }
    fly() {
    console.log(`${this._name} is flying at speed ${this._speed}.`);
    }
}

cargo.question('Enter the name for cargoship: ', (cargoshipName) => {
    cargo.question('Enter Speed for cargoship: ', (cargoshipSpeed) => {
        console.log(cargoshipSpeed);
        cargo.question('Enter Capacity for cargoship: ', (spaceshipcargoCapacity) => {
            const cargoship1 = new CargoShip(cargoshipName,cargoshipSpeed,spaceshipcargoCapacity);
            cargoship1.loadCargo(spaceshipcargoCapacity);
            cargoship1.fly();

            cargo.close();
        });
    });
});
module.exports = CargoShip;

