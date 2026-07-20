const VwProdutosCriticos = require('../models/VwProdutosCriticos')
const VwVolumeCompras = require('../models/VwVolumeCompras')

const listarProdutosCriticos = async (req, res) => {
    try {
        const dados = await VwProdutosCriticos.findAll()
        res.status(200).json(dados)
    } catch (err) {
        console.error('Não foi possível listar os Produtos Críticos', err)
        res.status(500).json({ message: 'Não foi possível listar os Produtos Críticos' })
    }
}

const listarVolumeCompras = async (req, res) => {
    try {
        const dados = await VwVolumeCompras.findAll()
        res.status(200).json(dados)
    } catch (err) {
        console.error('Não foi possível listar o Volume de Compras', err)
        res.status(500).json({ message: 'Não foi possível listar o Volume de Compras' })
    }
}

module.exports = { listarProdutosCriticos, listarVolumeCompras }
