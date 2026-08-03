let resposta = document.getElementById('resposta')
let btn_listar = document.getElementById('btn_listar')
let container_tabela = document.getElementById('container_tabela')

btn_listar.addEventListener('click', () => {
    fetch('/compras')
    .then(res => res.json())
    .then(dados => {
        console.log("=========================================")
        console.log("HISTÓRICO DE MOVIMENTAÇÕES RECEBIDO:")
        console.log(dados)
        console.log("=========================================")

        if (dados.length === 0) {
            resposta.innerHTML = 'Nenhuma movimentação registrada no banco de dados!'
            container_tabela.innerHTML = ''
            return
        }

        resposta.innerHTML = `Sucesso! ${dados.length} movimentações encontradas no histórico.`

        let tabela = `
            <table>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Usuário</th>
                        <th>Produto</th>
                        <th>Tipo</th>
                        <th>Qtde</th>
                        <th>Preço Unit. (R$)</th>
                        <th>Desconto (%)</th>
                        <th>Preço Final (R$)</th>
                        <th>Pagamento</th>
                        <th>Status</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
        `

        for (let i = 0; i < dados.length; i++) {
            const usuario = dados[i].usuarioCompra ? `${dados[i].usuarioCompra.nome} ${dados[i].usuarioCompra.sobrenome}` : '-'
            const produto = dados[i].produtoCompra ? dados[i].produtoCompra.nome : '-'
            const corTipo = dados[i].tipoMovimento === 'ENTRADA' ? '#7dffa5' : '#ff6363'

            tabela += `
                <tr>
                    <td>${dados[i].codCompra}</td>
                    <td>${usuario}</td>
                    <td>${produto}</td>
                    <td style="color: ${corTipo}; font-weight: bold;">${dados[i].tipoMovimento}</td>
                    <td>${dados[i].quantidadeMovimentada}</td>
                    <td>R$ ${parseFloat(dados[i].precoUnitario).toFixed(2)}</td>
                    <td>${parseFloat(dados[i].descontoAplicado || 0).toFixed(2)}%</td>
                    <td>R$ ${parseFloat(dados[i].precoFinal).toFixed(2)}</td>
                    <td>${dados[i].formaPagamento}</td>
                    <td>${dados[i].statusCompra}</td>
                    <td>${dados[i].dataCompra}</td>
                </tr>
            `
        }

        tabela += '</tbody></table>'
        container_tabela.innerHTML = tabela
    })
    .catch(err => {
        console.error('Erro ao listar o histórico de movimentações:', err)
        resposta.innerHTML = 'Erro ao carregar o histórico do servidor local.'
    })
})
