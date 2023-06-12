import express from "express";
import AutorController from "../controller/autoresController.js"

const router = express.Router();

router 
.get("/autores/:id",AutorController.listarAutoresPorId)
.get("/autores",AutorController.listarAutores)
.post("/autores",AutorController.cadastrarAutores)
.put("/autores/:id",AutorController.atualizarAutores)
.delete("/autores/:id", AutorController.excluirAutor)


export default router;