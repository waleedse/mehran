-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 23, 2020 at 07:10 AM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `chairmanfoam`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_accounts`
--

CREATE TABLE `admin_accounts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admin_accounts`
--

INSERT INTO `admin_accounts` (`id`, `username`, `name`, `password`, `role_id`, `status`, `created_at`, `updated_at`) VALUES
(1, 'superadmin', 'SuperAdmin', '123321', '1', 'Active', '2020-10-17 09:47:58', '2020-10-17 10:29:26');

-- --------------------------------------------------------

--
-- Table structure for table `admin_auth_meta`
--

CREATE TABLE `admin_auth_meta` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `admin_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ip` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `validation` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admin_auth_meta`
--

INSERT INTO `admin_auth_meta` (`id`, `admin_id`, `token`, `ip`, `validation`, `created_at`, `updated_at`) VALUES
(1, '1', '$2y$10$bnhVG81jpK3AQNEnvk8/BupXZwnbpcc2qp5rHqV6qqA7aheaAGSW6', '127.0.0.1', '1602955715', '2020-10-17 12:28:35', '2020-10-17 12:28:35');

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cart_cookie_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `qty` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `varient_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `carts`
--

INSERT INTO `carts` (`id`, `product_id`, `cart_cookie_id`, `qty`, `price`, `varient_id`, `created_at`, `updated_at`) VALUES
(1, '34', '2', '1', '200', '1', '2020-10-12 03:57:37', '2020-10-12 03:57:37'),
(2, '36', '1', '1', '6000', '14', '2020-10-12 04:35:55', '2020-10-12 04:35:55'),
(3, '37', '1', '1', '7000', '15', '2020-10-12 05:08:42', '2020-10-12 05:08:42'),
(4, '36', '1', '1', '6000', '14', '2020-10-12 06:36:08', '2020-10-12 06:36:08'),
(6, '37', '1', '1', '7000', '15', '2020-10-12 07:19:40', '2020-10-12 07:19:40'),
(7, '34', '33e3a3c0-0fa1-11eb-8e8a-fbb68955ed69', '1', '1000', '31', '2020-10-16 06:24:30', '2020-10-16 06:24:30'),
(8, '34', '33e3a3c0-0fa1-11eb-8e8a-fbb68955ed69', '2', '2000', '31', '2020-10-16 06:24:42', '2020-10-16 06:24:42'),
(9, '37', '999cfcc0-0fe2-11eb-b372-69c215d14b59', '1', '7000', '15', '2020-10-16 14:05:48', '2020-10-16 14:05:48');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `created_at`, `updated_at`) VALUES
(9, 'Matresses', '2020-10-11 14:09:12', '2020-10-11 14:09:12'),
(10, 'Healthcare', '2020-10-11 14:08:36', '2020-10-11 14:08:36'),
(11, 'Accessories', '2020-10-11 14:08:52', '2020-10-11 14:08:52');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `name`, `username`, `email`, `password`, `token`, `status`, `created_at`, `updated_at`) VALUES
(1, 'waleed', 'wal', 'w@gmail.com', '123', '$2y$10$In92PYmpTNY5lc2MGylgU.erzFUZ5IF6/NCJYX8DhBv0V6dhkgbVy', 'Active', '2020-10-12 02:21:24', '2020-10-16 06:26:55'),
(7, 'waleed', 'wal', 'wsss@gmail.com', '123', '$2y$10$SGE4PraZEzikxdKOyLMEf.Nfygu0m.xt3ubhV10iOqO2xH/M2pivq', 'Active', '2020-10-12 02:47:48', '2020-10-12 02:47:48'),
(8, 'ww', 'www', 'www@', '123', '$2y$10$FWvDnoc9cuJW8Kyv5pSmRuDjy0C.ay6uoIa450GXmjL8EmB/77ndK', 'Active', '2020-10-12 02:48:26', '2020-10-12 02:48:26'),
(9, 'ww', 'ww', 'www', 'www', '$2y$10$7HAnfcke8jbbYayBaEnOe.KgfGoYhtm4t7ygbouDsWUychK2mkD8a', 'Active', '2020-10-12 02:49:03', '2020-10-12 02:49:03'),
(10, 'aaa', 'aaa', 'aaa', 'aa', '$2y$10$JrGQmw9ulekg22/TK58FL.wd0A7nvYRLflqhbXUUcea2FRWT3k9LC', 'Active', '2020-10-12 02:49:30', '2020-10-12 02:49:30');

-- --------------------------------------------------------

--
-- Table structure for table `distributors`
--

CREATE TABLE `distributors` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `fname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `company` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `credit_limit` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `country` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `city` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gst` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `distributors`
--

INSERT INTO `distributors` (`id`, `fname`, `lname`, `company`, `phone`, `email`, `password`, `credit_limit`, `address`, `country`, `city`, `gst`, `status`, `created_at`, `updated_at`) VALUES
(1, 'SuperAdmin', 'w', 'w', 'w', 'w', '$2y$10$vuBqqvcCog/1vuwVnGIHreL5NmcRaIvEMVlmr1j8UulwOOAdj/vWy', 'w', 'w', 'w', 'w', 'w', '1', '2020-10-19 12:45:28', '2020-10-19 12:45:28'),
(2, 'SuperAdmin', 'w', 'w', 'w', 'w', 'gafSCGyaa4', 'w', 'w', 'w', 'w', 'w', '1', '2020-10-19 12:47:14', '2020-10-19 12:47:14'),
(3, 'SuperAdmin', 'w', 'w', 'w', 'w', 'amOnyEN8NC', 'w', 'w', 'w', 'w', 'w', '1', '2020-10-19 13:00:42', '2020-10-19 13:00:42'),
(8, 'SuperAdmin', 'w', 'w', '031564965414964', 'waleedah.official@gmail.com', '0e4GGB2RLb', 'w', 'w', 'w', 'w', 'w', '1', '2020-10-22 12:56:58', '2020-10-22 12:56:58');

-- --------------------------------------------------------

--
-- Table structure for table `distributors_product_variations`
--

CREATE TABLE `distributors_product_variations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `variation_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `distributor_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `discount` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `distributors_product_variations`
--

