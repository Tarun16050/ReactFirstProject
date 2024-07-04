-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jul 04, 2024 at 06:29 AM
-- Server version: 8.3.0
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `reactproduct`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
CREATE TABLE IF NOT EXISTS `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `categoryName` varchar(255) NOT NULL,
  `categoryImage` varchar(255) NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `categoryName`, `categoryImage`, `create_at`, `update_at`) VALUES
(1, 'Colors', '1720074461_668640dd748ee_rembo.jpg', '2024-07-04 06:27:41', '2024-07-04 06:27:41'),
(2, 'Electronics ', '1720074478_668640eec52ad_download.jpg', '2024-07-04 06:27:58', '2024-07-04 06:27:58'),
(3, 'Games', '1720074493_668640fd332cb_download_(1).jpg', '2024-07-04 06:28:13', '2024-07-04 06:28:13');

-- --------------------------------------------------------

--
-- Table structure for table `productitem`
--

DROP TABLE IF EXISTS `productitem`;
CREATE TABLE IF NOT EXISTS `productitem` (
  `id` int NOT NULL AUTO_INCREMENT,
  `categoryId` varchar(100) NOT NULL,
  `productName` varchar(200) NOT NULL,
  `productDescription` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `productImage` varchar(255) NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `productitem`
--

INSERT INTO `productitem` (`id`, `categoryId`, `productName`, `productDescription`, `productImage`, `create_at`, `update_at`) VALUES
(1, '1', 'Red', 'this is a Red Color ', '1720074562_668641424a1d7_red.jpg', '2024-07-04 06:29:22', '2024-07-04 06:29:22');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
