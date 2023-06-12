
import livros from '../models/Livro.js'


class LivroController{

    static listarLivros = (req,res)=>{
        livros.find()
        .populate('autor')
        .exec((err,livros)=>{
            res.status(200).json(livros)
        })
    }


    static cadastrarLivros = (req,res) =>{
        //primeiramente criar um novo livro
        let livro = new livros(req.body);

        livro.save((err)=>{
            if (err) {
                res.status(500).send({message:`${err.message} - falha ao cadastrar`})
            }
            else{
                res.status(201).send(livro.toJSON())
            }
        })
    }

    static atualizarLivros = (req,res) =>{

        const id = req.params.id;

        livros.findByIdAndUpdate(id, {$set: req.body},(err)=>{
            if (!err) {
                res.status(200).send({message: 'Livro atualizado com sucesso'})
            }else{
                sendStatus(500).send({message: `${err.message}`})
            }
        })

    }

    static listarLivrosPorId = (req, res) =>{
        const id = req.params.id
        
        livros.findById(id) 
        .populate('autor','nome')
        .exec((err,livros)=>{
            if (!err) {
                res.status(200).json(livros)
            }else{
                sendStatus(500).send({message: `${err.message} - achou nao`})
            }
        })
    }

    static excluirLivro = (req,res)=>{
        const id = req.params.id;

        livros.findByIdAndDelete(id, (err)=>{
            if (!err) {
                res.status(200).send({message: 'Livro excluido com sucesso'})
            }else{
                sendStatus(500).send({message: `${err.message}`})
            }
        })

    }

    static listarLivrosPorEditora = (req,res) =>{
        const editora = req.query.editora

        livros.find({'editora':editora}, {}, (err,livros) =>{
            res.status(200).send(livros)
        } )
    }


}

export default LivroController;