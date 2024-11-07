const Cliente = require('../controllers/cliente')
const ModelPessoa = require('../models/cliente')

// criando a classe servicePessoa
class ServiceCliente {
    async GetCliente() {
        return ModelCliente.findAll()
    }
    async CreateCliente(name, password, email) {
        if(!name || !password || !email){
            throw new Error("Favor preencher todos os dados!")
        }
        return ModelPessoa.create({ name, password, email })
    }
    async UpdateCliente(id, name, password, email) {
        if(!id) {
            throw new Error("Favor informar o Id")
        }
        const cliente = await ModelCliente.findByPk(id)
        if(!cliente) {
            throw new Error("Pessoa não encontrada")
        }
        cliente.name = name || cliente.name
        cliente.password = password || cliente.password
        cliente.email = email || cliente.email

        cliente.save()
        return Cliente
       
    }
    async DeleteCliente(id) {
        if(!id) {
            throw new Error("Favor informar o Id")
        }
        const pessoa = await ModelPessoa.findByPk(id)
        if(!cliente) {
            throw new Error("Pessoa não encontrada")
        }
        return cliente.destroy()
        // return ModelPessoa.destroy({ where: { id } })
    }
}
module.exports = new ServiceCliente()