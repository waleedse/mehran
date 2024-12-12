-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 12, 2020 at 04:56 AM
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
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `surname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `job_designation` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telephone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pin_code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admin_accounts`
--

INSERT INTO `admin_accounts` (`id`, `email`, `fname`, `password`, `role_id`, `status`, `created_at`, `updated_at`, `surname`, `job_designation`, `telephone`, `pin_code`) VALUES
(1, 'superadmin', 'SuperAdmin', '123321', '1', 'Active', '2020-10-17 09:47:58', '2020-10-17 10:29:26', '', '', '', ''),
(2, 'test', 'test', 'test', '2', 'Active', '2020-10-28 13:42:58', '2020-10-28 13:42:58', 'test', 'test', 'test', 'test');

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
(21, '37', '999cfcc0-0fe2-11eb-b372-69c215d14b59', '1', '7000', '15', '2020-10-31 12:22:00', '2020-10-31 12:22:00'),
(22, '36', '999cfcc0-0fe2-11eb-b372-69c215d14b59', '1', '6000', '14', '2020-10-31 23:41:29', '2020-10-31 23:41:29');

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
-- Table structure for table `cities`
--

CREATE TABLE `cities` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(16) DEFAULT NULL,
  `district` varchar(20) DEFAULT NULL,
  `price` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cities`
--

INSERT INTO `cities` (`id`, `name`, `district`, `price`) VALUES
(2822, 'Karachi', 'Sindh', 250),
(2823, 'Lahore', 'Punjab', 10),
(2824, 'Faisalabad', 'Punjab', 0),
(2825, 'Rawalpindi', 'Punjab', 0),
(2826, 'Multan', 'Punjab', 0),
(2827, 'Hyderabad', 'Sindh', 0),
(2828, 'Gujranwala', 'Punjab', 0),
(2829, 'Peshawar', 'Nothwest Border Prov', 0),
(2830, 'Quetta', 'Baluchistan', 0),
(2831, 'Islamabad', 'Islamabad', 0),
(2832, 'Sargodha', 'Punjab', 0),
(2833, 'Sialkot', 'Punjab', 0),
(2834, 'Bahawalpur', 'Punjab', 0),
(2835, 'Sukkur', 'Sindh', 0),
(2836, 'Jhang', 'Punjab', 0),
(2837, 'Sheikhupura', 'Punjab', 0),
(2838, 'Larkana', 'Sindh', 0),
(2839, 'Gujrat', 'Punjab', 0),
(2840, 'Mardan', 'Nothwest Border Prov', 0),
(2841, 'Kasur', 'Punjab', 0),
(2842, 'Rahim Yar Khan', 'Punjab', 0),
(2843, 'Sahiwal', 'Punjab', 0),
(2844, 'Okara', 'Punjab', 0),
(2845, 'Wah', 'Punjab', 0),
(2846, 'Dera Ghazi Khan', 'Punjab', 0),
(2847, 'Mirpur Khas', 'Sind', 0),
(2848, 'Nawabshah', 'Sind', 0),
(2849, 'Mingora', 'Nothwest Border Prov', 0),
(2850, 'Chiniot', 'Punjab', 0),
(2851, 'Kamoke', 'Punjab', 0),
(2852, 'Mandi Burewala', 'Punjab', 0),
(2853, 'Jhelum', 'Punjab', 0),
(2854, 'Sadiqabad', 'Punjab', 0),
(2855, 'Jacobabad', 'Sind', 0),
(2856, 'Shikarpur', 'Sind', 0),
(2857, 'Khanewal', 'Punjab', 0),
(2858, 'Hafizabad', 'Punjab', 0),
(2859, 'Kohat', 'Nothwest Border Prov', 0),
(2860, 'Muzaffargarh', 'Punjab', 0),
(2861, 'Khanpur', 'Punjab', 0),
(2862, 'Gojra', 'Punjab', 0),
(2863, 'Bahawalnagar', 'Punjab', 0),
(2864, 'Muridke', 'Punjab', 0),
(2865, 'Pak Pattan', 'Punjab', 0),
(2866, 'Abottabad', 'Nothwest Border Prov', 0),
(2867, 'Tando Adam', 'Sind', 0),
(2868, 'Jaranwala', 'Punjab', 0),
(2869, 'Khairpur', 'Sind', 0),
(2870, 'Chishtian Mandi', 'Punjab', 0),
(2871, 'Daska', 'Punjab', 0),
(2872, 'Dadu', 'Sind', 0),
(2873, 'Mandi Bahauddin', 'Punjab', 0),
(2874, 'Ahmadpur East', 'Punjab', 0),
(2875, 'Kamalia', 'Punjab', 0),
(2876, 'Khuzdar', 'Baluchistan', 0),
(2877, 'Vihari', 'Punjab', 0),
(2878, 'Dera Ismail Khan', 'Nothwest Border Prov', 0),
(2879, 'Wazirabad', 'Punjab', 0),
(2880, 'Nowshera', 'Nothwest Border Prov', 0);

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
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'avatar.png',
  `token` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `name`, `username`, `email`, `password`, `image`, `token`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Muhammad Asad', 'wal', 'w@gmail.com', '123', '1604165235.png', '$2y$10$6fhQgew7yCF0.g4Ow2Sm/eyNuB0GhhfvXuPc9sWEbmaBlB0/JTgj2', 'Active', '2020-10-12 02:21:24', '2020-11-10 13:28:37');

-- --------------------------------------------------------

--
-- Table structure for table `discountcodes`
--

CREATE TABLE `discountcodes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `discount` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `startdate` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `enddate` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `discountcodes`
--

