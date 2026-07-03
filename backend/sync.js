const conn = require('./db/db')
const { Usuario, Produto, Compra } = require('./models/rel')

async function syncDataBase() {
    try {
        await conn.sync({ force: true })
        console.log('Tabelas sincronizadas (usuarios, produtos, compras)')

        //  VIEW 1: Produtos Críticos (estoque < 10) ----------
        const viewProdutosCriticos = `
            CREATE OR REPLACE VIEW vw_produtos_criticos AS
            SELECT
                codProduto AS codigo_produto,
                nome,
                categoria,
                quantidade AS quantidade_atual
            FROM produtos
            WHERE quantidade < 10
            ORDER BY quantidade_atual ASC;
        `
        await conn.query(viewProdutosCriticos)
        console.log('View vw_produtos_criticos criada com sucesso!')

        //  VIEW 2: Volume Financeiro Comprado por Produto (saídas) 
        const viewVolumeCompras = `
            CREATE OR REPLACE VIEW vw_volume_compras AS
            SELECT
                p.nome AS nome,
                SUM(c.qntdMovimentada) AS quantidade_total_movimentada,
                SUM(c.qntdMovimentada * c.precoUnit) AS valor_financeiro_movimentado
            FROM compras c
            INNER JOIN produtos p ON c.idProduto = p.codProduto
            WHERE c.tipoMovimento = 'SAIDA'
            GROUP BY p.codProduto, p.nome
            ORDER BY valor_financeiro_movimentado DESC;
        `
        await conn.query(viewVolumeCompras)
        console.log('View vw_volume_compras criada com sucesso!')
    } catch (err) {
        console.error('Erro ao sincronizar o banco de dados', err)
    } finally {
        await conn.close()
        console.log('Conexão com o banco de dados encerrada.')
    }
}

syncDataBase()
