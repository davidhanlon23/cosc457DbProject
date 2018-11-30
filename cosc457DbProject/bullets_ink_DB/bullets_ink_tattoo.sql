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
-- Table structure for table `tattoo`
--

DROP TABLE IF EXISTS `tattoo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tattoo` (
  `Tat_no` int(11) NOT NULL,
  `Cust_id` int(11) NOT NULL,
  `Color` tinyint(1) DEFAULT NULL,
  `Size` int(11) DEFAULT NULL,
  `Est_time` int(11) DEFAULT NULL,
  `Shop_id` int(11) NOT NULL,
  `Equip_id` int(11) NOT NULL,
  PRIMARY KEY (`Tat_no`),
  KEY `Cust_id` (`Cust_id`),
  KEY `Shop_id` (`Shop_id`),
  KEY `Equip_id` (`Equip_id`),
  CONSTRAINT `tattoo_ibfk_1` FOREIGN KEY (`Cust_id`) REFERENCES `customer` (`cust_id`),
  CONSTRAINT `tattoo_ibfk_2` FOREIGN KEY (`Shop_id`) REFERENCES `location` (`shop_id`),
  CONSTRAINT `tattoo_ibfk_3` FOREIGN KEY (`Equip_id`) REFERENCES `inventory` (`equip_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tattoo`
--

LOCK TABLES `tattoo` WRITE;
/*!40000 ALTER TABLE `tattoo` DISABLE KEYS */;
/*!40000 ALTER TABLE `tattoo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-11-30 15:26:03
