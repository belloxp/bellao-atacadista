const { DataTypes } = require('sequelize')
const db = require('../db/db')

// view "vw_produtos_criticos" 
const VwProdutosCriticos = db.define('VwProdutosCriticos', {
    codigo_produto: {                  
        type: DataTypes.INTEGER,
        primaryKey: true              
    },
    nome: {                             
        type: DataTypes.STRING(120)
    },
    categoria: {
        type: DataTypes.STRING(60)
    },
    quantidade_atual: {                 
        type: DataTypes.INTEGER
    }
}, {
    timestamps: false,
    tableName: 'vw_produtos_criticos'
})

module.exports = VwProdutosCriticos
