# Diagramas do Sistema de Compras Interno

Os diagramas abaixo estão em sintaxe **Mermaid**. Para gerar as imagens `.png` exigidas
na entrega, cole cada bloco em https://mermaid.live e exporte como PNG
(ou use o MySQL Workbench para o Diagrama Lógico via Engenharia Reversa).

## 1. Diagrama de Caso de Uso Geral (UML)

```mermaid
flowchart LR
    G((Gestor do Sistema))

    subgraph Sistema de Compras Interno
        UC1([Gerenciar Usuários - CRUD])
        UC2([Gerenciar Produtos - CRUD])
        UC3([Executar Carga em Lote - BulkCreate])
        UC4([Registrar Movimentação ENTRADA/SAIDA])
        UC5([Consultar Histórico de Movimentação])
        UC6([Visualizar Relatório Analítico - Views])
        UC7([Visualizar Relatório Gráfico - Chart.js])
        UC8([Visualizar Dashboard de Produtos])
    end

    API[API Externa DummyJSON]

    G --> UC1
    G --> UC2
    G --> UC3
    G --> UC4
    G --> UC5
    G --> UC6
    G --> UC7
    G --> UC8
    UC3 --> API
```

## 2. Diagrama de Classes (UML)

```mermaid
classDiagram
    class Usuario {
        +int codUsuario
        +string nome
        +string sobrenome
        +int idade
        +string email
        +string telefone
        +string endereco
        +string cidade
        +string estado
        +cadastrar()
        +listar()
        +consultarPorId()
        +atualizar()
        +apagar()
        +cargaLote()
        +cargaAPI()
    }

    class Produto {
        +int codProduto
        +string nome
        +text descricao
        +string categoria
        +decimal preco
        +decimal desconto
        +int qtdeEstoque
        +string marca
        +string imagem
        +cadastrar()
        +listar()
        +consultarPorId()
        +atualizar()
        +apagar()
        +cargaLote()
        +cargaAPI()
    }

    class Compra {
        +int codCompra
        +int idUsuario
        +int idProduto
        +enum tipoMovimento
        +int quantidadeMovimentada
        +decimal precoUnitario
        +decimal descontoAplicado
        +decimal precoFinal
        +enum formaPagamento
        +enum statusCompra
        +date dataCompra
        +cadastrar()
        +listar()
    }

    Usuario "1" --> "0..*" Compra : realiza
    Produto "1" --> "0..*" Compra : movimentado em
```

## 3. Diagrama Lógico do Banco de Dados (DER)

> Para a entrega oficial, gere este diagrama pela Engenharia Reversa do MySQL Workbench
> (Database » Reverse Engineer) após rodar `node sync.js` e `node criarViews.js`.

```mermaid
erDiagram
    USUARIOS {
        int codUsuario PK
        varchar nome
        varchar sobrenome
        int idade
        varchar email
        varchar telefone
        varchar endereco
        varchar cidade
        varchar estado
    }

    PRODUTOS {
        int codProduto PK
        varchar nome
        text descricao
        varchar categoria
        decimal preco
        decimal desconto
        int qtdeEstoque
        varchar marca
        varchar imagem
    }

    COMPRAS {
        int codCompra PK
        int idUsuario FK
        int idProduto FK
        enum tipoMovimento
        int quantidadeMovimentada
        decimal precoUnitario
        decimal descontoAplicado
        decimal precoFinal
        enum formaPagamento
        enum statusCompra
        date dataCompra
    }

    USUARIOS ||--o{ COMPRAS : "realiza"
    PRODUTOS ||--o{ COMPRAS : "é movimentado em"
```
