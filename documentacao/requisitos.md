# Lista de Requisitos do Sistema de Compras Interno

## 1. Requisitos Funcionais (RF)

| Código | Descrição |
|--------|-----------|
| RF01 | O sistema deve permitir o cadastro, listagem, consulta por código, atualização e exclusão de usuários (CRUD completo). |
| RF02 | O sistema deve permitir o cadastro, listagem, consulta por código, atualização e exclusão de produtos (CRUD completo). |
| RF03 | O sistema deve realizar a carga inicial em lote de usuários consumindo a API externa https://dummyjson.com/users via FETCH e inserindo com bulkCreate. |
| RF04 | O sistema deve realizar a carga inicial em lote de produtos consumindo a API externa https://dummyjson.com/products via FETCH e inserindo com bulkCreate. |
| RF05 | O sistema deve registrar movimentações de estoque do tipo ENTRADA e SAIDA, vinculadas a um usuário e a um produto. |
| RF06 | O sistema deve calcular automaticamente o preço final da movimentação (quantidade × preço unitário − desconto percentual). |
| RF07 | O sistema deve atualizar automaticamente o estoque do produto a cada movimentação registrada. |
| RF08 | O sistema deve exibir o histórico completo de movimentações com os dados do usuário e do produto envolvidos. |
| RF09 | O sistema deve exibir o Relatório Analítico de Produtos Críticos em forma de tabela, com dados extraídos da view vw_produtos_criticos. |
| RF10 | O sistema deve exibir o Relatório Analítico de Volume Financeiro Comprado por Produto em forma de tabela, com dados extraídos da view vw_volume_compras. |
| RF11 | O sistema deve exibir o Gráfico de Estoque Físico Atual (barras verticais) com Chart.js, alimentado pela rota conectada à view de produtos críticos. |
| RF12 | O sistema deve exibir o Gráfico de Volume Financeiro de Compras (barras horizontais) com Chart.js, exibindo estritamente os 5 produtos com maior valor movimentado. |
| RF13 | O sistema deve disponibilizar um Dashboard centralizador exibindo os produtos na forma de cards. |
| RF14 | O sistema deve disponibilizar uma barra de navegação (Navbar) sempre acessível no topo, integrando todas as telas. |
| RF15 | O backend deve disponibilizar uma rota de verificação de saúde do servidor (GET /). |

## 2. Requisitos Não Funcionais (RNF)

| Código | Descrição |
|--------|-----------|
| RNF01 | O backend deve ser desenvolvido em Node.js com o framework Express, seguindo o padrão de arquitetura REST. |
| RNF02 | A integração com o banco de dados deve ser realizada através do ORM Sequelize com MySQL. |
| RNF03 | O banco de dados deve se chamar db_compras. |
| RNF04 | O frontend deve ser desenvolvido em HTML, CSS e JavaScript puro, consumindo a API via fetch. |
| RNF05 | Os gráficos devem ser gerados com a biblioteca Chart.js. |
| RNF06 | O backend deve aceitar requisições de origens distintas (CORS habilitado). |
| RNF07 | O código deve ser organizado no padrão MVC (models, controllers e rotas separados). |
| RNF08 | O projeto deve conter o arquivo teste.http na raiz do backend, compatível com a extensão REST Client do VS Code. |
| RNF09 | O código-fonte deve ser versionado no GitHub com no mínimo 5 commits e comentado. |
| RNF10 | As respostas da API devem utilizar o formato JSON e códigos de status HTTP adequados (200, 201, 400, 404, 500). |

## 3. Regras de Negócio (RN)

| Código | Descrição |
|--------|-----------|
| RN01 | A view vw_produtos_criticos deve filtrar e retornar apenas os produtos cujo estoque atual seja inferior a 10 unidades. |
| RN02 | O valor financeiro movimentado da view vw_volume_compras deve ser calculado multiplicando a quantidade total de itens comprados (saídas) pelo preço unitário registrado no momento da compra. |
| RN03 | Uma movimentação de SAIDA só pode ser registrada se houver saldo suficiente em estoque; caso contrário o sistema retorna erro 400. |
| RN04 | Movimentações de ENTRADA somam a quantidade movimentada ao estoque; movimentações de SAIDA subtraem. |
| RN05 | O preço unitário da movimentação é sempre recuperado do cadastro atual do produto no momento do registro. |
| RN06 | O tipo de movimento aceita apenas os valores ENTRADA e SAIDA. |
| RN07 | A forma de pagamento aceita apenas os valores DEBITO, CREDITO e DINHEIRO. |
| RN08 | O status da compra aceita apenas os valores PAGA e PENDENTE. |
| RN09 | O Gráfico 2 (Volume Financeiro) deve exibir estritamente os 5 produtos com o maior valor financeiro movimentado. |
| RN10 | Uma movimentação só pode ser registrada para usuário e produto existentes no banco (erro 404 caso contrário). |
