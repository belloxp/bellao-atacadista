-- Criação do banco de dados do Sistema de Compras Interno
CREATE DATABASE IF NOT EXISTS db_compras;
USE db_compras;

-- As tabelas base (usuarios, produtos, compras) são criadas pelo Sequelize
-- executando: node sync.js
-- As Views (vw_produtos_criticos, vw_volume_compras) são criadas
-- executando: node criarViews.js
