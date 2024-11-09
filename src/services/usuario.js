const Cliente = require('../controllers/usuario')
const ModelPessoa = require('../models/usuario')

// criando a classe servicePessoa
class ServiceUsuario {
    async GetUsuario() {
        return ModelCliente.findAll()
    }
    async CreateUsuario(name, password, email) {
        if(!name || !password || !email){
            throw new Error("Favor preencher todos os dados!")
        }
        return ModelUsuario.create({ name, password, email })
    }
    async UpdateUsuario(id, name, password, email) {
        if(!id) {
            throw new Error("Favor informar o Id")
        }
        const Usuario= await ModelCliente.findByPk(id)
        if(!usuario) {
            throw new Error("Pessoa não encontrada")
        }
        Usuario.name = name ||Usuario .name
        Usuario .password = password || Usuario.password
        Usuario.email = email || Usuario.email

        Usuario.save()
        return Usuario
       
    }
    async DeleteCliente(id) {
        if(!id) {
            throw new Error("Favor informar o Id")
        }
        const pessoa = await ModelUsuario.findByPk(id)
        if(!usuario) {
            throw new Error("Pessoa não encontrada")
        }
        return usuario.destroy()
        // return ModelPessoa.destroy({ where: { id } })
    }
}
module.exports = new ServiceUsuario()