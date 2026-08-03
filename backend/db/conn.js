const { Sequelize } = require('sequelize')

const db = new Sequelize(
    process.env.MYSQLDATABASE || 'db_compras',
    process.env.MYSQLUSER || 'root',
    process.env.MYSQLPASSWORD || 'root',
    {
        host: process.env.MYSQLHOST || 'localhost',
        dialect: 'mysql',
        port: process.env.MYSQLPORT || 3306
    }
)

module.exports = db
