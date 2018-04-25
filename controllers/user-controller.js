const User = require("../modeles/users")
const Movie = require("../modeles/movies")

module.exports = {
    readAll (req,res){
        User.find().then((users)=>{
            res.send(users);
        })
    },
    read (req,res){
        const {id} = req.params;
        User.findById(id).then((user) =>{
            res.send(user);
        })
    },
    create (req,res){
        const name = req.body.name;
        const age = req.body.age;
        const user = new User({name,age});
        const movie = new Movie({title:"la legende de seabiscuit", duration:97})
        user.movies.push(movie); 
        user.save().then(()=> {
            movie.save().then(()=>{
                res.send({result:user})
            })
        }) 
    },
    delete (req,res){
        const {id} = req.body;
        User.findByIdAndRemove(id).then((user) =>{
            res.send(user);
        })
    },
    oldest(req,res){
        console.log('--');
        User.find().sort({'age':-1}).limit(1).then((users) =>{
            res.send(users);
        })
    },
    youngest(req,res){
        User.find().sort({'age':1}).limit(1).then((users) =>{
            res.send(users);
        })
    },
    HasLongestMovie(req,res){
        User.aggregate([

            {$unwind: "$movies"},
            {
                $lookup :
                {
                  from:"MOVIE_COLLEC",
                  localField:"movies",
                  foreignField:"_id",
                  as:"MovieContent"
                }
            },
            {	
                  $unwind: "$MovieContent"
            },
            { 
                  $sort: {"MovieContent.duration":-1}
            },
            {	
                  $limit: 1
            },
            {
                 $project: { "user name":"$name", "Movie":"$MovieContent.title", "time":"$MovieContent.duration "} 
            }   
        ]).then((infos) =>{
            res.send(infos);
        })
    }
}