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
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `codUsuario` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `sobrenome` varchar(50) NOT NULL,
  `idade` int NOT NULL,
  `email` varchar(100) NOT NULL,
  `telefone` varchar(20) DEFAULT NULL,
  `endereco` varchar(150) DEFAULT NULL,
  `cidade` varchar(50) DEFAULT NULL,
  `estado` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`codUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Emily','Johnson',29,'emily.johnson@x.dummyjson.com','+81 965-431-3024','626 Main Street','Phoenix','Mississippi'),(2,'Michael','Williams',36,'michael.williams@x.dummyjson.com','+49 258-627-6644','385 Fifth Street','Houston','Alabama'),(3,'Sophia','Brown',43,'sophia.brown@x.dummyjson.com','+81 210-652-2785','1642 Ninth Street','Washington','Alabama'),(4,'James','Davis',46,'james.davis@x.dummyjson.com','+49 614-958-9364','238 Jefferson Street','Seattle','Pennsylvania'),(5,'Emma','Miller',31,'emma.miller@x.dummyjson.com','+91 759-776-1614','607 Fourth Street','Jacksonville','Colorado'),(6,'Olivia','Wilson',23,'olivia.wilson@x.dummyjson.com','+91 607-295-6448','547 First Street','Fort Worth','Tennessee'),(7,'Alexander','Jones',39,'alexander.jones@x.dummyjson.com','+61 260-824-4986','664 Maple Street','Indianapolis','Delaware'),(8,'Ava','Taylor',28,'ava.taylor@x.dummyjson.com','+1 458-853-7877','1197 First Street','Fort Worth','Rhode Island'),(9,'Ethan','Martinez',34,'ethan.martinez@x.dummyjson.com','+92 933-608-5081','466 Pine Street','San Antonio','Louisiana'),(10,'Isabella','Anderson',32,'isabella.anderson@x.dummyjson.com','+49 770-658-4885','1964 Oak Street','New York','Utah'),(11,'Liam','Garcia',30,'liam.garcia@x.dummyjson.com','+92 870-217-6201','576 Fifth Street','Denver','South Dakota'),(12,'Mia','Rodriguez',25,'mia.rodriguez@x.dummyjson.com','+49 989-461-8403','1627 Sixth Street','Jacksonville','West Virginia'),(13,'Noah','Hernandez',41,'noah.hernandez@x.dummyjson.com','+49 393-605-6968','1413 Maple Street','New York','North Dakota'),(14,'Charlotte','Lopez',37,'charlotte.lopez@x.dummyjson.com','+44 373-953-5028','208 Second Street','Columbus','Ohio'),(15,'William','Gonzalez',33,'william.gonzalez@x.dummyjson.com','+81 905-252-7319','31 Maple Street','San Jose','Utah'),(16,'Avery','Perez',26,'avery.perez@x.dummyjson.com','+61 731-431-3457','1125 First Street','Columbus','Iowa'),(17,'Evelyn','Sanchez',38,'evelyn.sanchez@x.dummyjson.com','+1 623-880-6871','1170 Lincoln Street','San Diego','Wyoming'),(18,'Logan','Torres',32,'logan.torres@x.dummyjson.com','+81 507-434-8733','907 Seventh Street','Columbus','Arkansas'),(19,'Abigail','Rivera',29,'abigail.rivera@x.dummyjson.com','+91 228-363-7806','996 Oak Street','Chicago','New Mexico'),(20,'Jackson','Evans',35,'jackson.evans@x.dummyjson.com','+44 468-628-6686','1873 Main Street','New York','Arkansas'),(21,'Madison','Collins',27,'madison.collins@x.dummyjson.com','+81 259-957-5711','1892 Lincoln Street','Philadelphia','New Jersey'),(22,'Elijah','Stewart',34,'elijah.stewart@x.dummyjson.com','+44 468-357-7872','1701 Eighth Street','Columbus','Illinois'),(23,'Chloe','Morales',40,'chloe.morales@x.dummyjson.com','+92 468-541-7133','401 Fourth Street','Dallas','New Jersey'),(24,'Mateo','Nguyen',31,'mateo.nguyen@x.dummyjson.com','+1 341-597-6694','1578 Fourth Street','Columbus','Missouri'),(25,'Harper','Kelly',28,'harper.kelly@x.dummyjson.com','+92 518-863-2863','1591 Adams Street','Philadelphia','New York'),(26,'Evelyn','Gonzalez',36,'evelyn.gonzalez@x.dummyjson.com','+61 708-508-4638','1065 Lincoln Street','Dallas','Maine'),(27,'Daniel','Cook',42,'daniel.cook@x.dummyjson.com','+44 254-761-6843','1163 Pine Street','Los Angeles','Nevada'),(28,'Lily','Lee',30,'lily.lee@x.dummyjson.com','+1 808-757-9867','1946 Oak Street','Phoenix','Massachusetts'),(29,'Henry','Hill',39,'henry.hill@x.dummyjson.com','+1 240-833-4680','1837 Maple Street','Indianapolis','Delaware'),(30,'Addison','Wright',33,'addison.wright@x.dummyjson.com','+1 514-384-3300','568 Tenth Street','San Francisco','Montana');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
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
