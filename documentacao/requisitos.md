# Sistema de Compras Interno — Lista de Requisitos

## Requisitos Funcionais

- **RF01 — Cadastrar usuários:** permitir o cadastro com nome, sobrenome, idade, e-mail, telefone, endereço, cidade e estado.
- **RF02 — Importar usuários:** permitir o cadastro de usuários em lote por meio da API DummyJSON.
- **RF03 — Consultar usuários:** listar todos os usuários cadastrados.
- **RF04 — Buscar usuários:** permitir a busca por código ou nome.
- **RF05 — Editar usuários:** permitir a alteração dos dados de um usuário.
- **RF06 — Excluir usuários:** permitir a exclusão de um usuário pelo código.
- **RF07 — Cadastrar produtos:** registrar nome, descrição, categoria, preço, desconto, quantidade, marca e URL da imagem.
- **RF08 — Importar produtos:** permitir o cadastro de produtos em lote por meio da API DummyJSON.
- **RF09 — Consultar produtos:** listar todos os produtos cadastrados.
- **RF10 — Buscar produtos:** permitir a busca por código ou nome.
- **RF11 — Editar produtos:** permitir a alteração dos dados de um produto.
- **RF12 — Excluir produtos:** permitir a exclusão de um produto pelo código.
- **RF13 — Registrar movimentações:** registrar entradas e saídas de produtos.
- **RF14 — Atualizar estoque:** atualizar automaticamente a quantidade disponível após cada movimentação.
- **RF15 — Listar movimentações:** apresentar todas as compras e movimentações cadastradas.
- **RF16 — Calcular valor final:** calcular automaticamente o valor da movimentação considerando quantidade, preço unitário e desconto.
- **RF17 — Exibir dashboard:** apresentar os produtos cadastrados em cards com imagem, descrição, categoria, marca, preço e estoque.
- **RF18 — Gerar relatório de estoque crítico:** listar produtos com quantidade inferior a 10 unidades.
- **RF19 — Gerar relatório financeiro:** apresentar a quantidade e o valor financeiro das saídas agrupadas por produto.
- **RF20 — Gerar gráficos:** apresentar gráficos de estoque crítico e dos cinco produtos com maior volume financeiro.

## Requisitos Não Funcionais

- **RNF01 – Eficiência**
- **RNF02 – Compatibilidade**
- **RNF03 – Usabilidade**
- **RNF04 – Confiabilidade**
- **RNF05 – Manutenibilidade**

## Regras de Negócio

- **RN01 – Produtos críticos:** um produto deve ser considerado crítico quando possuir estoque atual inferior a 10 unidades.
- **RN02 – View de produtos críticos:** a View vw_produtos_criticos deve retornar somente produtos cujo estoque atual seja menor que 10 unidades.
- **RN03 – Cálculo do volume financeiro:** o valor financeiro movimentado deve ser calculado através da quantidade movimentada multiplicada pelo preço unitário registrado no momento da compra: Valor financeiro = Quantidade Movimentada × Preço Unitário.
- **RN04 – Movimentações consideradas no volume comprado:** o relatório de volume comprado deve considerar as movimentações de saída do estoque.
- **RN05 – View de volume de compras:** a View vw_volume_compras deve apresentar o nome do produto, a quantidade total movimentada e o valor financeiro movimentado.
- **RN06 – Movimentação de entrada:** uma movimentação do tipo ENTRADA deve representar a entrada de unidades de um produto no estoque.
- **RN07 – Movimentação de saída:** uma movimentação do tipo SAIDA deve representar a retirada de unidades de um produto do estoque.
- **RN08 – Saldo insuficiente:** uma operação de saída não deve ser concluída quando não houver saldo suficiente do produto em estoque. O documento exige explicitamente um cenário de teste de erro por falta de saldo.
- **RN09 – Tipos de movimentação permitidos:** o campo Tipo Movimento deve aceitar ENTRADA ou SAIDA.
- **RN10 – Formas de pagamento permitidas:** a forma de pagamento deve ser DEBITO, CREDITO ou DINHEIRO.
- **RN11 – Status da compra:** o status de uma compra deve ser PAGA ou PENDENTE.
- **RN12 – Gráfico de estoque crítico:** o gráfico de Estoque Físico Atual deve apresentar apenas produtos com estoque inferior a 10 unidades.
- **RN13 – Limite do gráfico financeiro:** o gráfico de Volume Financeiro de Compras deve apresentar estritamente os 5 produtos com maior valor financeiro movimentado.
- **RN14 – Ordenação do gráfico financeiro:** para determinar os cinco produtos exibidos, devem ser considerados aqueles com os maiores valores financeiros movimentados.
- **RN15 – Fonte dos dados do gráfico financeiro:** o gráfico de Volume Financeiro de Compras deve utilizar os dados provenientes da View vw_volume_compras.
- **RN16 – Relacionamento da compra com usuário:** cada compra deve estar associada a um usuário através do ID do usuário.
- **RN17 – Relacionamento da compra com produto:** cada compra deve estar associada a um produto através do ID do produto.
- **RN18 – Preço da movimentação:** o preço unitário utilizado nos cálculos deve ser o preço registrado no momento da compra, permitindo manter corretamente o histórico financeiro mesmo que o preço do produto seja alterado posteriormente.
