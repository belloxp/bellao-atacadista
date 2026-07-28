let resposta = document.getElementById('resposta')
let btn_cadastrar_manual = document.getElementById('btn_cadastrar_manual')
let btn_carga_lote = document.getElementById('btn_carga_lote')

btn_cadastrar_manual.addEventListener('click', (e) => {
    e.preventDefault()

    const produto = {
        nome: document.getElementById('nome').value,
        descricao: document.getElementById('descricao').value,
        categoria: document.getElementById('categoria').value,
        preco: parseFloat(document.getElementById('preco').value),
        desconto: parseFloat(document.getElementById('desconto').value) || 0,
        qtdeEstoque: parseInt(document.getElementById('qtdeEstoque').value),
        marca: document.getElementById('marca').value,
        imagem: document.getElementById('imagem').value
    }

    if (!produto.nome || !produto.categoria || !produto.preco || isNaN(produto.qtdeEstoque)) {
        resposta.innerHTML = '<p style="color: #ffaa00;">Preencha os campos obrigatórios: Nome, Categoria, Preço e Quantidade em Estoque!</p>'
        return
    }

    fetch('http://localhost:3000/produtos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(produto)
    })
    .then(res => res.json())
    .then(dados => {
        if (dados.codProduto) {
            resposta.innerHTML = `<p style="color: lightgreen;">Produto cadastrado com sucesso! Código gerado: ${dados.codProduto}</p>`
            document.getElementById('form_manual').reset()
        } else {
            resposta.innerHTML = `<p style="color: #ffaa00;">${dados.message}</p>`
        }
    })
    .catch(err => {
        console.error('Erro ao cadastrar o produto:', err)
        resposta.innerHTML = '<p style="color: red;">Falha ao cadastrar o produto no servidor local.</p>'
    })
})

btn_carga_lote.addEventListener('click', (e) => {
    e.preventDefault()
    resposta.innerHTML = '<p style="color: yellow;">Buscando catálogos de produtos na API DummyJSON...</p>'

    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(dadosExternos => {
        resposta.innerHTML = '<p style="color: cyan;">Dados recebidos com sucesso! Transmitindo lote para o back-end...</p>'

        return fetch('http://localhost:3000/produtos/carga-lote', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosExternos.products)
        })
    })
    .then(res => res.json())
    .then(dados => {
        resposta.innerHTML = `<p style="color: lightgreen;">${dados.message || 'Carga estrutural de produtos realizada com sucesso!'}</p>`
    })
    .catch(err => {
        console.error('Erro na carga em lote de produtos:', err)
        resposta.innerHTML = '<p style="color: red;">Falha ao processar os dados da carga de produtos em lote.</p>'
    })
})