INSERT INTO `discountcodes` (`id`, `name`, `discount`, `startdate`, `enddate`, `status`, `created_at`, `updated_at`) VALUES
(1, 'test', '400', '2020/11/10', '2020/11/15', '1', '2020-11-09 13:22:08', '2020-11-10 12:25:41');

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
(15, '17', '8', 200, '2020-10-22 12:56:58', '2020-10-28 14:26:19'),
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
(29, '31', '8', 300, '2020-10-22 12:56:58', '2020-10-31 12:30:02'),
(30, '32', '8', 0, '2020-10-22 12:56:58', '2020-10-22 12:56:58'),
(31, '35', '1', 0, '2020-11-01 12:49:09', '2020-11-01 12:49:09'),
(32, '35', '2', 0, '2020-11-01 12:49:09', '2020-11-01 12:49:09'),
(33, '35', '3', 0, '2020-11-01 12:49:09', '2020-11-01 12:49:09'),
(34, '35', '8', 0, '2020-11-01 12:49:09', '2020-11-01 12:49:09'),
(35, '36', '1', 0, '2020-11-01 12:52:32', '2020-11-01 12:52:32'),
(36, '36', '2', 0, '2020-11-01 12:52:32', '2020-11-01 12:52:32'),
(37, '36', '3', 0, '2020-11-01 12:52:32', '2020-11-01 12:52:32'),
(38, '36', '8', 0, '2020-11-01 12:52:32', '2020-11-01 12:52:32');

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
(18, '2020_10_22_174404_distributors_product_variations', 14),
(19, '2020_11_09_175656_discountcodes', 15);

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
  `shipping` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `discount` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `discount_id` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `subtotal` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `country` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `city` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `cus_id`, `totals`, `fname`, `lname`, `email`, `phone`, `address`, `date`, `shipping`, `discount`, `discount_id`, `subtotal`, `country`, `status`, `created_at`, `updated_at`, `city`) VALUES
