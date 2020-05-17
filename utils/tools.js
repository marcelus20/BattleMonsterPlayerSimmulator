const Character       = require('../classes/Character');
const Sex             = require('../classes/Sex');

const tools           = {}

tools.calcRandomRange = (start, limit) => {
    return Math.floor(Math.random() * (limit - start + 1)) + start;
}

tools.definePronoun   = (being) => {
    if(being.sex){
        if(being.sex == Sex.MALE){
            return "He";
        }else{
            return "She";
        }
    }else{
        //If monster
        return "It"
    }
}


module.exports        = tools;