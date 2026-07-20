const Usuario = require('../models/Usuario')

const cadastrar = (req, res) => {
    const valores = req.body

    if (!valores.nome || !valores.sobrenome || !valores.idade || !valores.email) {
        return res.status(400).json({ message: 'Os campos nome, sobrenome, idade e email são obrigatórios!' })
    }

    Usuario.create({
        nome: valores.nome,
        sobrenome: valores.sobrenome,
        idade: valores.idade,
        email: valores.email,
        telefone: valores.telefone,
        endereco: valores.endereco,
        cidade: valores.cidade,
        estado: valores.estado
    })
        .then((usuario) => {
            res.status(201).json(usuario)
        })
        .catch((err) => {
            console.error('Erro ao cadastrar o usuário:', err)
            res.status(500).json({ message: 'Erro ao cadastrar o usuário no banco de dados' })
        })
}

const listar = (req, res) => {
    Usuario.findAll()
        .then((usuarios) => {
            res.status(200).json(usuarios)
        })
        .catch((err) => {
            console.error('Erro ao listar os usuários:', err)
            res.status(500).json({ message: 'Erro ao listar os usuários do banco de dados' })
        })
}

const consultarPorId = async (req, res) => {
    const id = req.params.id

    try {
        const usuario = await Usuario.findByPk(id)
        if (!usuario) {
            return res.status(404).json({ message: 'Usuário não encontrado!' })
        }
        res.status(200).json(usuario)
    } catch (err) {
        console.error('Erro ao consultar o usuário:', err)
        res.status(500).json({ message: 'Erro ao consultar o usuário no banco de dados' })
    }
}

const atualizar = async (req, res) => {
    const id = req.params.id
    const valores = req.body

    try {

        const usuario = await Usuario.findByPk(id)
        if (!usuario) {
            return res.status(404).json({ message: 'Usuário não encontrado!' })
        }

        await usuario.update({
            nome: valores.nome || usuario.nome,
            sobrenome: valores.sobrenome || usuario.sobrenome,
            idade: valores.idade || usuario.idade,
            email: valores.email || usuario.email,
            telefone: valores.telefone || usuario.telefone,
            endereco: valores.endereco || usuario.endereco,
            cidade: valores.cidade || usuario.cidade,
            estado: valores.estado || usuario.estado
        })

        res.status(200).json(usuario)
    } catch (err) {
        console.error('Erro ao atualizar o usuário:', err)
        res.status(500).json({ message: 'Erro ao atualizar o usuário no banco de dados' })
    }
}

const apagar = async (req, res) => {
    const id = req.params.id

    try {

        const usuario = await Usuario.findByPk(id)
        if (!usuario) {
            return res.status(404).json({ message: 'Usuário não encontrado!' })
        }

        await usuario.destroy()

        res.status(200).json({ message: `Usuário de código ${id} apagado com sucesso!` })
    } catch (err) {
        console.error('Erro ao apagar o usuário:', err)
        res.status(500).json({ message: 'Erro ao apagar o usuário no banco de dados' })
    }
}

const cargaLote = (req, res) => {
    const listaUsuarios = req.body

    if (!listaUsuarios || listaUsuarios.length === 0) {
        return res.status(400).json({ message: 'Nenhum dado válido foi enviado para a carga em lote de usuários!' })
    }

    const usuariosMapeados = []

    for (let i = 0; i < listaUsuarios.length; i++) {
        const item = listaUsuarios[i]

        usuariosMapeados.push({
            nome: item.nome || item.firstName,
            sobrenome: item.sobrenome || item.lastName,
            idade: item.idade || item.age,
            email: item.email,
            telefone: item.telefone || item.phone,
            endereco: item.endereco || (item.address ? item.address.address : ''),
            cidade: item.cidade || (item.address ? item.address.city : ''),
            estado: item.estado || (item.address ? item.address.state : '')
        })
    }

    Usuario.bulkCreate(usuariosMapeados)
        .then(() => {
            res.status(201).json({ message: 'Carga em lote de usuários realizada com sucesso no banco!' })
        })
        .catch((err) => {
            console.error('Erro no bulkCreate de usuários:', err)
            res.status(500).json({ message: 'Erro ao salvar os usuários em lote no banco de dados' })
        })
}

const cargaAPI = async (req, res) => {
    try {

        const respostaAPI = await fetch('https://dummyjson.com/users')
        const dadosExternos = await respostaAPI.json()
        const listaUsuarios = dadosExternos.users

        const usuariosMapeados = []

        for (let i = 0; i < listaUsuarios.length; i++) {
            const item = listaUsuarios[i]

            usuariosMapeados.push({
                nome: item.firstName,
                sobrenome: item.lastName,
                idade: item.age,
                email: item.email,
                telefone: item.phone,
                endereco: item.address ? item.address.address : '',
                cidade: item.address ? item.address.city : '',
                estado: item.address ? item.address.state : ''
            })
        }

        await Usuario.bulkCreate(usuariosMapeados)

        res.status(201).json({ message: `Carga em lote realizada com sucesso! ${usuariosMapeados.length} usuários importados da API externa.` })
    } catch (err) {
        console.error('Erro na carga em lote via API externa de usuários:', err)
        res.status(500).json({ message: 'Erro ao importar os usuários da API externa para o banco de dados' })
    }
}

module.exports = { cadastrar, listar, consultarPorId, atualizar, apagar, cargaLote, cargaAPI }
