const database = require('../config/database')

class ModelUsuario {
    constructor() {
        this.model = database.db.define('usuarios', {
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
module.exports = new ModelUsuario().model