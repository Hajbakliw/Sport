const mongoose = require('mongoose');
const teamSchema = mongoose.Schema({
    name:String,
    fondation :String,
    stadium:String,
    country:String

});
const team=mongoose.model('Team',teamSchema); //Team c le nom du modele
module.exports=team;