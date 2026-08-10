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
-- Table structure for table `produtos`
--

DROP TABLE IF EXISTS `produtos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produtos` (
  `codProduto` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `descricao` text,
  `categoria` varchar(50) NOT NULL,
  `preco` decimal(10,2) NOT NULL,
  `desconto` decimal(5,2) DEFAULT NULL,
  `qtdeEstoque` int NOT NULL,
  `marca` varchar(50) DEFAULT NULL,
  `imagem` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`codProduto`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos`
--

LOCK TABLES `produtos` WRITE;
/*!40000 ALTER TABLE `produtos` DISABLE KEYS */;
INSERT INTO `produtos` VALUES (1,'Essence Mascara Lash Princess','The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.','beauty',9.99,10.48,96,'Essence','https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp'),(2,'Eyeshadow Palette with Mirror','The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it\'s convenient for on-the-go makeup application.','beauty',19.99,18.19,44,'Glamour Beauty','https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp'),(3,'Powder Canister','The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.','beauty',14.99,9.84,86,'Velvet Touch','https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp'),(4,'Red Lipstick','The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.','beauty',12.99,12.16,91,'Chic Cosmetics','https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp'),(5,'Red Nail Polish','The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.','beauty',8.99,11.44,76,'Nail Couture','https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/thumbnail.webp'),(6,'Calvin Klein CK One','CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It\'s a versatile fragrance suitable for everyday wear.','fragrances',49.99,1.89,29,'Calvin Klein','https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp'),(7,'Chanel Coco Noir Eau De','Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.','fragrances',129.99,16.51,55,'Chanel','https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/thumbnail.webp'),(8,'Dior J\'adore','J\'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.','fragrances',89.99,14.72,98,'Dior','https://cdn.dummyjson.com/product-images/fragrances/dior-j\'adore/thumbnail.webp'),(9,'Dolce Shine Eau de','Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It\'s a joyful and youthful scent.','fragrances',69.99,0.62,1,'Dolce & Gabbana','https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/thumbnail.webp'),(10,'Gucci Bloom Eau de','Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It\'s a modern and romantic scent.','fragrances',79.99,14.39,91,'Gucci','https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/thumbnail.webp'),(11,'Annibale Colombo Bed','The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.','furniture',1899.99,8.57,85,'Annibale Colombo','https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/thumbnail.webp'),(12,'Annibale Colombo Sofa','The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.','furniture',2499.99,14.40,60,'Annibale Colombo','https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/thumbnail.webp'),(13,'Bedside Table African Cherry','The Bedside Table in African Cherry is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance.','furniture',299.99,19.09,64,'Furniture Co.','https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/thumbnail.webp'),(14,'Knoll Saarinen Executive Conference Chair','The Knoll Saarinen Executive Conference Chair is a modern and ergonomic chair, perfect for your office or conference room with its timeless design.','furniture',499.99,2.01,26,'Knoll','https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/thumbnail.webp'),(15,'Wooden Bathroom Sink With Mirror','The Wooden Bathroom Sink with Mirror is a unique and stylish addition to your bathroom, featuring a wooden sink countertop and a matching mirror.','furniture',799.99,8.80,7,'Bath Trends','https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/thumbnail.webp'),(16,'Apple','Fresh and crisp apples, perfect for snacking or incorporating into various recipes.','groceries',1.99,12.62,8,NULL,'https://cdn.dummyjson.com/product-images/groceries/apple/thumbnail.webp'),(17,'Beef Steak','High-quality beef steak, great for grilling or cooking to your preferred level of doneness.','groceries',12.99,9.61,86,NULL,'https://cdn.dummyjson.com/product-images/groceries/beef-steak/thumbnail.webp'),(18,'Cat Food','Nutritious cat food formulated to meet the dietary needs of your feline friend.','groceries',8.99,9.58,46,NULL,'https://cdn.dummyjson.com/product-images/groceries/cat-food/thumbnail.webp'),(19,'Chicken Meat','Fresh and tender chicken meat, suitable for various culinary preparations.','groceries',9.99,13.70,97,NULL,'https://cdn.dummyjson.com/product-images/groceries/chicken-meat/thumbnail.webp'),(20,'Cooking Oil','Versatile cooking oil suitable for frying, sautéing, and various culinary applications.','groceries',4.99,9.33,10,NULL,'https://cdn.dummyjson.com/product-images/groceries/cooking-oil/thumbnail.webp'),(21,'Cucumber','Crisp and hydrating cucumbers, ideal for salads, snacks, or as a refreshing side.','groceries',1.49,0.16,84,NULL,'https://cdn.dummyjson.com/product-images/groceries/cucumber/thumbnail.webp'),(22,'Dog Food','Specially formulated dog food designed to provide essential nutrients for your canine companion.','groceries',10.99,10.27,71,NULL,'https://cdn.dummyjson.com/product-images/groceries/dog-food/thumbnail.webp'),(23,'Eggs','Fresh eggs, a versatile ingredient for baking, cooking, or breakfast.','groceries',2.99,11.05,9,NULL,'https://cdn.dummyjson.com/product-images/groceries/eggs/thumbnail.webp'),(24,'Fish Steak','Quality fish steak, suitable for grilling, baking, or pan-searing.','groceries',14.99,4.23,74,NULL,'https://cdn.dummyjson.com/product-images/groceries/fish-steak/thumbnail.webp'),(25,'Green Bell Pepper','Fresh and vibrant green bell pepper, perfect for adding color and flavor to your dishes.','groceries',1.29,0.16,33,NULL,'https://cdn.dummyjson.com/product-images/groceries/green-bell-pepper/thumbnail.webp'),(26,'Green Chili Pepper','Spicy green chili pepper, ideal for adding heat to your favorite recipes.','groceries',0.99,1.00,3,NULL,'https://cdn.dummyjson.com/product-images/groceries/green-chili-pepper/thumbnail.webp'),(27,'Honey Jar','Pure and natural honey in a convenient jar, perfect for sweetening beverages or drizzling over food.','groceries',6.99,14.40,34,NULL,'https://cdn.dummyjson.com/product-images/groceries/honey-jar/thumbnail.webp'),(28,'Ice Cream','Creamy and delicious ice cream, available in various flavors for a delightful treat.','groceries',5.49,8.69,27,NULL,'https://cdn.dummyjson.com/product-images/groceries/ice-cream/thumbnail.webp'),(29,'Juice','Refreshing fruit juice, packed with vitamins and great for staying hydrated.','groceries',3.99,12.06,50,NULL,'https://cdn.dummyjson.com/product-images/groceries/juice/thumbnail.webp'),(30,'Kiwi','Nutrient-rich kiwi, perfect for snacking or adding a tropical twist to your dishes.','groceries',2.49,15.22,99,NULL,'https://cdn.dummyjson.com/product-images/groceries/kiwi/thumbnail.webp');
/*!40000 ALTER TABLE `produtos` ENABLE KEYS */;
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
