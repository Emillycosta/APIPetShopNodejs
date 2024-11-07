const ServiceCliente = require ('../services/cliente')
class ControllerCliente{
    async GetCliente(req,res){
        try{
            const cliente= await ServiceCliente.GetCliente()
            res.send({msg: cliente})
        } catch (error){
            res.status(500).send({msg:error.message})
        }
    }
    async CreateCliente(req,res){
        try{
            const{name, number, id}=req.body
            const cliente = await ServiceCliente.CreateCliente(name,number,id)
            res.send({msg:pessoa})
        } catch(error){
            res.status(500).send({msg:error.message})
        }
    }
    async UpdateCliente(req,res){
        try{
            const name = req.body.name
            const number= req.body.number
            const id = req.params.id

            const cliente =await ServiceCliente.UpdateCliente(name,number,id)
            res.send ({msg:cliente})
        } catch (error){res.status(500).send({msg:error.message})}
    }
     async DeleteCliente(req,res){
        try{const id = req.params.id 
            await ServiceCliente.DeletePessoa(id)
            res.status(500).send({msg:error.message})
        }
    }

}module.exports = new ControllerCliente()