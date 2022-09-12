const Pet = require('../models/pet.model')

const PetController ={

//Create
create:(req,res)=>{
    Pet.create(req.body)
    .then((pet) =>{
        res.status(201).json({pet:pet})
    })
    .catch((err)=> {
        res.status(400).json({message:"Somthing Went Wrong!",error:err})

    })
},
//Read
getAll:(req,res)=>{
    Pet.find({}).sort({petType: 1})
    .then((pets)=>{
        res.status(200).json({pets:pets})
    })
    .catch((err)=> {
        res.status(500).json({message:"Somthing Went Wrong!",error:err})
    })
},
getOne:(req,res)=>{
    Pet.find({_id:req.params.id})
    .then((pet)=>{
        res.status(200).json({pet:pet})
        })
        .catch((err)=>{
            res.status(500).json({message:"Somthing Went Wrong!",error:err})
        })
},
//Update
update:(req,res)=>{
    Pet.find({_id:req.params.id})
    .findOneAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true})
    .then((pet)=>{
        res.status(200).json({pet:pet})
    })
    .catch((err) =>{
        res.status(400).json({message:"Somthing Went Wrong!",error:err})
    })

},
//Delete
delete:(req, res) =>{
    Pet.findOneAndDelete(req.params.id)
    .then((pet)=>{
        res.status(200).json({pet:pet})
    })
    .catch((err) =>{
        res.status(500).json({message:"Somthing Went Wrong!",error:err})
    })
}

}
module.exports = PetController