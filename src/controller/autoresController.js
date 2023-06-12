
import autores from '../models/Autor.js'


class AutorController{

    static listarAutores = (req,res)=>{
        autores.find((err,autores)=>{
            res.status(200).json(autores)
        })
    }


    static cadastrarAutores = (req,res) =>{
        //primeiramente criar um novo Autor
        let autor = new autores(req.body);

        autor.save((err)=>{
            if (err) {
                res.status(500).send({message:`${err.message} - falha ao cadastrar`})
            }
            else{
                res.status(201).send(autor.toJSON())
            }
        })
    }

    static atualizarAutores = (req,res) =>{

        const id = req.params.id;

        autores.findByIdAndUpdate(id, {$set: req.body},(err)=>{
            if (!err) {
                res.status(200).send({message: 'Autor atualizado com sucesso'})
            }else{
                sendStatus(500).send({message: `${err.message}`})
            }
        })

    }

    static listarAutoresPorId = (req, res) =>{
        const id = req.params.id
        
        autores.findById(id, (err,autores)=>{
            if (!err) {
                res.status(200).json(autores)
            }else{
                sendStatus(500).send({message: `${err.message} - achou nao`})
            }
        })
    }

    static excluirAutor = (req,res)=>{
        const id = req.params.id;

        autores.findByIdAndDelete(id, (err)=>{
            if (!err) {
                res.status(200).send({message: 'Autor excluido com sucesso'})
            }else{
                sendStatus(500).send({message: `${err.message}`})
            }
        })

    }


}

export default AutorController;