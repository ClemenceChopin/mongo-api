const mongoose = require('mongoose');
const Movie = require('./movie');
const Schema = mongoose.Schema; 


const UserShema = new Schema({
        name: String,
        age: Number,
        movies:[{
            type:Schema.Types.ObjectId,
            ref: 'movie'
        }]
}); 

UserShema.virtual('countMovies').get(function(){
        return this.movies.length;
});

UserShema.pre('remove',function (next) {
        Movie.remove({_id: { $in: this.movies} }).then( () =>{
            next();
        })
});


const userModel = mongoose.model('user', UserShema);

module.exports = userModel;