INSERT INTO `distributors_product_variations` (`id`, `variation_id`, `distributor_id`, `discount`, `created_at`, `updated_at`) VALUES
(1, '2', '8', 2500, '2020-10-22 12:56:58', '2020-10-22 12:56:58'),
(2, '3', '8', 0, '2020-10-22 12:56:58', '2020-10-22 12:56:58'),
(3, '4', '8', 0, '2020-10-22 12:56:58', '2020-10-22 12:56:58'),
(4, '5', '8', 0, '2020-10-22 12:56:58', '2020-10-22 12:56:58'),
(5, '6', '8', 0, '2020-10-22 12:56:58', '2020-10-22 12:56:58'),
(6, '7', '8', 0, '2020-10-22 12:56:58', '2020-10-22 12:56:58'),
(7, '8', '8', 0, '2020-10-22 12:56:58', '2020-10-22 12:56:58'),
(8, '9', '8', 0, '2020-10-22 12:56:58', '2020-10-22 12:56:58'),
(9, '10', '8', 0, '2020-10-22 12:56:58', '2020-10-22 12:56:58'),
(10, '12', '8', 500, '2020-10-22 12:56:58', '2020-10-22 23:14:30'),
(11, '13', '8', 0, '2020-10-22 12:56:58', '2020-10-22 12:56:58'),
(12, '14', '8', 0, '2020-10-22 12:56:58', '2020-10-22 12:56:58'),
(13, '15', '8', 0, '2020-10-22 12:56:58', '2020-10-22 12:56:58'),
(14, '16', '8', 0, '2020-10-22 12:56:58', '2020-10-22 12:56:58'),
(15, '17', '8', 0, '2020-10-22 12:56:58', '2020-10-22 12:56:58'),
(16, '18', '8', 0, '2020-10-22 12:56:58', '2020-10-22 12:56:58'),
(17, '19', '8', 0, '2020-10-22 12:56:58', '2020-10-22 12:56:58'),
(18, '20', '8', 0, '2020-10-22 12:56:58', '2020-10-22 12:56:58'),
(19, '21', '8', 0, '2020-10-22 12:56:58', '2020-10-22 12:56:58'),
(20, '22', '8', 0, '2020-10-22 12:56:58', '2020-10-22 12:56:58'),
(21, '23', '8', 0, '2020-10-22 12:56:58', '2020-10-22 12:56:58'),
(22, '24', '8', 0, '2020-10-22 12:56:58', '2020-10-22 12:56:58'),
(23, '25', '8', 0, '2020-10-22 12:56:58', '2020-10-22 12:56:58'),
(24, '26', '8', 0, '2020-10-22 12:56:58', '2020-10-22 12:56:58'),
(25, '27', '8', 0, '2020-10-22 12:56:58', '2020-10-22 12:56:58'),
(26, '28', '8', 0, '2020-10-22 12:56:58', '2020-10-22 12:56:58'),
(27, '29', '8', 0, '2020-10-22 12:56:58', '2020-10-22 12:56:58'),
(28, '30', '8', 0, '2020-10-22 12:56:58', '2020-10-22 12:56:58'),
(29, '31', '8', 0, '2020-10-22 12:56:58', '2020-10-22 12:56:58'),
(30, '32', '8', 0, '2020-10-22 12:56:58', '2020-10-22 12:56:58');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2020_10_11_091355_categories', 2),
(4, '2020_10_11_095450_subcategories', 3),
(5, '2020_10_11_135737_products', 4),
(6, '2020_10_11_141649_product_images', 4),
(7, '2020_10_11_142703_product_variations', 4),
(8, '2020_10_12_062026_customers', 5),
(9, '2020_10_12_083929_carts', 6),
(10, '2020_10_12_105731_orders', 7),
(11, '2020_10_12_110748_order_products', 8),
(12, '2020_10_16_070736_productvalues', 9),
(13, '2020_10_17_045141_admin_accounts', 10),
(14, '2020_10_17_045942_roles', 10),
(15, '2020_10_17_051052_permissions', 11),
(16, '2020_10_17_171658_admin_auth_meta', 12),
(17, '2020_10_19_164441_distributors', 13),
(18, '2020_10_22_174404_distributors_product_variations', 14);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `cus_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `totals` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `country` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `cus_id`, `totals`, `fname`, `lname`, `email`, `phone`, `address`, `date`, `country`, `status`, `created_at`, `updated_at`) VALUES
(1, '2', '200', 'wali', 'ee', 'e', 'e', 'e', '', 'e e', 'Pending', '2020-10-12 06:31:02', '2020-10-12 06:31:02'),
(2, '2', '200', 'wali', 'ee', 'e', 'e', 'e', '', 'e e', 'Pending', '2020-10-12 06:31:27', '2020-10-12 06:31:27'),
(3, '1', '19000', 'w', 'w', 'w', 'w', 'w', '', 'w w', 'Pending', '2020-10-12 06:43:34', '2020-10-12 06:43:34'),
(4, '1', '26000', 'w', 'e', 'e', 'e', 'e', '12-10-2020', 'e e', 'Pending', '2020-10-12 07:21:09', '2020-10-12 07:21:09'),
(5, '1', '3000', 'e', 'e', 'ee@gmail.com', 'e', 'e', '16-10-2020', 'e e', 'Pending', '2020-10-16 06:32:05', '2020-10-16 06:32:05');

-- --------------------------------------------------------

--
-- Table structure for table `order_products`
--

CREATE TABLE `order_products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `varient_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `qty` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `order_products`
--

INSERT INTO `order_products` (`id`, `order_id`, `product_id`, `varient_id`, `qty`, `price`, `created_at`, `updated_at`) VALUES
(1, '2', '34', '1', '1', '200', '2020-10-12 06:31:27', '2020-10-12 06:31:27'),
(2, '3', '36', '14', '1', '6000', '2020-10-12 06:43:34', '2020-10-12 06:43:34'),
(3, '3', '37', '15', '1', '7000', '2020-10-12 06:43:34', '2020-10-12 06:43:34'),
(4, '3', '36', '14', '1', '6000', '2020-10-12 06:43:34', '2020-10-12 06:43:34'),
(5, '4', '36', '14', '1', '6000', '2020-10-12 07:21:09', '2020-10-12 07:21:09'),
(6, '4', '37', '15', '1', '7000', '2020-10-12 07:21:09', '2020-10-12 07:21:09'),
(7, '4', '36', '14', '1', '6000', '2020-10-12 07:21:09', '2020-10-12 07:21:09'),
(8, '4', '37', '15', '1', '7000', '2020-10-12 07:21:09', '2020-10-12 07:21:09'),
(9, '5', '34', '31', '1', '1000', '2020-10-16 06:32:05', '2020-10-16 06:32:05'),
(10, '5', '34', '31', '2', '2000', '2020-10-16 06:32:05', '2020-10-16 06:32:05');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `role_id` int(11) NOT NULL,
  `dashboard` tinyint(1) NOT NULL DEFAULT 1,
  `customers` tinyint(1) NOT NULL DEFAULT 1,
  `products` tinyint(1) NOT NULL DEFAULT 1,
  `orders` tinyint(1) NOT NULL DEFAULT 1,
  `categories` tinyint(1) NOT NULL DEFAULT 1,
  `distributors` tinyint(1) NOT NULL DEFAULT 1,
  `permissions` tinyint(1) NOT NULL DEFAULT 1,
  `reports` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`id`, `role_id`, `dashboard`, `customers`, `products`, `orders`, `categories`, `distributors`, `permissions`, `reports`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, '2020-10-17 01:14:08', '2020-10-18 02:25:32'),
(2, 2, 1, 1, 1, 1, 1, 1, 1, 1, '2020-10-17 04:50:24', '2020-10-17 04:50:24');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `varient_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `qty_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cat_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sub_cat_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `enabled` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `featuerd` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `retail` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `distribution` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `code`, `description`, `varient_type`, `qty_type`, `cat_id`, `sub_cat_id`, `enabled`, `featuerd`, `retail`, `distribution`, `created_at`, `updated_at`) VALUES
(34, 'Pillow set  2pcs', '002', 'this. si a dummy descriptions', 'size', 'Piece', '3', '3', '1', '1', '1', '0', '2020-10-11 10:58:13', '2020-10-14 03:37:12'),
(35, 'Pilow 1pcs', '003', 'Chairman Foam Chairman FoamChairman FoamChairman FoamChairman FoamChairman FoamChairman FoamChairman FoamChairman Foam', 'size', 'KG', '3', '3', '1', '1', '1', '1', '2020-10-11 12:24:18', '2020-10-14 03:37:36'),
(36, 'Goa Pilow', '004', 'Dumy ProductDumy ProductDumy ProductDumy ProductDumy ProductDumy ProductDumy ProductDumy ProductDumy Product', 'size', 'Piece', '7', '7', '1', '1', '1', '1', '2020-10-11 20:36:42', '2020-10-14 03:36:20'),
(37, 'Spring Matress', '005', 'Dumy ProductDumy ProductDumy ProductDumy ProductDumy ProductDumy ProductDumy ProductDumy ProductDumy ProductDumy Product', 'size', 'Piece', '7', '7', '1', '1', '1', '1', '2020-10-11 20:37:17', '2020-10-14 03:36:43'),
(38, 'test', 'test', 'test', 'size', 'Piece', '7', '7', '1', '0', '1', '1', '2020-10-12 11:13:37', '2020-10-12 11:13:37');

-- --------------------------------------------------------

--
-- Table structure for table `productvalues`
--

CREATE TABLE `productvalues` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `productvalues`
--

INSERT INTO `productvalues` (`id`, `image`, `product_id`, `name`, `description`, `created_at`, `updated_at`) VALUES
(1, '1602832636.png', '35', 'Knitted Fabric', 'Highly quality damsk , high quality fabric  which is circular knited', '2020-10-16 02:17:16', '2020-10-16 03:03:05'),
(4, '1602841169.png', '35', 'test', 'test', '2020-10-16 04:39:30', '2020-10-16 04:39:30');

-- --------------------------------------------------------

--
-- Table structure for table `product_images`
--

CREATE TABLE `product_images` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product_images`
--

