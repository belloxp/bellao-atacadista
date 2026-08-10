CREATE DATABASE  IF NOT EXISTS `db_compras` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `db_compras`;
-- MySQL dump 10.13  Distrib 8.0.46, for macos15 (x86_64)
--
-- Host: localhost    Database: db_compras
-- ------------------------------------------------------
-- Server version	8.0.46

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `compras`
--

DROP TABLE IF EXISTS `compras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `compras` (
  `codCompra` int NOT NULL AUTO_INCREMENT,
  `idUsuario` int NOT NULL,
  `idProduto` int NOT NULL,
  `tipoMovimento` enum('ENTRADA','SAIDA') NOT NULL,
  `quantidadeMovimentada` int NOT NULL,
  `precoUnitario` decimal(10,2) NOT NULL,
  `descontoAplicado` decimal(5,2) DEFAULT '0.00',
  `precoFinal` decimal(10,2) NOT NULL,
  `formaPagamento` enum('DEBITO','CREDITO','DINHEIRO') NOT NULL,
  `statusCompra` enum('PAGA','PENDENTE') NOT NULL,
  `dataCompra` date NOT NULL,
  PRIMARY KEY (`codCompra`),
  KEY `idUsuario` (`idUsuario`),
  KEY `idProduto` (`idProduto`),
  CONSTRAINT `compras_ibfk_1` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`codUsuario`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `compras_ibfk_2` FOREIGN KEY (`idProduto`) REFERENCES `produtos` (`codProduto`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compras`
--

LOCK TABLES `compras` WRITE;
/*!40000 ALTER TABLE `compras` DISABLE KEYS */;
INSERT INTO `compras` VALUES (1,1,2,'ENTRADA',10,19.99,0.00,199.90,'DINHEIRO','PAGA','2026-08-06'),(2,2,1,'SAIDA',3,9.99,5.00,28.47,'CREDITO','PAGA','2026-08-08'),(3,1,3,'SAIDA',3,14.99,5.00,42.72,'CREDITO','PAGA','2026-08-08'),(4,3,5,'SAIDA',3,8.99,5.00,25.62,'CREDITO','PAGA','2026-08-08'),(5,2,7,'SAIDA',3,129.99,5.00,370.47,'CREDITO','PAGA','2026-08-08'),(6,1,9,'SAIDA',3,69.99,5.00,199.47,'CREDITO','PAGA','2026-08-08'),(7,3,11,'SAIDA',3,1899.99,5.00,5414.97,'CREDITO','PAGA','2026-08-08');
/*!40000 ALTER TABLE `compras` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-08-09 21:05:13