(1, '2', '200', 'wali', 'ee', 'e', 'e', 'e', '12-10-2020', '0', '0', '', '0', 'e e', 'Pending', '2020-10-12 06:31:02', '2020-10-12 06:31:02', NULL),
(2, '2', '200', 'wali', 'ee', 'e', 'e', 'e', '12-10-2020', '0', '0', '', '0', 'e e', 'Pending', '2020-10-12 06:31:27', '2020-10-12 06:31:27', NULL),
(3, '1', '19000', 'w', 'w', 'w', 'w', 'w', '12-10-2020', '0', '0', '', '0', 'w w', 'Pending', '2020-10-12 06:43:34', '2020-10-12 06:43:34', NULL),
(4, '1', '26000', 'w', 'e', 'e', 'e', 'e', '12-10-2020', '0', '0', '', '0', 'e e', 'Pending', '2020-10-12 07:21:09', '2020-10-12 07:21:09', NULL),
(5, '1', '3000', 'e', 'e', 'ee@gmail.com', 'e', 'e', '16-10-2020', '0', '0', '', '0', 'e e', 'Pending', '2020-10-16 06:32:05', '2020-10-16 06:32:05', NULL),
(6, '1', '500', 'waleed', 'ahmed', 'waleedahmed131997@gmail.com', '03174011206', 'Pakistan', '31-10-2020', '0', '0', '', '0', 'home#883 osama block nishter colony ferozepur road lahore ', 'Pending', '2020-10-31 04:47:39', '2020-10-31 04:47:39', NULL),
(7, '1', '500', 'waleed', 'ahmed', 'waleedahmed131997@gmail.com', '03174011206', 'home#883 osama block nishter colony ferozepur road lahore ', '31-10-2020', '0', '0', '', '0', 'Pakistan', 'Pending', '2020-10-31 04:55:49', '2020-10-31 04:55:49', NULL),
(8, '1', '7500', 'waleed', 'ahmed', 'waleedchaudry595@gmail.com', '03174011206', 'home#883 osama block nishter colony ferozepur road lahore ', '31-10-2020', '0', '0', '', '0', 'Pakistan', 'Pending', '2020-10-31 12:22:19', '2020-10-31 12:22:19', NULL),
(9, '1', '13010', 'waleed', 'ahmed', 'waleedahmed131997@gmail.com', '03174011206', 'home#883 osama block nishter colony ferozepur road lahore ', '03-11-2020', '10', '0', '', '13000', 'Pakistan', 'Pending', '2020-11-03 14:28:45', '2020-11-03 14:28:45', '2823'),
(10, '1', '13010', 'waleed', 'ahmed', 'waleedahmed131997@gmail.com', '03174011206', 'home#883 osama block nishter colony ferozepur road lahore ', '03-11-2020', '10', '0', '', '13000', 'Pakistan', 'Pending', '2020-11-03 14:30:20', '2020-11-03 14:30:20', '2823'),
(11, '1', '13250', 'waleed', 'ahmed', 'waleedahmed131997@gmail.com', '03174011206', 'home#883 osama block nishter colony ferozepur road lahore ', '03-11-2020', '250', '0', '', '13000', 'Pakistan', 'Pending', '2020-11-03 14:30:33', '2020-11-03 14:30:33', '2822'),
(12, '1', '12610', 'waleed', 'ahmed', 'waleedahmed131997@gmail.com', '03174011206', 'home#883 osama block nishter colony ferozepur road lahore ', '10-11-2020', '10', '0', '', '13000', 'Pakistan', 'Pending', '2020-11-10 13:28:52', '2020-11-10 13:28:52', '2823'),
(13, '1', '12610', 'waleed', 'ahmed', 'waleedahmed131997@gmail.com', '03174011206', 'home#883 osama block nishter colony ferozepur road lahore ', '10-11-2020', '10', '400', '1', '13000', 'Pakistan', 'Pending', '2020-11-10 13:35:34', '2020-11-10 13:35:34', '2823');

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
(10, '5', '34', '31', '2', '2000', '2020-10-16 06:32:05', '2020-10-16 06:32:05'),
(11, '6', '38', '16', '1', '500', '2020-10-31 04:47:39', '2020-10-31 04:47:39'),
(12, '7', '38', '16', '1', '500', '2020-10-31 04:55:49', '2020-10-31 04:55:49'),
(13, '8', '38', '16', '1', '500', '2020-10-31 12:22:19', '2020-10-31 12:22:19'),
(14, '8', '37', '15', '1', '7000', '2020-10-31 12:22:19', '2020-10-31 12:22:19'),
(15, '9', '37', '15', '1', '7000', '2020-11-03 14:28:45', '2020-11-03 14:28:45'),
(16, '9', '36', '14', '1', '6000', '2020-11-03 14:28:45', '2020-11-03 14:28:45'),
(17, '10', '37', '15', '1', '7000', '2020-11-03 14:30:20', '2020-11-03 14:30:20'),
(18, '10', '36', '14', '1', '6000', '2020-11-03 14:30:20', '2020-11-03 14:30:20'),
(19, '11', '37', '15', '1', '7000', '2020-11-03 14:30:33', '2020-11-03 14:30:33'),
(20, '11', '36', '14', '1', '6000', '2020-11-03 14:30:33', '2020-11-03 14:30:33'),
(21, '12', '37', '15', '1', '7000', '2020-11-10 13:28:52', '2020-11-10 13:28:52'),
(22, '12', '36', '14', '1', '6000', '2020-11-10 13:28:52', '2020-11-10 13:28:52'),
(23, '13', '37', '15', '1', '7000', '2020-11-10 13:35:34', '2020-11-10 13:35:34'),
(24, '13', '36', '14', '1', '6000', '2020-11-10 13:35:34', '2020-11-10 13:35:34');

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
(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, '2020-10-17 01:14:08', '2020-10-28 12:58:34'),
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
(37, 'Spring Matress', '005', 'Dumy ProductDumy ProductDumy ProductDumy ProductDumy ProductDumy ProductDumy ProductDumy ProductDumy ProductDumy Product', 'size', 'Piece', '10', '7', '0', '1', '1', '1', '2020-10-11 20:37:17', '2020-11-01 04:42:57'),
(38, 'test', 'test', 'test', 'size', 'Piece', '10', '7', '1', '0', '1', '1', '2020-10-12 11:13:37', '2020-10-31 13:35:56'),
(52, '003', '002s', 'ss', 'size', 'Piece', '9', '18', '1', '0', '1', '1', '2020-11-01 12:49:09', '2020-11-01 12:49:09');

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
(48, '34', '1602843274.png', '2020-10-16 05:14:34', '2020-10-16 05:14:34'),
(50, '50', '1604211155.png', '2020-11-01 01:12:35', '2020-11-01 01:12:35'),
(51, '51', '1604211188.png', '2020-11-01 01:13:08', '2020-11-01 01:13:08'),
(52, '52', '1604252949.png', '2020-11-01 12:49:09', '2020-11-01 12:49:09');

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
(32, 49, 'ss', 0, '2020-10-16 06:00:03', '2020-10-16 06:00:03'),
(33, 50, 'd', 0, '2020-11-01 01:12:35', '2020-11-01 01:12:35'),
(34, 51, 'd', 0, '2020-11-01 01:13:08', '2020-11-01 01:13:08'),
(35, 52, 'ss', 0, '2020-11-01 12:49:09', '2020-11-01 12:49:09'),
(36, 52, 'ssg', 0, '2020-11-01 12:52:32', '2020-11-01 12:52:32');

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
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'noimage.png',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `subcategories`
--

