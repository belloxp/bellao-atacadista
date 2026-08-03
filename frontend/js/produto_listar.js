let resposta = document.getElementById('resposta')
let btn_listar = document.getElementById('btn_listar')
let container_tabela = document.getElementById('container_tabela')

btn_listar.addEventListener('click', () => {
    fetch('/produtos')
    .then(res => res.json())
    .then(dados => {
        console.log("=========================================")
        console.log("PRODUTOS RECEBIDOS DO BACK-END:")
        console.log(dados)
        console.log("=========================================")

        if (dados.length === 0) {
            resposta.innerHTML = 'Nenhum produto cadastrado no banco de dados!'
            container_tabela.innerHTML = ''
            return
        }

        resposta.innerHTML = `Sucesso! ${dados.length} produtos encontrados no catálogo.`

        let tabela = `
            <table>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Categoria</th>
                        <th>Marca</th>
                        <th>Preço (R$)</th>
                        <th>Desconto (%)</th>
                        <th>Estoque</th>
                    </tr>
                </thead>
                <tbody>
        `

        for (let i = 0; i < dados.length; i++) {
            tabela += `
                <tr>
                    <td>${dados[i].codProduto}</td>
                    <td>${dados[i].nome}</td>
                    <td>${dados[i].categoria}</td>
                    <td>${dados[i].marca || '-'}</td>
                    <td>R$ ${parseFloat(dados[i].preco).toFixed(2)}</td>
                    <td>${parseFloat(dados[i].desconto || 0).toFixed(2)}%</td>
                    <td>${dados[i].qtdeEstoque}</td>
                </tr>
            `
        }

        tabela += '</tbody></table>'
        container_tabela.innerHTML = tabela
    })
    .catch(err => {
        console.error('Erro ao listar os produtos:', err)
        resposta.innerHTML = 'Erro ao carregar os produtos do servidor local.'
    })
})
