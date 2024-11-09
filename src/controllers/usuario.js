const ServiceCliente = require ('../services/usuario')
class ControllerUsuario{
    async GetUsuario(req,res){
        try{
            const clientes= await ServiceUsuario.GetUsuario()
            res.send({msg: usuarios})
        } catch (error){
            res.status(500).send({msg:error.message})
        }
    }
    async CreateUsuario(req,res){
        try{
            const{name, number, id}=req.body
            const usuario = await ServiceUsuario.CreateUsuario(name,number,id)
            res.send({msg:pessoa})
        } catch(error){
            res.status(500).send({msg:error.message})
        }
    }
    async UpdateUsuario(req,res){
        try{
            const name = req.body.name
            const number= req.body.number
            const id = req.params.id

            const usuario =await ServiceUsuario.UpdateUsuario(name,number,id)
            res.send ({msg:usuario})
        } catch (error){res.status(500).send({msg:error.message})}
    }
    async DeleteUsuario(req,res){
        try {
            const id = req.params.id
            await ServicePessoa.DeleteUsuario(id)
            res.status(204).send()
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }
}


module.exports = new ControllerUsuario()