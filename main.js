const Character   = require('./classes/Character');
const Monster     = require('./classes/Monster');
const tools       = require('./utils/tools.js');
const MonsterType = require('./classes/MonsterType');
const Sex         = require('./classes/Sex');


const c1          = new Character("PrefiruRegoo", 10, 50, 10, 10, 1, Sex.MALE);
const c2          = new Character("PrefiruVulva", 10, 90, 10, 10, 1, Sex.MALE);
const m1          = new Monster("Multated Rat", 70, 20, 12, 10, MonsterType.DEMONIC); //name, hp, mana, attack, def, type



const a = 1;

try{
 
    m1.attack_(c1);
    c2.attack_(m1);
    c1.attack_(m1);
    
}catch(e){
    console.log(e);
}


console.log("Meu primo é massa");


