const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const MovieShema = new Schema({
        title: {type:String},
        duration:{type:Number }
       
}); 

const movieModel = mongoose.model('movie', MovieShema, 'MOVIE_COLLEC');

module.exports = movieModel;