let resposta = document.getElementById('resposta')
let btn_buscar = document.getElementById('btn_buscar')
let btn_atualizar = document.getElementById('btn_atualizar')

btn_buscar.addEventListener('click', () => {
    const codigo = document.getElementById('codigo').value

    if (!codigo) {
        resposta.innerHTML = '<p style="color: #ffaa00;">Informe o código do produto para realizar a busca!</p>'
        return
    }

    fetch(`http://localhost:3000/produtos/${codigo}`)
    .then(res => res.json())
    .then(dados => {
        if (!dados.codProduto) {
            resposta.innerHTML = `<p style="color: #ffaa00;">${dados.message}</p>`
            return
        }

        document.getElementById('nome').value = dados.nome
        document.getElementById('descricao').value = dados.descricao || ''
        document.getElementById('categoria').value = dados.categoria
        document.getElementById('preco').value = dados.preco
        document.getElementById('desconto').value = dados.desconto || 0
        document.getElementById('qtdeEstoque').value = dados.qtdeEstoque
        document.getElementById('marca').value = dados.marca || ''
        document.getElementById('imagem').value = dados.imagem || ''

        resposta.innerHTML = '<p style="color: cyan;">Produto localizado! Altere os campos desejados e clique em Atualizar.</p>'
    })
    .catch(err => {
        console.error('Erro ao buscar o produto:', err)
        resposta.innerHTML = '<p style="color: red;">Erro ao buscar o produto no servidor local.</p>'
    })
})

btn_atualizar.addEventListener('click', (e) => {
    e.preventDefault()

    const codigo = document.getElementById('codigo').value

    if (!codigo) {
        resposta.innerHTML = '<p style="color: #ffaa00;">Busque um produto pelo código antes de atualizar!</p>'
        return
    }

    const produto = {
        nome: document.getElementById('nome').value,
        descricao: document.getElementById('descricao').value,
        categoria: document.getElementById('categoria').value,
        preco: parseFloat(document.getElementById('preco').value),
        desconto: parseFloat(document.getElementById('desconto').value),
        qtdeEstoque: parseInt(document.getElementById('qtdeEstoque').value),
        marca: document.getElementById('marca').value,
        imagem: document.getElementById('imagem').value
    }

    fetch(`http://localhost:3000/produtos/${codigo}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(produto)
    })
    .then(res => res.json())
    .then(dados => {
        if (dados.codProduto) {
            resposta.innerHTML = `<p style="color: lightgreen;">Produto de código ${dados.codProduto} atualizado com sucesso!</p>`
        } else {
            resposta.innerHTML = `<p style="color: #ffaa00;">${dados.message}</p>`
        }
    })
    .catch(err => {
        console.error('Erro ao atualizar o produto:', err)
        resposta.innerHTML = '<p style="color: red;">Erro ao atualizar o produto no servidor local.</p>'
    })
})
