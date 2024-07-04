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
-- Database: `reactcrud`
--

-- --------------------------------------------------------

--
-- Table structure for table `usertable`
--

DROP TABLE IF EXISTS `usertable`;
CREATE TABLE IF NOT EXISTS `usertable` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fname` varchar(100) NOT NULL,
  `lname` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `mobile` varchar(20) NOT NULL,
  `department` varchar(255) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `usertable`
--

INSERT INTO `usertable` (`id`, `fname`, `lname`, `email`, `mobile`, `department`, `date`) VALUES
(1, 'tarun', 'patidar', 'tarun@gmail.com', '8965828937', 'php', '2024-06-27 22:39:16'),
(12, 'sfd', 'sdf', 'sfd@sfd.hdff', 'dhffd', 'dfh', '2024-06-28 03:20:24'),
(13, 'dfg', 'gsd', 'sgd@ddd.hhgh', 'sdgds', 'sdg', '2024-06-28 03:20:37'),
(15, 'dfssfsfs fsdfdfsd', 'sdfdsfsdf', 'sssdf@sdsdsd.sdsd', '5454545454', 'sdfsdfsdfd', '2024-06-28 03:58:03'),
(16, 'dsfds', 'ssdfsd', 'sdfsd@dsddsdsd.sdsd', '7894561232', '34343', '2024-06-28 03:58:45'),
(17, 'fdg', 'dfg', 'sdfds@ff.ggg', '7777777777', 'dfg', '2024-06-28 04:04:55');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
