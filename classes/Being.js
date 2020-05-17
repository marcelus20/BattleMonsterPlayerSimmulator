const tools = require('../utils/tools');

const Being = class {

    /**
     * Being  Blueprint
     * @param {String} name 
     * @param {Number} hp 
     * @param {Number} mana 
     * @param {Number} attack 
     * @param {Number} defense 
     */
    constructor(name, hp, mana, attack, defense){
        this.name = name;
        this.hp = hp;
        this.mana = mana;
        this.attack = attack;
        this.defense = defense;
    }


    /**
     * This method attacks another being. The attack has the intent to harm the object passed as parameter by 
     * diminishing the hp attribute. 
     * @param {Being} being 
     */
    attack_(being){
        if(!(being instanceof Being)){
            throw new Error("Parameter must be of type Being");
        }else if(!being.isDead() && !this.isDead()){
            let harm = tools.calcRandomRange(0, this.attack) - tools.calcRandomRange(0, being.defense);
            harm = harm <= 0? 0 : harm;

            being.hp = being.hp - harm;
            being.hp = being.hp <= 0?0:being.hp;
            setTimeout(()=>{
                console.log(`${being.name} loses ${harm} hitpoints by ${this.name}. ${tools.definePronoun(being)} has remaining HP of ${being.hp}`);
                this.attack_(being);   
            }, 3000);
        }
    }

    isDead(){
        return this.hp <= 0;
    }
}

module.exports = Being;