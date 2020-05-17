const Being = require('./Being');
const Sex   = require('./Sex');

/**
 * Character  Blueprint
 * @param {String} name 
 * @param {Number} hp 
 * @param {Number} mana 
 * @param {Number} attack 
 * @param {Number} defense 
 * @param {Number} level 
 * @param {Sex} sex 
 */
const Character = class extends Being{
    constructor(name, hp, mana, attack, defense, level, sex = Sex.FEMALE){
        super(name, hp, mana, attack, defense);
        this.level = level;
        this.sex = sex;
    }
}


module.exports = Character;