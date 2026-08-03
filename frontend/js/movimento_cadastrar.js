let resposta = document.getElementById('resposta')
let btn_registrar = document.getElementById('btn_registrar')
let select_usuario = document.getElementById('idUsuario')
let select_produto = document.getElementById('idProduto')

fetch('/usuarios')
.then(res => res.json())
.then(dados => {
    let opcoes = '<option value="">Selecione o usuário...</option>'

    for (let i = 0; i < dados.length; i++) {
        opcoes += `<option value="${dados[i].codUsuario}">${dados[i].codUsuario} - ${dados[i].nome} ${dados[i].sobrenome}</option>`
    }

    select_usuario.innerHTML = opcoes
})
.catch(err => {
    console.error('Erro ao carregar os usuários:', err)
    select_usuario.innerHTML = '<option value="">Erro ao carregar usuários</option>'
})

fetch('/produtos')
.then(res => res.json())
.then(dados => {
    let opcoes = '<option value="">Selecione o produto...</option>'

    for (let i = 0; i < dados.length; i++) {
        opcoes += `<option value="${dados[i].codProduto}">${dados[i].codProduto} - ${dados[i].nome} (Estoque: ${dados[i].qtdeEstoque})</option>`
    }

    select_produto.innerHTML = opcoes
})
.catch(err => {
    console.error('Erro ao carregar os produtos:', err)
    select_produto.innerHTML = '<option value="">Erro ao carregar produtos</option>'
})

btn_registrar.addEventListener('click', (e) => {
    e.preventDefault()

    const movimento = {
        idUsuario: parseInt(select_usuario.value),
        idProduto: parseInt(select_produto.value),
        tipoMovimento: document.getElementById('tipoMovimento').value,
        quantidadeMovimentada: parseInt(document.getElementById('quantidadeMovimentada').value),
        descontoAplicado: parseFloat(document.getElementById('descontoAplicado').value) || 0,
        formaPagamento: document.getElementById('formaPagamento').value,
        statusCompra: document.getElementById('statusCompra').value,
        dataCompra: document.getElementById('dataCompra').value
    }

    if (!movimento.idUsuario || !movimento.idProduto || !movimento.tipoMovimento ||
        !movimento.quantidadeMovimentada || !movimento.formaPagamento ||
        !movimento.statusCompra || !movimento.dataCompra) {
        resposta.innerHTML = '<p style="color: #ffaa00;">Todos os campos obrigatórios devem ser preenchidos!</p>'
        return
    }

    fetch('/compra', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(movimento)
    })
    .then(res => res.json())
    .then(dados => {
        if (dados.codCompra) {
            resposta.innerHTML = `<p style="color: lightgreen;">Movimentação de ${dados.tipoMovimento} registrada com sucesso! Código: ${dados.codCompra} | Preço Final: R$ ${parseFloat(dados.precoFinal).toFixed(2)}</p>`
            document.getElementById('form_movimento').reset()
        } else {
            resposta.innerHTML = `<p style="color: #ffaa00;">${dados.message}</p>`
        }
    })
    .catch(err => {
        console.error('Erro ao registrar a movimentação:', err)
        resposta.innerHTML = '<p style="color: red;">Erro ao registrar a movimentação no servidor local.</p>'
    })
})
