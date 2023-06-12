import express from "express";
 import livros from "./models/Livro.js"
import db from './config/dbConnect.js'
import routes from "./routes/index.js"

db.on("error",console.log.bind(console,'erro de conexão'));

db.once("open",()=>{
    console.log("Conecão com banco feita com sucessp");
})

const app = express();


app.use(express.json())



// const livros = [
//     {id: 1, "titulo": "Senhor dos aneis"},
//     {id: 2, "titulo": "Hobbit"}
// ]


// app.get('/livros',(req,res)=>{
//     livros.find((err,livros)=>{
//         res.status(200).json(livros)
//     })
// })

routes(app);





export default app;