INSERT INTO `product_images` (`id`, `product_id`, `image`, `created_at`, `updated_at`) VALUES
(1, '34', '1602431893.png', '2020-10-11 10:58:14', '2020-10-11 10:58:14'),
(3, '34', '1602431894.jpeg', '2020-10-11 10:58:14', '2020-10-11 10:58:14'),
(4, '35', '1602437058.png', '2020-10-11 12:24:18', '2020-10-11 12:24:18'),
(5, '36', '1602466602.png', '2020-10-11 20:36:42', '2020-10-11 20:36:42'),
(6, '37', '1602466637.png', '2020-10-11 20:37:18', '2020-10-11 20:37:18'),
(7, '38', '1602519217.png', '2020-10-12 11:13:37', '2020-10-12 11:13:37'),
(8, '38', '1602519217.png', '2020-10-12 11:13:37', '2020-10-12 11:13:37'),
(9, '39', '1602570157.png', '2020-10-13 01:22:37', '2020-10-13 01:22:37'),
(10, '39', '1602570157.png', '2020-10-13 01:22:37', '2020-10-13 01:22:37'),
(11, '40', '1602743194.png', '2020-10-15 01:26:34', '2020-10-15 01:26:34'),
(12, '40', '1602743194.png', '2020-10-15 01:26:34', '2020-10-15 01:26:34'),
(13, '40', '1602743194.png', '2020-10-15 01:26:34', '2020-10-15 01:26:34'),
(14, '41', '1602743504.png', '2020-10-15 01:31:44', '2020-10-15 01:31:44'),
(15, '41', '1602743504.png', '2020-10-15 01:31:44', '2020-10-15 01:31:44'),
(16, '0', '1602744143.png', '2020-10-15 01:42:24', '2020-10-15 01:42:24'),
(17, '0', '1602744358.png', '2020-10-15 01:45:58', '2020-10-15 01:45:58'),
(18, '0', '1602744358.png', '2020-10-15 01:45:58', '2020-10-15 01:45:58'),
(19, '0', '1602744386.png', '2020-10-15 01:46:26', '2020-10-15 01:46:26'),
(20, '0', '1602744387.png', '2020-10-15 01:46:27', '2020-10-15 01:46:27'),
(21, '0', '1602744543.png', '2020-10-15 01:49:03', '2020-10-15 01:49:03'),
(22, '0', '1602744543.png', '2020-10-15 01:49:03', '2020-10-15 01:49:03'),
(23, '42', '1602744632.png', '2020-10-15 01:50:32', '2020-10-15 01:50:32'),
(24, '42', '1602744632.png', '2020-10-15 01:50:32', '2020-10-15 01:50:32'),
(25, '0', '1602744753.png', '2020-10-15 01:52:33', '2020-10-15 01:52:33'),
(26, '0', '1602744753.png', '2020-10-15 01:52:33', '2020-10-15 01:52:33'),
(27, '0', '1602744776.png', '2020-10-15 01:52:56', '2020-10-15 01:52:56'),
(28, '0', '1602744776.png', '2020-10-15 01:52:56', '2020-10-15 01:52:56'),
(29, '45', '1602744843.png', '2020-10-15 01:54:03', '2020-10-15 01:54:03'),
(30, '45', '1602744843.png', '2020-10-15 01:54:03', '2020-10-15 01:54:03'),
(31, '0', '1602744862.png', '2020-10-15 01:54:22', '2020-10-15 01:54:22'),
(32, '0', '1602744862.png', '2020-10-15 01:54:22', '2020-10-15 01:54:22'),
(33, '0', '1602744875.png', '2020-10-15 01:54:35', '2020-10-15 01:54:35'),
(34, '0', '1602744875.png', '2020-10-15 01:54:35', '2020-10-15 01:54:35'),
(35, '0', '1602744900.png', '2020-10-15 01:55:00', '2020-10-15 01:55:00'),
(36, '0', '1602744900.png', '2020-10-15 01:55:00', '2020-10-15 01:55:00'),
(37, '0', '1602744936.png', '2020-10-15 01:55:36', '2020-10-15 01:55:36'),
(38, '0', '1602744936.png', '2020-10-15 01:55:36', '2020-10-15 01:55:36'),
(39, '0', '1602745091.png', '2020-10-15 01:58:11', '2020-10-15 01:58:11'),
(40, '0', '1602745091.png', '2020-10-15 01:58:11', '2020-10-15 01:58:11'),
(41, '0', '1602745116.png', '2020-10-15 01:58:36', '2020-10-15 01:58:36'),
(42, '0', '1602745116.png', '2020-10-15 01:58:36', '2020-10-15 01:58:36'),
(43, '0', '1602745130.png', '2020-10-15 01:58:50', '2020-10-15 01:58:50'),
(44, '0', '1602745130.png', '2020-10-15 01:58:50', '2020-10-15 01:58:50'),
(45, '0', '1602745160.png', '2020-10-15 01:59:20', '2020-10-15 01:59:20'),
(46, '0', '1602745187.png', '2020-10-15 01:59:47', '2020-10-15 01:59:47'),
(47, '0', '1602745241.png', '2020-10-15 02:00:41', '2020-10-15 02:00:41'),
(48, '34', '1602843274.png', '2020-10-16 05:14:34', '2020-10-16 05:14:34');

