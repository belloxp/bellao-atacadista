const { DataTypes } = require('sequelize')
const db = require('../db/db')

const Compra = db.define('compra', {
    idCompra: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    idUsuario: {                       
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'usuarios',
            key: 'codUsuario'
        }
    },
    idProduto: {                        
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'produtos',
            key: 'codProduto'
        }
    },
    tipoMovimento: {                   
        type: DataTypes.ENUM('ENTRADA', 'SAIDA'),
        allowNull: false
    },
    qntdMovimentada: {                 
        type: DataTypes.INTEGER,
        allowNull: false
    },
    precoUnit: {                     
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    desconto: {             
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    },
    precoFinal: {            
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    formaPagamento: {
        type: DataTypes.ENUM('DEBITO', 'CREDITO', 'DINHEIRO'),
        allowNull: false
    },
    statusPagamento: {
        type: DataTypes.ENUM('PAGA', 'PENDENTE'),
        allowNull: false
    },
    dataCompra: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'compras'
})

module.exports = Compra
