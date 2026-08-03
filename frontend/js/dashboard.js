let resposta = document.getElementById('resposta')
let container_cards = document.getElementById('container_cards')

fetch('/produtos')
.then(res => res.json())
.then(dados => {
    console.log("=========================================")
    console.log("PRODUTOS RECEBIDOS PARA O DASHBOARD:")
    console.log(dados)
    console.log("=========================================")

    if (dados.length === 0) {
        resposta.innerHTML = 'Nenhum produto cadastrado! Execute a Carga em Lote na tela de Produtos.'
        return
    }

    resposta.innerHTML = `Exibindo ${dados.length} produtos do catálogo em tempo real.`

    let cards = ''

    for (let i = 0; i < dados.length; i++) {
        const produto = dados[i]

        const classeBadge = produto.qtdeEstoque < 10 ? 'badge_estoque badge_critico' : 'badge_estoque'
        const textoBadge = produto.qtdeEstoque < 10 ? `<i class="bi bi-exclamation-triangle"></i> Estoque Crítico: ${produto.qtdeEstoque}` : `<i class="bi bi-check-circle"></i> Estoque: ${produto.qtdeEstoque}`

        cards += `
            <div class="card">
                <img src="${produto.imagem || 'https://via.placeholder.com/300x180?text=Sem+Imagem'}" alt="${produto.nome}">
                <div class="card_corpo">
                    <span class="card_categoria">${produto.categoria}</span>
                    <h3>${produto.nome}</h3>
                    <p class="card_marca">${produto.marca || 'Sem marca'}</p>
                    <p class="card_preco">R$ ${parseFloat(produto.preco).toFixed(2)}
                        <span class="card_desconto">-${parseFloat(produto.desconto || 0).toFixed(2)}%</span>
                    </p>
                    <span class="${classeBadge}">${textoBadge}</span>
                </div>
            </div>
        `
    }

    container_cards.innerHTML = cards
})
.catch(err => {
    console.error('Erro ao carregar os produtos do dashboard:', err)
    resposta.innerHTML = 'Erro ao carregar o catálogo de produtos do servidor local.'
})
