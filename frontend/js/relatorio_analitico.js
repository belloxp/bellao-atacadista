let resposta = document.getElementById('resposta')
let gerar_relatorios = document.getElementById('gerar_relatorios')
let container_criticos = document.getElementById('container_criticos')
let container_volume = document.getElementById('container_volume')

const gerarRelatorioCriticos = () => {
    fetch('http://localhost:3000/relatorio/produtos-criticos')
    .then(res => res.json())
    .then(dados => {
        console.log("=========================================")
        console.log("DADOS DO RELATÓRIO DE PRODUTOS CRÍTICOS:")
        console.log(dados)
        console.log("=========================================")

        if (dados.length === 0) {
            container_criticos.innerHTML = '<p class="resposta">Nenhum produto crítico (estoque < 10) encontrado na View!</p>'
            return
        }

        let tabela = `
            <table>
                <thead>
                    <tr>
                        <th>Código do Produto</th>
                        <th>Nome</th>
                        <th>Categoria</th>
                        <th>Quantidade Atual</th>
                    </tr>
                </thead>
                <tbody>
        `

        for (let i = 0; i < dados.length; i++) {
            tabela += `
                <tr>
                    <td>${dados[i].codigo_produto}</td>
                    <td>${dados[i].nome}</td>
                    <td>${dados[i].categoria}</td>
                    <td style="color: #ff6363; font-weight: bold;">${dados[i].quantidade_atual}</td>
                </tr>
            `
        }

        tabela += '</tbody></table>'
        container_criticos.innerHTML = tabela
    })
    .catch(err => {
        console.error('Erro ao gerar o relatório de produtos críticos:', err)
        container_criticos.innerHTML = '<p class="resposta" style="color: red;">Erro ao carregar os dados da View de criticidade.</p>'
    })
}

const gerarRelatorioVolume = () => {
    fetch('http://localhost:3000/relatorio/volume-compras')
    .then(res => res.json())
    .then(dados => {
        console.log("=========================================")
        console.log("DADOS DO RELATÓRIO DE VOLUME DE COMPRAS:")
        console.log(dados)
        console.log("=========================================")

        if (dados.length === 0) {
            container_volume.innerHTML = '<p class="resposta">Nenhuma movimentação de SAÍDA encontrada na View!</p>'
            return
        }

        let tabela = `
            <table>
                <thead>
                    <tr>
                        <th>Nome do Produto</th>
                        <th>Quantidade Total Movimentada</th>
                        <th>Valor Financeiro Movimentado (R$)</th>
                    </tr>
                </thead>
                <tbody>
        `

        for (let i = 0; i < dados.length; i++) {
            tabela += `
                <tr>
                    <td>${dados[i].nome}</td>
                    <td>${dados[i].quantidade_total_movimentada}</td>
                    <td style="color: #7dffa5; font-weight: bold;">R$ ${parseFloat(dados[i].valor_financeiro_movimentado).toFixed(2)}</td>
                </tr>
            `
        }

        tabela += '</tbody></table>'
        container_volume.innerHTML = tabela
    })
    .catch(err => {
        console.error('Erro ao gerar o relatório de volume de compras:', err)
        container_volume.innerHTML = '<p class="resposta" style="color: red;">Erro ao carregar os dados da View de volume.</p>'
    })
}

gerar_relatorios.addEventListener('click', () => {
    resposta.innerHTML = 'Sucesso! Relatórios extraídos diretamente das Views do banco db_compras.'
    gerarRelatorioCriticos()
    gerarRelatorioVolume()
})
