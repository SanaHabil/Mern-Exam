const PetController = require("../controller/pet.controller")

const routes = (app)=> {

app.post("/api/pets",PetController.create);

//Read ALl
app.get('/api/pets',PetController.getAll);
//Read One
app.get('/api/pets/:id',PetController.getOne);
//Update
app.put('/api/pets/:id',PetController.update);
//Delete
app.delete('/api/pets/:id',PetController.delete);
}

module.exports = routes