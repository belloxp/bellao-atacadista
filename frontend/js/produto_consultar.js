let resposta = document.getElementById('resposta')
let btn_consultar = document.getElementById('btn_consultar')
let container_tabela = document.getElementById('container_tabela')

btn_consultar.addEventListener('click', () => {
    const codigo = document.getElementById('codigo').value

    if (!codigo) {
        resposta.innerHTML = '<p style="color: #ffaa00;">Informe o código do produto para realizar a consulta!</p>'
        return
    }

    fetch(`/produtos/${codigo}`)
    .then(res => res.json())
    .then(dados => {
        console.log("=========================================")
        console.log("PRODUTO CONSULTADO:")
        console.log(dados)
        console.log("=========================================")

        if (!dados.codProduto) {
            resposta.innerHTML = `<p style="color: #ffaa00;">${dados.message}</p>`
            container_tabela.innerHTML = ''
            return
        }

        resposta.innerHTML = `<p style="color: lightgreen;">Produto localizado com sucesso!</p>`

        container_tabela.innerHTML = `
            <table>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Categoria</th>
                        <th>Marca</th>
                        <th>Preço (R$)</th>
                        <th>Desconto (%)</th>
                        <th>Estoque</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>${dados.codProduto}</td>
                        <td>${dados.nome}</td>
                        <td>${dados.descricao || '-'}</td>
                        <td>${dados.categoria}</td>
                        <td>${dados.marca || '-'}</td>
                        <td>R$ ${parseFloat(dados.preco).toFixed(2)}</td>
                        <td>${parseFloat(dados.desconto || 0).toFixed(2)}%</td>
                        <td>${dados.qtdeEstoque}</td>
                    </tr>
                </tbody>
            </table>
        `
    })
    .catch(err => {
        console.error('Erro ao consultar o produto:', err)
        resposta.innerHTML = '<p style="color: red;">Erro ao consultar o produto no servidor local.</p>'
    })
})