INSERT INTO `subcategories` (`id`, `cat_id`, `name`, `image`, `created_at`, `updated_at`) VALUES
(7, '10', 'Ortho', 'noimage.png', '2020-10-11 14:09:37', '2020-10-11 14:09:37'),
(8, '10', 'Ortho Luxury', 'noimage.png', '2020-10-11 14:09:52', '2020-10-11 14:09:52'),
(9, '10', 'Medicare', 'noimage.png', '2020-10-11 14:10:01', '2020-10-11 14:10:01'),
(10, '10', 'Bodicare', 'noimage.png', '2020-10-11 14:10:25', '2020-10-11 14:10:25'),
(11, '10', 'Madimax', 'noimage.png', '2020-10-11 14:10:32', '2020-10-22 23:35:58'),
(12, '10', 'Biopedic', 'noimage.png', '2020-10-11 14:10:42', '2020-10-11 14:10:42'),
(13, '11', 'Pillow', 'noimage.png', '2020-10-11 14:11:02', '2020-10-11 14:11:02'),
(14, '11', 'Prayer Mat', 'noimage.png', '2020-10-11 14:11:22', '2020-10-11 14:11:22'),
(15, '11', 'Back care', 'noimage.png', '2020-10-11 14:11:40', '2020-10-11 14:11:40'),
(16, '11', 'Sheet', 'noimage.png', '2020-10-11 14:11:49', '2020-10-11 14:11:49'),
(17, '11', 'Pad', 'noimage.png', '2020-10-11 14:11:57', '2020-10-11 14:11:57'),
(18, '9', 'Chairman', '1604219442.png', '2020-10-11 14:12:17', '2020-11-01 03:30:43'),
(19, '9', 'Spring', '1604216762.png', '2020-10-11 14:12:23', '2020-11-01 02:46:02'),
(20, '9', 'Foam', 'noimage.png', '2020-10-11 14:12:28', '2020-10-11 14:12:28'),
(21, '9', 'test', '1604216162.png', '2020-11-01 02:36:02', '2020-11-01 02:36:02');

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
-- Indexes for table `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `discountcodes`
--
ALTER TABLE `discountcodes`
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
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `admin_auth_meta`
--
ALTER TABLE `admin_auth_meta`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

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
-- AUTO_INCREMENT for table `discountcodes`
--
ALTER TABLE `discountcodes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `distributors`
--
ALTER TABLE `distributors`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `distributors_product_variations`
--
ALTER TABLE `distributors_product_variations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `order_products`
--
ALTER TABLE `order_products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT for table `productvalues`
--
ALTER TABLE `productvalues`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `product_images`
--
ALTER TABLE `product_images`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT for table `product_variations`
--
ALTER TABLE `product_variations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `subcategories`
--
ALTER TABLE `subcategories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
