const database = require('../config/database')

class ModelCliente {
    constructor() {
        this.model = database.db.define('clientes', {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: database.db.Sequelize.STRING
            },
            number: {
                type: database.db.Sequelize.STRING,
                unique: true
            },
      
        })
    }
}
module.exports = new ModelCliente().model