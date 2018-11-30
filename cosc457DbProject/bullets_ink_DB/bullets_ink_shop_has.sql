-- MySQL dump 10.13  Distrib 8.0.13, for Win64 (x86_64)
--
-- Host: localhost    Database: bullets_ink
-- ------------------------------------------------------
-- Server version	8.0.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `shop_has`
--

DROP TABLE IF EXISTS `shop_has`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `shop_has` (
  `Equip_id` int(11) NOT NULL,
  `Shop_id` int(11) NOT NULL,
  `Equip_count` int(11) NOT NULL,
  PRIMARY KEY (`Equip_id`,`Shop_id`),
  KEY `Shop_id` (`Shop_id`),
  CONSTRAINT `shop_has_ibfk_1` FOREIGN KEY (`Equip_id`) REFERENCES `inventory` (`equip_id`),
  CONSTRAINT `shop_has_ibfk_2` FOREIGN KEY (`Shop_id`) REFERENCES `location` (`shop_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shop_has`
--

LOCK TABLES `shop_has` WRITE;
/*!40000 ALTER TABLE `shop_has` DISABLE KEYS */;
INSERT INTO `shop_has` VALUES (0,0,10),(0,1,10),(0,2,10),(1,0,20),(1,1,20),(1,2,20),(2,0,10),(2,1,10),(2,2,10),(3,0,20),(3,1,20),(3,2,20),(4,0,100),(4,1,100),(4,2,100),(5,0,60),(5,1,60),(5,2,60),(6,0,60),(6,1,60),(6,2,60),(7,0,60),(7,1,60),(7,2,60),(8,0,60),(8,1,60),(8,2,60),(9,0,60),(9,1,60),(9,2,60);
/*!40000 ALTER TABLE `shop_has` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-11-30 15:26:01
