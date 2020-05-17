const Being       = require('./Being');
const MonsterType = require('../classes/MonsterType');

/**
 * 
 * @param {String} name 
 * @param {Number} hp 
 * @param {Number} mana 
 * @param {Number} attack 
 * @param {Number} defense 
 * @param {MonsterType} type 
 */
const Monster = class extends Being{
    constructor(name, hp, mana, attack, defense, type = MonsterType.ANIMAL){
        super(name, hp, mana, attack, defense);
        this.type = type;
    }
}


module.exports = Monster;