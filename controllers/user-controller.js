module.exports = {
    readAll (req,res){
        res.send({users:'readAll'});
    },
    read (req,res){
        res.send({user:'read' + req.params.id});
    },
    create (req,res){
        console.log('create');
        const body = req.body;
        console.log(body);
    }
}