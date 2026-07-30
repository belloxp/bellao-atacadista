let resposta = document.getElementById('resposta')
let gerar_graficos = document.getElementById('gerar_graficos')
let graficoEstoque = null
let graficoVolume = null

const gerarGraficoEstoque = () => {
    fetch('http://localhost:3000/relatorio/produtos-criticos')
    .then(res => res.json())
    .then(dados => {
        console.log("=========================================")
        console.log("DADOS DO GRÁFICO DE ESTOQUE FÍSICO ATUAL:")
        console.log(dados)
        console.log("=========================================")

        if (dados.length === 0) {
            resposta.innerHTML = 'Nenhum produto crítico (estoque < 10) detectado para gerar o gráfico!'
            if (graficoEstoque !== null) graficoEstoque.destroy()
            return
        }

        let produtos = []
        let estoques = []

        for (let i = 0; i < dados.length; i++) {
            produtos.push(dados[i].nome || "Produto Sem Nome")
            estoques.push(parseInt(dados[i].quantidade_atual || 0))
        }

        if (graficoEstoque !== null) {
            graficoEstoque.destroy()
        }

        let ctx = document.getElementById('graf_estoque').getContext('2d')

        const data = {
            labels: produtos,
            datasets: [{
                label: 'Quantidade em Estoque',
                data: estoques,
                backgroundColor: 'rgba(56, 189, 248, 0.7)',
                borderColor: '#38bdf8',
                borderWidth: 2,
                borderRadius: 8
            }]
        }

        const config = {
            type: 'bar',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: true },
                    title: {
                        display: true,
                        text: 'Estoque Físico Crítico Atual (< 10 unidades)'
                    },
                    datalabels: {
                        display: true,
                        align: 'top',
                        color: 'white',
                        font: { weight: 'bold' }
                    }
                },
                scales: {
                    x: {
                        display: true,
                        title: { display: true, text: 'Produto' }
                    },
                    y: {
                        display: true,
                        title: { display: true, text: 'Quantidade em Depósito' },
                        suggestedMax: 10
                    }
                }
            },
            plugins: [ChartDataLabels]
        }

        graficoEstoque = new Chart(ctx, config)
    })
    .catch(err => {
        console.error('Erro ao buscar dados de criticidade:', err)
        resposta.innerHTML = 'Erro ao carregar dados do endpoint de criticidade.'
    })
}

const gerarGraficoVolume = () => {
    fetch('http://localhost:3000/relatorio/volume-compras')
    .then(res => res.json())
    .then(dados => {
        console.log("=========================================")
        console.log("DADOS DO GRÁFICO DE VOLUME FINANCEIRO:")
        console.log(dados)
        console.log("=========================================")

        if (dados.length === 0) {
            resposta.innerHTML = 'Nenhum dado de compras encontrado para processar o gráfico de volume.'
            if (graficoVolume !== null) graficoVolume.destroy()
            return
        }

        dados.sort((a, b) => {
            let valorA = parseFloat(a.valor_financeiro_movimentado || 0)
            let valorB = parseFloat(b.valor_financeiro_movimentado || 0)
            return valorB - valorA
        })

        let produtos = []
        let valores = []

        let limite = dados.length > 5 ? 5 : dados.length
        for (let i = 0; i < limite; i++) {
            produtos.push(dados[i].nome || `Item ${i+1}`)
            valores.push(parseFloat(dados[i].valor_financeiro_movimentado || 0))
        }

        if (graficoVolume !== null) {
            graficoVolume.destroy()
        }

        let ctx = document.getElementById('graf_volume').getContext('2d')

        const data = {
            labels: produtos,
            datasets: [{
                label: 'Volume Financeiro (R$)',
                data: valores,
                backgroundColor: 'rgba(125, 255, 165, 0.6)',
                borderColor: '#7dffa5',
                borderWidth: 2,
                borderRadius: 8
            }]
        }

        const config = {
            type: 'bar',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                indexAxis: 'y',
                plugins: {
                    legend: { display: true },
                    title: {
                        display: true,
                        text: 'Top 5 - Volume Financeiro de Compras por Mercadoria'
                    },
                    datalabels: {
                        display: true,
                        align: 'right',
                        color: 'white',
                        font: { weight: 'bold' }
                    }
                },
                scales: {
                    x: {
                        display: true,
                        title: { display: true, text: 'Valor Financeiro Movimentado (R$)' }
                    },
                    y: {
                        display: true,
                        title: { display: true, text: 'Produto' }
                    }
                }
            },
            plugins: [ChartDataLabels]
        }

        graficoVolume = new Chart(ctx, config)
    })
    .catch(err => {
        console.error('Erro ao buscar dados do relatório gráfico:', err)
        resposta.innerHTML = 'Erro ao carregar dados do endpoint do banco.'
    })
}

gerar_graficos.addEventListener('click', () => {

    Chart.defaults.color = '#fff'
    Chart.defaults.font.size = 16
    Chart.defaults.font.family = 'sans-serif'
    Chart.defaults.font.weight = 'bold'

    resposta.innerHTML = 'Sucesso! Gráficos gerados com os dados consolidados das Views.'
    gerarGraficoEstoque()
    gerarGraficoVolume()
})
