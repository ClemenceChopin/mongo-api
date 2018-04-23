const User = require("../modeles/users")

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
        const body = req.body;
        const user = new User({name:body.name});
        user.save().then(()=> {
                res.send({result:user})
        }) 
    },
    delete (req,res){
        const {id} = req.body;
        User.findByIdAndRemove(id).then((user) =>{
            res.send(user);
        })
    }
}