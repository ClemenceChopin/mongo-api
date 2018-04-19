module.exports = {
    getUsers (req,res){
        res.send({users:'des users'});
    },
    getUser (req,res){
        res.send({user:'un user avec l\'id ' + req.params.id});
    }
}