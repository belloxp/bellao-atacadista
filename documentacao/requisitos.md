# Requisitos do Sistema de Compras Interno

## Requisitos Funcionais

RF 01 - Cadastrar usuário
RF 02 - Consultar usuário
RF 03 - Listar usuários
RF 04 - Atualizar usuário
RF 05 - Apagar usuário
RF 06 - Cadastrar produto
RF 07 - Consultar produto
RF 08 - Listar produtos
RF 09 - Atualizar produto
RF 10 - Apagar produto
RF 11 - Realizar a carga inicial em lote de usuários e produtos a partir de APIs externas
RF 12 - Registrar movimentação de estoque (entrada e saída)
RF 13 - Listar o histórico completo de movimentações
RF 14 - Exibir relatórios analíticos em tabela (produtos críticos e volume financeiro por produto)
RF 15 - Exibir relatórios gráficos (estoque físico atual e volume financeiro de compras)
RF 16 - Exibir o dashboard dos produtos na forma de cards

## Requisitos Não-Funcionais

RNF 01 - Desempenho: o sistema é dependente do tempo de resposta do banco de dados e das APIs externas consultadas durante a carga em lote.

RNF 02 - Escalabilidade: o sistema pode ser escalado para mais servidores e hospedado em nuvem.

RNF 03 - Usabilidade: o sistema foi desenvolvido com links de navegação disponíveis e sempre acessíveis no topo da tela, botões e rótulos indicativos (label) dos campos de fácil entendimento pelo usuário, com cores apropriadas.

RNF 04 - Portabilidade: o sistema pode operar em diferentes plataformas em função do uso de navegadores web e foi implementado para computadores de mesa (desktop).

RNF 05 - Confiabilidade: a gravação dos dados no banco de dados usa operações únicas (atômicas) e valida o saldo em estoque antes de concluir uma saída.

RNF 06 - Integridade: o relacionamento entre as tabelas é garantido por chaves estrangeiras, mantendo a integridade referencial entre usuários, produtos e movimentações.

## Regras de Negócio

RN 01 - Na gravação dos dados, os campos obrigatórios devem ser preenchidos.

RN 02 - Os cadastros são únicos (código do cadastro) e controlados através de chave primária com valor incremental.

RN 03 - A carga inicial de usuários e produtos é realizada em lote a partir de APIs externas, com inserção única de todos os registros no banco de dados.

RN 04 - A movimentação de estoque possui dois tipos: ENTRADA, que soma a quantidade ao estoque, e SAÍDA, que subtrai a quantidade do estoque.

RN 05 - Uma movimentação de saída só é gravada se houver saldo suficiente em estoque; caso contrário, a operação é recusada.

RN 06 - O preço final da movimentação é calculado antes da gravação (obrigatório), conforme a fórmula: (quantidade movimentada x preço unitário) menos o desconto percentual aplicado.

RN 07 - O preço unitário da movimentação é obtido do cadastro atual do produto no momento do registro.

RN 08 - O relatório de produtos críticos exibe apenas os produtos cujo estoque atual é inferior a 10 unidades.

RN 09 - O valor financeiro movimentado é calculado multiplicando a quantidade total movimentada pelo preço unitário registrado nas saídas.

RN 10 - O gráfico de volume financeiro exibe estritamente os 5 produtos com o maior valor financeiro movimentado.

RN 11 - As operações de consultar e apagar os dados usam o código (chave primária incremental).

RN 12 - As operações de consultar e listar são exibidas na forma de tabela.

RN 13 - Foi implementado sistema de navegação sempre acessível no topo da tela.

RN 14 - Os campos de tipo de movimento, forma de pagamento e status da compra aceitam apenas valores pré-definidos (ENUM).
