const Produto = require('../models/Produto')

const cadastrar = (req, res) => {
    const valores = req.body

    if (!valores.nome || !valores.categoria || !valores.preco || valores.qtdeEstoque === undefined) {
        return res.status(400).json({ message: 'Os campos nome, categoria, preco e qtdeEstoque são obrigatórios!' })
    }

    Produto.create({
        nome: valores.nome,
        descricao: valores.descricao,
        categoria: valores.categoria,
        preco: valores.preco,
        desconto: valores.desconto,
        qtdeEstoque: valores.qtdeEstoque,
        marca: valores.marca,
        imagem: valores.imagem
    })
        .then((produto) => {
            res.status(201).json(produto)
        })
        .catch((err) => {
            console.error('Erro ao cadastrar o produto:', err)
            res.status(500).json({ message: 'Erro ao cadastrar o produto no banco de dados' })
        })
}

const listar = (req, res) => {
    Produto.findAll()
        .then((produtos) => {
            res.status(200).json(produtos)
        })
        .catch((err) => {
            console.error('Erro ao listar os produtos:', err)
            res.status(500).json({ message: 'Erro ao listar os produtos do banco de dados' })
        })
}

const consultarPorId = async (req, res) => {
    const id = req.params.id

    try {
        const produto = await Produto.findByPk(id)
        if (!produto) {
            return res.status(404).json({ message: 'Produto não encontrado!' })
        }
        res.status(200).json(produto)
    } catch (err) {
        console.error('Erro ao consultar o produto:', err)
        res.status(500).json({ message: 'Erro ao consultar o produto no banco de dados' })
    }
}

const atualizar = async (req, res) => {
    const id = req.params.id
    const valores = req.body

    try {

        const produto = await Produto.findByPk(id)
        if (!produto) {
            return res.status(404).json({ message: 'Produto não encontrado!' })
        }

        await produto.update({
            nome: valores.nome || produto.nome,
            descricao: valores.descricao || produto.descricao,
            categoria: valores.categoria || produto.categoria,
            preco: valores.preco || produto.preco,
            desconto: valores.desconto !== undefined ? valores.desconto : produto.desconto,
            qtdeEstoque: valores.qtdeEstoque !== undefined ? valores.qtdeEstoque : produto.qtdeEstoque,
            marca: valores.marca || produto.marca,
            imagem: valores.imagem || produto.imagem
        })

        res.status(200).json(produto)
    } catch (err) {
        console.error('Erro ao atualizar o produto:', err)
        res.status(500).json({ message: 'Erro ao atualizar o produto no banco de dados' })
    }
}

const apagar = async (req, res) => {
    const id = req.params.id

    try {

        const produto = await Produto.findByPk(id)
        if (!produto) {
            return res.status(404).json({ message: 'Produto não encontrado!' })
        }

        await produto.destroy()

        res.status(200).json({ message: `Produto de código ${id} apagado com sucesso!` })
    } catch (err) {
        console.error('Erro ao apagar o produto:', err)
        res.status(500).json({ message: 'Erro ao apagar o produto no banco de dados' })
    }
}

const cargaLote = (req, res) => {
    const listaProdutos = req.body

    if (!listaProdutos || listaProdutos.length === 0) {
        return res.status(400).json({ message: 'Nenhum dado válido foi enviado para a carga em lote!' })
    }

    const produtosMapeados = []

    for (let i = 0; i < listaProdutos.length; i++) {
        const item = listaProdutos[i]

        produtosMapeados.push({
            nome: item.nome || item.title,
            descricao: item.descricao || item.description,
            categoria: item.categoria || item.category,
            preco: item.preco || item.price,
            desconto: item.desconto || item.discountPercentage,
            qtdeEstoque: item.qtdeEstoque || item.stock,
            marca: item.marca || item.brand,
            imagem: item.imagem || item.thumbnail
        })
    }

    Produto.bulkCreate(produtosMapeados)
        .then(() => {
            res.status(201).json({ message: 'Carga em lote de produtos realizada com sucesso no banco!' })
        })
        .catch((err) => {
            console.error('Erro no bulkCreate de produtos:', err)
            res.status(500).json({ message: 'Erro ao salvar os produtos em lote no banco de dados' })
        })
}

const cargaAPI = async (req, res) => {
    try {

        const respostaAPI = await fetch('https://dummyjson.com/products')
        const dadosExternos = await respostaAPI.json()
        const listaProdutos = dadosExternos.products

        const produtosMapeados = []

        for (let i = 0; i < listaProdutos.length; i++) {
            const item = listaProdutos[i]

            produtosMapeados.push({
                nome: item.title,
                descricao: item.description,
                categoria: item.category,
                preco: item.price,
                desconto: item.discountPercentage,
                qtdeEstoque: item.stock,
                marca: item.brand,
                imagem: item.thumbnail
            })
        }

        await Produto.bulkCreate(produtosMapeados)

        res.status(201).json({ message: `Carga em lote realizada com sucesso! ${produtosMapeados.length} produtos importados da API externa.` })
    } catch (err) {
        console.error('Erro na carga em lote via API externa de produtos:', err)
        res.status(500).json({ message: 'Erro ao importar os produtos da API externa para o banco de dados' })
    }
}

module.exports = { cadastrar, listar, consultarPorId, atualizar, apagar, cargaLote, cargaAPI }
