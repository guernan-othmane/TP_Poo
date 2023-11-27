const readline = require('readline');

const inp = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Character {
    constructor(name, health, strength) {
        this._name = name;
        this._health = health;
        this._strength = strength;
    }

    get name() {
        return this._name;
    }

    get health() {
        return this._health;
    }

    get strength() {
        return this._strength;
    }

    speak() {
        console.log(`${this._name} says: Salut`);
    }

    move() {
        console.log(`${this._name} moves.`);
    }
}

class Alien extends Character {
    constructor(name, health, strength) {
        super(name, health, strength);
    }

    speak() {
        console.log(`${this.name} says: Friw kriiw friw kriiw, I am an alien.`);
    }

    move() {
        console.log(`${this.name} glides gracefully with its tentacles.`);
    }
}

class Astronaut extends Character {
    constructor(name, health, strength) {
        super(name, health, strength);
    }

    speak() {
        console.log(`${this.name} says: Today I will search for aliens, I am an astronaut.`);
    }

    move() {
        console.log(`${this.name} moves with a spaceship.`);
    }
}

// Demander à l'utilisateur d'entrer les valeurs
inp.question('Enter the name for Alien: ', (alienName) => {
    inp.question('Enter health for Alien: ', (alienHealth) => {
        inp.question('Enter strength for Alien: ', (alienStrength) => {
            const alien1 = new Alien(alienName, parseInt(alienHealth), parseInt(alienStrength));
            
            // Appeler les méthodes après avoir créé l'instance
            alien1.speak();
            alien1.move();

            // Fermer l'interface readline
            inp.close();
        });
    });
});

inp.question('Enter the name for Astronaut: ', (astronautName) => {
    inp.question('Enter health for Astronaut: ', (astronautHealth) => {
        inp.question('Enter strength for Astronaut: ', (astronautStrength) => {
            const astronaut1 = new Astronaut(astronautName, parseInt(astronautHealth), parseInt(astronautStrength));
            
            // Appeler les méthodes après avoir créé l'instance
            astronaut1.speak();
            astronaut1.move();

            // Fermer l'interface readline
            inp.close();
        });
    });
});

