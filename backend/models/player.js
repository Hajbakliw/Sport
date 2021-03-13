const mongoose = require('mongoose');
const playerSchema = mongoose.Schema({
    
    name: String,
    position: String,
    nbr: Number,
    age: Number,
    descriptio: String

});
const player=mongoose.model('Player',playerSchema); //player c le nom du modele
module.exports=player;