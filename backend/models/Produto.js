const { DataTypes } = require('sequelize')
const db = require('../db/db')

//https://dummyjson.com/products
const Produto = db.define('produto', {
    codProduto: {                      
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {                             
        type: DataTypes.STRING(120),
        allowNull: false
    },
    descricao: {                       
        type: DataTypes.TEXT,
        allowNull: true
    },
    categoria: {                        
        type: DataTypes.STRING(60),
        allowNull: false
    },
    preco: {                           
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    desconto: {                         
        type: DataTypes.FLOAT,
        allowNull: true,
        defaultValue: 0
    },
    quantidade: {                      
        type: DataTypes.INTEGER,
        allowNull: false
    },
    marca: {                          
        type: DataTypes.STRING(60),
        allowNull: true
    },
    imagemUrl: {                        
        type: DataTypes.STRING(255),
        allowNull: true
    }
}, {
    timestamps: false,
    tableName: 'produtos'
})

module.exports = Produto