-- --------------------------------------------------------

--
-- Table structure for table `product_variations`
--

CREATE TABLE `product_variations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product_variations`
--

INSERT INTO `product_variations` (`id`, `product_id`, `name`, `price`, `created_at`, `updated_at`) VALUES
(2, 29, 's', 0, '2020-10-11 10:23:34', '2020-10-11 10:23:34'),
(3, 30, 's', 0, '2020-10-11 10:24:30', '2020-10-11 10:24:30'),
(4, 30, 'nm', 0, '2020-10-11 10:24:30', '2020-10-11 10:24:30'),
(5, 31, 's', 0, '2020-10-11 10:46:35', '2020-10-11 10:46:35'),
(6, 31, 's', 0, '2020-10-11 10:46:35', '2020-10-11 10:46:35'),
(7, 32, 's', 0, '2020-10-11 10:47:11', '2020-10-11 10:47:11'),
(8, 32, 's', 0, '2020-10-11 10:47:11', '2020-10-11 10:47:11'),
(9, 33, 's', 0, '2020-10-11 10:47:48', '2020-10-11 10:47:48'),
(10, 33, 's', 0, '2020-10-11 10:47:48', '2020-10-11 10:47:48'),
(12, 34, 's', 1500, '2020-10-11 10:58:13', '2020-10-16 05:44:21'),
(13, 35, '6inch', 2500, '2020-10-11 12:24:18', '2020-10-11 12:24:18'),
(14, 36, 'small', 6000, '2020-10-11 20:36:42', '2020-10-11 20:36:42'),
(15, 37, 'small', 7000, '2020-10-11 20:37:17', '2020-10-11 20:37:17'),
(16, 38, 'small', 500, '2020-10-12 11:13:37', '2020-10-12 11:13:37'),
(17, 38, 'large', 1000, '2020-10-12 11:13:37', '2020-10-12 11:13:37'),
(18, 39, 'small', 2500, '2020-10-13 01:22:37', '2020-10-13 01:22:37'),
(19, 39, 'large', 3000, '2020-10-13 01:22:37', '2020-10-13 01:22:37'),
(20, 40, 'red', 1500, '2020-10-15 01:26:34', '2020-10-15 01:26:34'),
(21, 41, 'ss', 0, '2020-10-15 01:31:44', '2020-10-15 01:31:44'),
(22, 42, 'ss', 0, '2020-10-15 01:50:32', '2020-10-15 01:50:32'),
(23, 43, 'ss', 0, '2020-10-15 01:52:33', '2020-10-15 01:52:33'),
(24, 44, 'ss', 0, '2020-10-15 01:52:56', '2020-10-15 01:52:56'),
(25, 45, 'ss', 0, '2020-10-15 01:54:03', '2020-10-15 01:54:03'),
(26, 45, 'sss', 0, '2020-10-15 01:54:03', '2020-10-15 01:54:03'),
(27, 46, 'ss', 0, '2020-10-15 01:54:22', '2020-10-15 01:54:22'),
(28, 46, 'sss', 0, '2020-10-15 01:54:22', '2020-10-15 01:54:22'),
(29, 47, 'ee', 0, '2020-10-16 05:18:27', '2020-10-16 05:18:27'),
(30, 48, 'ee', 0, '2020-10-16 05:18:50', '2020-10-16 05:18:50'),
(31, 34, '6 inch', 1000, '2020-10-16 05:44:55', '2020-10-16 05:44:55'),
(32, 49, 'ss', 0, '2020-10-16 06:00:03', '2020-10-16 06:00:03');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'SuperAdmin', '2020-10-17 01:14:08', '2020-10-17 01:14:08'),
(2, 'Admin', '2020-10-17 04:50:24', '2020-10-17 04:50:24');

