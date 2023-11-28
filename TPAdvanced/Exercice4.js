const readline = require('readline');
const miss = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

class MissionControl{
    constructor(name,level,dateStart,dateDone,statut){
      this._name = name;
      this._level = level;
      this._statut = statut;
      this._dateStart = dateStart;
      this._dateDone = dateDone;
      this._missions = []
    }
    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    get level() {
        return this._level;
    }

    set level(newLevel) {
        this._level = newLevel;
    }

    get dateStart() {
        return this._dateStart;
    }

    set dateStart(newDateStart) {
        this._dateStart = newDateStart;
    }

    get dateDone() {
        return this.dateDone;
    }

    set dateDone(newDateDone) {
        this._dateDone = newDateDone;
    }

    AddMission(mission){
        this._missions.push(mission);
        console.log(`Mission ${this._name} StartAt ${this._dateStart} and FinishAt ${this._dateDone}`)
    }

    CompleteMission(statut){
        if (statut === "completed"){
            console.log(`misson ${this._name} has been completed.`)
        } else {
            console.log(`Mission ${this._name} not found`)
        }
    }
    ComplexiteMission(level){
        if (level >= 10){
            console.log(`mission ${this._name} have a hard level !!`);
        } else{
            console.log(`mission ${this._name} have a easy level !!`)
        }
    }
}
miss.question('Enter the name for Mission: ', (missionName) => {
    miss.question('Enter dateDone for Mission: ', (missionDateDone) => {
        miss.question('Enter level for Mission: ', (missionLevel) => {
        miss.question('Enter Statut of Misson: ', (missionStatut) => {
            const mission1 = new MissionControl(missionName,missionLevel,missionStatut,missionDateDone);
            mission1.CompleteMission(missionStatut);
            mission1.AddMission();
            mission1.ComplexiteMission();

            miss.close();
        });
    });
});
});
