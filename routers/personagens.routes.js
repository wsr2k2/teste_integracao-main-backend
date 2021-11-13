const express = require("express"); //import do express
const router = express.Router(); //define app como express
const PersonagemController = require('./../controller/personagens.controller'); // importacao do controller

router.get('/', (req,res) => {
    res.status(200).json({message:"rota personagem ok"});
});

router.get("/readAll", PersonagemController.getAll);

router.get("/readSingle/:id", PersonagemController.getSingle);

router.post("/create", PersonagemController.postCreate);

router.put("/update/:id", PersonagemController.putUpdate);

router.delete("/delete/:id", PersonagemController.delDelete);

module.exports = router;