-- --------------------------------------------------------

--
-- Table structure for table `subcategories`
--

CREATE TABLE `subcategories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `cat_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `subcategories`
--

INSERT INTO `subcategories` (`id`, `cat_id`, `name`, `created_at`, `updated_at`) VALUES
(7, '10', 'Ortho', '2020-10-11 14:09:37', '2020-10-11 14:09:37'),
(8, '10', 'Ortho Luxury', '2020-10-11 14:09:52', '2020-10-11 14:09:52'),
(9, '10', 'Medicare', '2020-10-11 14:10:01', '2020-10-11 14:10:01'),
(10, '10', 'Bodicare', '2020-10-11 14:10:25', '2020-10-11 14:10:25'),
(11, '10', 'Madimax', '2020-10-11 14:10:32', '2020-10-22 23:35:58'),
(12, '10', 'Biopedic', '2020-10-11 14:10:42', '2020-10-11 14:10:42'),
(13, '11', 'Pillow', '2020-10-11 14:11:02', '2020-10-11 14:11:02'),
(14, '11', 'Prayer Mat', '2020-10-11 14:11:22', '2020-10-11 14:11:22'),
(15, '11', 'Back care', '2020-10-11 14:11:40', '2020-10-11 14:11:40'),
(16, '11', 'Sheet', '2020-10-11 14:11:49', '2020-10-11 14:11:49'),
(17, '11', 'Pad', '2020-10-11 14:11:57', '2020-10-11 14:11:57'),
(18, '9', 'Chairman', '2020-10-11 14:12:17', '2020-10-11 14:12:17'),
(19, '9', 'Spring', '2020-10-11 14:12:23', '2020-10-11 14:12:23'),
(20, '9', 'Foam', '2020-10-11 14:12:28', '2020-10-11 14:12:28');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_accounts`
--
ALTER TABLE `admin_accounts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `admin_auth_meta`
--
ALTER TABLE `admin_auth_meta`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `distributors`
--
ALTER TABLE `distributors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `distributors_product_variations`
--
ALTER TABLE `distributors_product_variations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_products`
--
ALTER TABLE `order_products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `productvalues`
--
ALTER TABLE `productvalues`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_images`
--
ALTER TABLE `product_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_variations`
--
ALTER TABLE `product_variations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subcategories`
--
ALTER TABLE `subcategories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin_accounts`
--
ALTER TABLE `admin_accounts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `admin_auth_meta`
--
ALTER TABLE `admin_auth_meta`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `distributors`
--
ALTER TABLE `distributors`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `distributors_product_variations`
--
ALTER TABLE `distributors_product_variations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `order_products`
--
ALTER TABLE `order_products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT for table `productvalues`
--
ALTER TABLE `productvalues`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `product_images`
--
ALTER TABLE `product_images`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT for table `product_variations`
--
ALTER TABLE `product_variations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `subcategories`
--
ALTER TABLE `subcategories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
