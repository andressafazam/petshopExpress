const PetModel = require("../model/Pet");
const PetController = {
    index: (req,res) => {
        res.send(PetModel.listarPets());
    },
    add: (req,res) => {
        res.send("Adiciona pet");
    },
    show: (req,res) =>{
        res.send("Exibe 1 pet especifico");
    }
};

module.exports = PetController;