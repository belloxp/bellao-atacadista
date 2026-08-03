const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')

const conn = require('./db/conn')
const produtoController = require('./controller/produto.controller')
const usuarioController = require('./controller/usuario.controller')
const compraController = require('./controller/compra.controller')
const relatVwController = require('./controller/relatVW.controller')

const PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.post('/usuarios/carga-lote', usuarioController.cargaLote)
app.post('/usuarios/carga-api', usuarioController.cargaAPI)
app.post('/usuarios', usuarioController.cadastrar)
app.get('/usuarios', usuarioController.listar)
app.get('/usuarios/:id', usuarioController.consultarPorId)
app.put('/usuarios/:id', usuarioController.atualizar)
app.delete('/usuarios/:id', usuarioController.apagar)

app.post('/produtos/carga-lote', produtoController.cargaLote)
app.post('/produtos/carga-api', produtoController.cargaAPI)
app.post('/produtos', produtoController.cadastrar)
app.get('/produtos', produtoController.listar)
app.get('/produtos/:id', produtoController.consultarPorId)
app.put('/produtos/:id', produtoController.atualizar)
app.delete('/produtos/:id', produtoController.apagar)

app.post('/compra', compraController.cadastrar)
app.get('/compras', compraController.listar)

app.get('/relatorio/produtos-criticos', relatVwController.listarProdutosCriticos)
app.get('/relatorio/volume-compras', relatVwController.listarVolumeCompras)

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Aplicação rodando!!!' })
})

app.use(express.static(path.join(__dirname, '..', 'frontend')))

conn.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`)
        })
    })
    .catch((err) => {
        console.error('Erro de conexão com o banco de dados!', err)
    })
