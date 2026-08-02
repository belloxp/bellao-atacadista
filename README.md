# Sistema de Compras Interno (Protótipo Piloto de Backoffice)

Avaliação Prática — Programação de Aplicativos — SENAI/SC — Turma 3B

Arquitetura Full-Stack REST: **Node.js + Express + Sequelize + MySQL (db_compras)** no Back-End e **HTML, CSS e JavaScript** no Front-End, com gráficos dinâmicos em **Chart.js**.

## Passo a passo para rodar o projeto

### 1. Criar o banco de dados no MySQL

**Opção A — MySQL instalado na máquina:** execute no MySQL Workbench (ou terminal):
```sql
CREATE DATABASE IF NOT EXISTS db_compras;
```
(O arquivo `documentacao/criar_banco.sql` contém esse script.)

**Opção B — Docker (sem MySQL instalado):** suba um container MySQL 8 já com o banco criado:
```bash
docker run -d --name mysql_db_compras -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=db_compras -p 3306:3306 mysql:8.0
```
Nas próximas vezes basta: `docker start mysql_db_compras`

> Conexão configurada em `backend/db/conn.js`: usuário `root`, senha `root`, host `localhost`, porta `3306`.

### 2. Instalar as dependências do backend
```bash
cd backend
npm install
```

### 3. Sincronizar as tabelas base (usuarios, produtos, compras)
```bash
node sync.js
```

### 4. Criar as Views SQL (vw_produtos_criticos e vw_volume_compras)
```bash
node criarViews.js
```

### 5. Subir o servidor
```bash
node index.js
```
Servidor disponível em `http://localhost:3000`.

### 6. Abrir o frontend
Abra o arquivo `frontend/index.html` no navegador (ou use a extensão Live Server do VS Code).

### 7. Carga inicial em lote (BulkCreate)
- Pelo front: telas **Usuários » Cadastrar** e **Produtos » Cadastrar**, botão "Executar Carga em Lote".
- Pelo REST Client: blocos do PASSO 2 do arquivo `backend/teste.http`.

### 8. Testes de integração (REST Client)
Instale a extensão **REST Client** no VS Code e execute os blocos do arquivo `backend/teste.http`:
saúde do servidor, gatilho da carga em lote, CRUD completo, movimentações com sucesso e com erro por falta de saldo, e relatórios.

## Backup do banco (entregável .sql)
Após popular o banco e realizar as movimentações, gere o backup com:
```bash
mysqldump -u root -p --routines --databases db_compras > db_compras_backup.sql
```
Se estiver usando o Docker (Opção B):
```bash
docker exec mysql_db_compras mysqldump -uroot -proot --routines --databases db_compras > db_compras_backup.sql
```

## Estrutura do projeto
```
backend/
  db/conn.js              -> conexão Sequelize com o db_compras
  models/                 -> Usuario, Produto, Compra, rel (associações) e Views
  controller/             -> usuario, produto, compra e relatVW (Views)
  index.js                -> rotas REST e servidor Express
  sync.js                 -> cria/recria as tabelas base
  criarViews.js           -> cria as Views SQL
  teste.http              -> testes de integração (REST Client)
frontend/
  index.html              -> Tela Inicial (com Navbar geral)
  css/                    -> style.css e style_cad.css
  html/ + js/             -> CRUD de Usuários e Produtos, Movimentação/Vendas,
                             Relatório Analítico, Relatório Gráfico e Dashboard
documentacao/
  requisitos.md           -> requisitos funcionais, não funcionais e regras de negócio
  infraestrutura.md       -> lista de software e hardware
  diagramas.md            -> diagramas UML e DER (Mermaid) para exportar em .png
  criar_banco.sql         -> criação do banco db_compras
```
