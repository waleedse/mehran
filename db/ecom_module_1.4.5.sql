-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 25, 2020 at 10:16 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
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
-- Table structure for table `automaticdiscounts`
--

CREATE TABLE `automaticdiscounts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `startdate` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `enddate` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `automaticdiscounts`
--

INSERT INTO `automaticdiscounts` (`id`, `name`, `startdate`, `enddate`, `status`, `created_at`, `updated_at`) VALUES
(5, 'test', '2020/11/12', '2020/11/25', '1', '2020-11-12 12:40:22', '2020-11-24 12:49:21');

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
  `original_price` int(11) NOT NULL DEFAULT 0,
  `discount` int(11) NOT NULL DEFAULT 0,
  `discount_id` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `carts`
--

INSERT INTO `carts` (`id`, `product_id`, `cart_cookie_id`, `qty`, `price`, `varient_id`, `original_price`, `discount`, `discount_id`, `created_at`, `updated_at`) VALUES
(1, '34', '2', '1', '200', '1', 0, 0, 0, '2020-10-12 03:57:37', '2020-10-12 03:57:37'),
(2, '36', '1', '1', '6000', '14', 0, 0, 0, '2020-10-12 04:35:55', '2020-10-12 04:35:55'),
(3, '37', '1', '1', '7000', '15', 0, 0, 0, '2020-10-12 05:08:42', '2020-10-12 05:08:42'),
(4, '36', '1', '1', '6000', '14', 0, 0, 0, '2020-10-12 06:36:08', '2020-10-12 06:36:08'),
(6, '37', '1', '1', '7000', '15', 0, 0, 0, '2020-10-12 07:19:40', '2020-10-12 07:19:40'),
(7, '34', '33e3a3c0-0fa1-11eb-8e8a-fbb68955ed69', '1', '1000', '31', 0, 0, 0, '2020-10-16 06:24:30', '2020-10-16 06:24:30'),
(8, '34', '33e3a3c0-0fa1-11eb-8e8a-fbb68955ed69', '2', '2000', '31', 0, 0, 0, '2020-10-16 06:24:42', '2020-10-16 06:24:42'),
(34, '37', '68694050-2e7d-11eb-a6a3-a3cf6c02a188', '1', '6996', '15', 7000, 4, 5, '2020-11-24 12:51:31', '2020-11-24 12:51:31');

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
  `fname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
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

INSERT INTO `customers` (`id`, `fname`, `lname`, `email`, `phone`, `address`, `password`, `image`, `token`, `status`, `created_at`, `updated_at`) VALUES
(1, 'waleed', 'ahmed', 'w@gmail.com', '03174011206', 'home#883 osama block nishter colony ferozepur road lahore', '123', '1604165235.png', '$2y$10$jPb6yXI2TpN4ohJR.2yQJOhvS77vynPrGl3TeSKuT9hvFPfsfvLaK', 'Active', '2020-10-12 02:21:24', '2020-11-25 00:43:47'),
(11, 'waleed', 'Cahudry', 'waleedah.official@gmail.com', '031740112063', 'home#883 ssosama block nishter colony ferozepur road lahore', '123123', 'avatar.png', '$2y$10$XYZlcSICVcfp8N8ynhH/IeT0mJRd1XN.xXX.lyagm.rK682npvFwq', 'Active', '2020-11-24 13:11:32', '2020-11-25 02:43:42');

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
(1, 'test', '400', '2020/11/10', '2020/11/15', '1', '2020-11-09 13:22:08', '2020-11-10 12:25:41'),
(2, 'test', '400', '11/10/2020', '11/15/2020', '1', '2020-11-12 11:38:47', '2020-11-12 11:38:47'),
(3, 'test2', '200', '2020/11/24', '2020/11/25', '1', '2020-11-23 23:30:11', '2020-11-23 23:32:27');

-- --------------------------------------------------------

--
-- Table structure for table `discountvariations`
--

CREATE TABLE `discountvariations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `variation_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `discount_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `discount` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `discountvariations`
--

INSERT INTO `discountvariations` (`id`, `variation_id`, `discount_id`, `discount`, `created_at`, `updated_at`) VALUES
(1, '2', '5', 0, '2020-11-12 12:40:22', '2020-11-12 12:40:22'),
(2, '3', '5', 0, '2020-11-12 12:40:23', '2020-11-12 12:40:23'),
(3, '4', '5', 0, '2020-11-12 12:40:23', '2020-11-12 12:40:23'),
(4, '5', '5', 0, '2020-11-12 12:40:23', '2020-11-12 12:40:23'),
(5, '6', '5', 0, '2020-11-12 12:40:23', '2020-11-12 12:40:23'),
(6, '7', '5', 0, '2020-11-12 12:40:23', '2020-11-12 12:40:23'),
(7, '8', '5', 0, '2020-11-12 12:40:23', '2020-11-12 12:40:23'),
(8, '9', '5', 0, '2020-11-12 12:40:23', '2020-11-12 12:40:23'),
(9, '10', '5', 0, '2020-11-12 12:40:23', '2020-11-12 12:40:23'),
(10, '12', '5', 0, '2020-11-12 12:40:23', '2020-11-12 12:40:23'),
(11, '13', '5', 200, '2020-11-12 12:40:23', '2020-11-12 12:40:23'),
(12, '14', '5', 500, '2020-11-12 12:40:23', '2020-11-13 13:07:15'),
(13, '15', '5', 4, '2020-11-12 12:40:23', '2020-11-12 12:57:07'),
(14, '16', '5', 0, '2020-11-12 12:40:23', '2020-11-12 12:40:23'),
(15, '17', '5', 0, '2020-11-12 12:40:23', '2020-11-12 12:40:23'),
(16, '18', '5', 0, '2020-11-12 12:40:23', '2020-11-12 12:40:23'),
(17, '19', '5', 0, '2020-11-12 12:40:23', '2020-11-12 12:40:23'),
(18, '20', '5', 0, '2020-11-12 12:40:23', '2020-11-12 12:40:23'),
(19, '21', '5', 0, '2020-11-12 12:40:23', '2020-11-12 12:40:23'),
(20, '22', '5', 0, '2020-11-12 12:40:23', '2020-11-12 12:40:23'),
(21, '23', '5', 0, '2020-11-12 12:40:23', '2020-11-12 12:40:23'),
(22, '24', '5', 0, '2020-11-12 12:40:23', '2020-11-12 12:40:23'),
(23, '25', '5', 0, '2020-11-12 12:40:23', '2020-11-12 12:40:23'),
(24, '26', '5', 0, '2020-11-12 12:40:23', '2020-11-12 12:40:23'),
(25, '27', '5', 0, '2020-11-12 12:40:23', '2020-11-12 12:40:23'),
(26, '28', '5', 0, '2020-11-12 12:40:23', '2020-11-12 12:40:23'),
(27, '29', '5', 0, '2020-11-12 12:40:23', '2020-11-12 12:40:23'),
(28, '30', '5', 0, '2020-11-12 12:40:23', '2020-11-12 12:40:23'),
(29, '31', '5', 0, '2020-11-12 12:40:23', '2020-11-12 12:40:23'),
(30, '32', '5', 0, '2020-11-12 12:40:23', '2020-11-12 12:40:23'),
(31, '33', '5', 0, '2020-11-12 12:40:23', '2020-11-12 12:40:23'),
(32, '34', '5', 0, '2020-11-12 12:40:23', '2020-11-12 12:40:23'),
(33, '35', '5', 0, '2020-11-12 12:40:23', '2020-11-12 12:40:23'),
(34, '36', '5', 0, '2020-11-12 12:40:23', '2020-11-12 12:40:23');

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
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'null',
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'avatar.png',
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

INSERT INTO `distributors` (`id`, `fname`, `lname`, `company`, `phone`, `email`, `password`, `token`, `image`, `credit_limit`, `address`, `country`, `city`, `gst`, `status`, `created_at`, `updated_at`) VALUES
(10, 'Chaudry', 'Ahmad', 'Mehran', '03174011206', 'waleedah.official@gmail.com', '123123123', '$2y$10$6vwJ3DzVG9ZLzXBmF9eLHeRjWZC7D8V78fyocn2AfHH33VALdSmay', '1606046791.png', '0', 'LMLZMLMV', 'MFVLMLVM', 'LMLZMLMV', NULL, '1', '2020-11-21 12:27:18', '2020-11-25 03:15:53');

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
(38, '36', '8', 0, '2020-11-01 12:52:32', '2020-11-01 12:52:32'),
(39, '2', '9', 0, '2020-11-12 12:32:43', '2020-11-12 12:32:43'),
(40, '3', '9', 0, '2020-11-12 12:32:43', '2020-11-12 12:32:43'),
(41, '4', '9', 0, '2020-11-12 12:32:43', '2020-11-12 12:32:43'),
(42, '5', '9', 0, '2020-11-12 12:32:43', '2020-11-12 12:32:43'),
(43, '6', '9', 0, '2020-11-12 12:32:43', '2020-11-12 12:32:43'),
(44, '7', '9', 0, '2020-11-12 12:32:43', '2020-11-12 12:32:43'),
(45, '8', '9', 0, '2020-11-12 12:32:43', '2020-11-12 12:32:43'),
(46, '9', '9', 0, '2020-11-12 12:32:43', '2020-11-12 12:32:43'),
(47, '10', '9', 0, '2020-11-12 12:32:43', '2020-11-12 12:32:43'),
(48, '12', '9', 0, '2020-11-12 12:32:43', '2020-11-12 12:32:43'),
(49, '13', '9', 0, '2020-11-12 12:32:43', '2020-11-12 12:32:43'),
(50, '14', '9', 0, '2020-11-12 12:32:43', '2020-11-12 12:32:43'),
(51, '15', '9', 0, '2020-11-12 12:32:43', '2020-11-12 12:32:43'),
(52, '16', '9', 0, '2020-11-12 12:32:43', '2020-11-12 12:32:43'),
(53, '17', '9', 0, '2020-11-12 12:32:43', '2020-11-12 12:32:43'),
(54, '18', '9', 0, '2020-11-12 12:32:43', '2020-11-12 12:32:43'),
(55, '19', '9', 0, '2020-11-12 12:32:43', '2020-11-12 12:32:43'),
(56, '20', '9', 0, '2020-11-12 12:32:43', '2020-11-12 12:32:43'),
(57, '21', '9', 0, '2020-11-12 12:32:43', '2020-11-12 12:32:43'),
(58, '22', '9', 0, '2020-11-12 12:32:43', '2020-11-12 12:32:43'),
(59, '23', '9', 0, '2020-11-12 12:32:43', '2020-11-12 12:32:43'),
(60, '24', '9', 0, '2020-11-12 12:32:43', '2020-11-12 12:32:43'),
(61, '25', '9', 0, '2020-11-12 12:32:43', '2020-11-12 12:32:43'),
(62, '26', '9', 0, '2020-11-12 12:32:43', '2020-11-12 12:32:43'),
(63, '27', '9', 0, '2020-11-12 12:32:43', '2020-11-12 12:32:43'),
(64, '28', '9', 0, '2020-11-12 12:32:43', '2020-11-12 12:32:43'),
(65, '29', '9', 0, '2020-11-12 12:32:43', '2020-11-12 12:32:43'),
(66, '30', '9', 0, '2020-11-12 12:32:43', '2020-11-12 12:32:43'),
(67, '31', '9', 0, '2020-11-12 12:32:43', '2020-11-12 12:32:43'),
(68, '32', '9', 0, '2020-11-12 12:32:43', '2020-11-12 12:32:43'),
(69, '33', '9', 0, '2020-11-12 12:32:43', '2020-11-12 12:32:43'),
(70, '34', '9', 0, '2020-11-12 12:32:43', '2020-11-12 12:32:43'),
(71, '35', '9', 0, '2020-11-12 12:32:43', '2020-11-12 12:32:43'),
(72, '36', '9', 0, '2020-11-12 12:32:43', '2020-11-12 12:32:43'),
(73, '37', '1', 0, '2020-11-14 13:24:49', '2020-11-14 13:24:49'),
(74, '37', '2', 0, '2020-11-14 13:24:49', '2020-11-14 13:24:49'),
(75, '37', '3', 0, '2020-11-14 13:24:49', '2020-11-14 13:24:49'),
(76, '37', '9', 0, '2020-11-14 13:24:49', '2020-11-14 13:24:49'),
(77, '2', '10', 0, '2020-11-21 12:27:18', '2020-11-21 12:27:18'),
(78, '3', '10', 0, '2020-11-21 12:27:18', '2020-11-21 12:27:18'),
(79, '4', '10', 0, '2020-11-21 12:27:18', '2020-11-21 12:27:18'),
(80, '5', '10', 0, '2020-11-21 12:27:18', '2020-11-21 12:27:18'),
(81, '6', '10', 0, '2020-11-21 12:27:18', '2020-11-21 12:27:18'),
(82, '7', '10', 0, '2020-11-21 12:27:18', '2020-11-21 12:27:18'),
(83, '8', '10', 0, '2020-11-21 12:27:18', '2020-11-21 12:27:18'),
(84, '9', '10', 0, '2020-11-21 12:27:18', '2020-11-21 12:27:18'),
(85, '10', '10', 0, '2020-11-21 12:27:18', '2020-11-21 12:27:18'),
(86, '12', '10', 0, '2020-11-21 12:27:18', '2020-11-21 12:27:18'),
(87, '13', '10', 7, '2020-11-21 12:27:18', '2020-11-22 03:56:27'),
(88, '14', '10', 3, '2020-11-21 12:27:18', '2020-11-22 03:54:12'),
(89, '15', '10', 300, '2020-11-21 12:27:18', '2020-11-22 03:48:23'),
(90, '16', '10', 0, '2020-11-21 12:27:18', '2020-11-21 12:27:18'),
(91, '17', '10', 0, '2020-11-21 12:27:18', '2020-11-21 12:27:18'),
(92, '18', '10', 0, '2020-11-21 12:27:18', '2020-11-21 12:27:18'),
(93, '19', '10', 0, '2020-11-21 12:27:18', '2020-11-21 12:27:18'),
(94, '20', '10', 0, '2020-11-21 12:27:18', '2020-11-21 12:27:18'),
(95, '21', '10', 0, '2020-11-21 12:27:18', '2020-11-21 12:27:18'),
(96, '22', '10', 0, '2020-11-21 12:27:18', '2020-11-21 12:27:18'),
(97, '23', '10', 0, '2020-11-21 12:27:18', '2020-11-21 12:27:18'),
(98, '24', '10', 0, '2020-11-21 12:27:18', '2020-11-21 12:27:18'),
(99, '25', '10', 0, '2020-11-21 12:27:18', '2020-11-21 12:27:18'),
(100, '26', '10', 0, '2020-11-21 12:27:18', '2020-11-21 12:27:18'),
(101, '27', '10', 0, '2020-11-21 12:27:18', '2020-11-21 12:27:18'),
(102, '28', '10', 0, '2020-11-21 12:27:18', '2020-11-21 12:27:18'),
(103, '29', '10', 0, '2020-11-21 12:27:18', '2020-11-21 12:27:18'),
(104, '30', '10', 0, '2020-11-21 12:27:18', '2020-11-21 12:27:18'),
(105, '31', '10', 0, '2020-11-21 12:27:18', '2020-11-21 12:27:18'),
(106, '32', '10', 0, '2020-11-21 12:27:18', '2020-11-21 12:27:18'),
(107, '33', '10', 0, '2020-11-21 12:27:18', '2020-11-21 12:27:18'),
(108, '34', '10', 0, '2020-11-21 12:27:18', '2020-11-21 12:27:18'),
(109, '35', '10', 0, '2020-11-21 12:27:18', '2020-11-21 12:27:18'),
(110, '36', '10', 0, '2020-11-21 12:27:18', '2020-11-21 12:27:18'),
(111, '37', '10', 3, '2020-11-21 12:27:18', '2020-11-22 03:54:14');

-- --------------------------------------------------------

--
-- Table structure for table `dis_carts`
--

CREATE TABLE `dis_carts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cart_cookie_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `qty` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `varient_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `original_price` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `discount` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `discount_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `dis_forgotpasswords`
--

CREATE TABLE `dis_forgotpasswords` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `dis_forgotpasswords`
--

INSERT INTO `dis_forgotpasswords` (`id`, `email`, `token`, `status`, `created_at`, `updated_at`) VALUES
(1, 'waleedah.official@gmail.com', '4514', '0', '2020-11-25 03:05:03', '2020-11-25 03:05:03'),
(2, 'waleedah.official@gmail.com', '8321', '0', '2020-11-25 03:05:45', '2020-11-25 03:05:45'),
(3, 'waleedah.official@gmail.com', '4764', '1', '2020-11-25 03:14:31', '2020-11-25 03:14:31');

-- --------------------------------------------------------

--
-- Table structure for table `dis_orders`
--

CREATE TABLE `dis_orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `dis_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `totals` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payment` int(11) NOT NULL DEFAULT 0,
  `fname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `shipping` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `discount` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `discount_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subtotal` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `country` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `city` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `dis_orders`
--

INSERT INTO `dis_orders` (`id`, `dis_id`, `totals`, `payment`, `fname`, `lname`, `email`, `phone`, `address`, `date`, `shipping`, `discount`, `discount_id`, `subtotal`, `country`, `city`, `status`, `created_at`, `updated_at`) VALUES
(2, '10', '2222', 0, 'waa', 'aa', 'wa', '031', 'aaa ', '22-11-2020', '10', '0', '0', '7000', 'Pakistan', '2823', 'Pending', '2020-11-22 03:08:23', '2020-11-22 03:08:23'),
(3, '10', '7010', 0, 'waa', 'aa', 'wa', '031', 'aaa ', '22-11-2020', '10', '0', '0', '7000', 'Pakistan', '2823', 'Pending', '2020-11-22 03:35:52', '2020-11-22 03:35:52'),
(4, '10', '7010', 0, 'waa', 'aa', 'wa', '031', 'aaa ', '22-11-2020', '10', '0', '0', '7000', 'Pakistan', '2823', 'Pending', '2020-11-22 03:36:39', '2020-11-22 03:36:39'),
(5, '10', '7010', 0, 'waa', 'aa', 'wa', '031', 'aaa ', '22-11-2020', '10', '0', '0', '7000', 'Pakistan', '2823', 'Pending', '2020-11-22 03:36:45', '2020-11-22 03:36:45'),
(6, '10', '13710', 5000, 'waleed', 'ahmed', 'waleedahmed131997@gmail.com', '03174011206', 'home#883 osama block nishter colony ferozepur road lahore ', '22-11-2020', '10', '300', '0', '13700', 'Pakistan', '2823', 'Shipped', '2020-11-22 05:17:21', '2020-11-22 13:05:01');

-- --------------------------------------------------------

--
-- Table structure for table `dis_order_products`
--

CREATE TABLE `dis_order_products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `discount` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `discount_id` int(11) NOT NULL,
  `varient_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `qty` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `original_price` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `dis_order_products`
--

INSERT INTO `dis_order_products` (`id`, `order_id`, `product_id`, `discount`, `discount_id`, `varient_id`, `qty`, `price`, `original_price`, `created_at`, `updated_at`) VALUES
(1, '4', '37', '0', 0, '15', '1', '7000', '7000', '2020-11-22 03:36:39', '2020-11-22 03:36:39'),
(2, '6', '37', '0', 0, '15', '1', '7000', '7000', '2020-11-22 05:17:21', '2020-11-22 05:17:21'),
(3, '6', '37', '300', 0, '15', '1', '6700', '7000', '2020-11-22 05:17:21', '2020-11-22 05:17:21');

-- --------------------------------------------------------

--
-- Table structure for table `forgotpasswords`
--

CREATE TABLE `forgotpasswords` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `forgotpasswords`
--

INSERT INTO `forgotpasswords` (`id`, `email`, `token`, `status`, `created_at`, `updated_at`) VALUES
(1, 'waleedah.official@gmail.com', '8792', '0', '2020-11-25 01:51:59', '2020-11-25 01:51:59'),
(2, 'waleedah.official@gmail.com', '8377', '0', '2020-11-25 01:52:47', '2020-11-25 01:52:47'),
(3, 'waleedah.official@gmail.com', '1070', '0', '2020-11-25 01:53:23', '2020-11-25 01:53:23'),
(4, 'waleedah.official@gmail.com', '4651', '0', '2020-11-25 01:55:27', '2020-11-25 01:55:27'),
(5, 'waleedah.official@gmail.com', '1177', '0', '2020-11-25 01:56:14', '2020-11-25 01:56:14'),
(6, 'waleedah.official@gmail.com', '4574', '0', '2020-11-25 02:02:50', '2020-11-25 02:02:50'),
(7, 'waleedah.official@gmail.com', '7848', '0', '2020-11-25 02:06:36', '2020-11-25 02:06:36'),
(8, 'waleedah.official@gmail.com', '1352', '0', '2020-11-25 02:12:40', '2020-11-25 02:12:40'),
(9, 'waleedah.official@gmail.com', '7616', '0', '2020-11-25 02:13:21', '2020-11-25 02:13:21'),
(10, 'waleedah.official@gmail.com', '7773', '0', '2020-11-25 02:13:58', '2020-11-25 02:13:58'),
(11, 'waleedah.official@gmail.com', '6338', '0', '2020-11-25 02:17:55', '2020-11-25 02:17:55'),
(12, 'waleedah.official@gmail.com', '8403', '0', '2020-11-25 02:18:34', '2020-11-25 02:18:34'),
(13, 'waleedah.official@gmail.com', '5139', '0', '2020-11-25 02:19:01', '2020-11-25 02:19:01'),
(14, 'waleedah.official@gmail.com', '1582', '0', '2020-11-25 02:19:19', '2020-11-25 02:19:19'),
(15, 'waleedah.official@gmail.com', '7065', '0', '2020-11-25 02:21:03', '2020-11-25 02:21:03'),
(16, 'waleedah.official@gmail.com', '4069', '0', '2020-11-25 02:24:53', '2020-11-25 02:24:53'),
(17, 'waleedah.official@gmail.com', '5984', '0', '2020-11-25 02:32:38', '2020-11-25 02:32:38'),
(18, 'waleedah.official@gmail.com', '3744', '1', '2020-11-25 02:33:14', '2020-11-25 02:33:14');

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
(19, '2020_11_09_175656_discountcodes', 15),
(20, '2020_11_12_171038_automaticdiscounts', 16),
(21, '2020_11_12_173537_discountvariations', 17),
(22, '2020_11_21_132554_dis_carts', 18),
(23, '2020_11_22_064626_dis_orders', 19),
(24, '2020_11_22_065545_dis_order_products', 20),
(25, '2020_11_22_140244_sliderimages', 21),
(26, '2020_11_25_062631_forgotpasswords', 22),
(27, '2020_11_25_080103_dis_forgotpasswords', 23);

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
(13, '1', '12610', 'waleed', 'ahmed', 'waleedahmed131997@gmail.com', '03174011206', 'home#883 osama block nishter colony ferozepur road lahore ', '10-11-2020', '10', '400', '1', '13000', 'Pakistan', 'Pending', '2020-11-10 13:35:34', '2020-11-10 13:35:34', '2823'),
(14, '1', '18510', 'waleed', 'ahmed', 'waleedahmed131997@gmail.com', '03174011206', 'home#883 osama block nishter colony ferozepur road lahore ', '16-11-2020', '10', '500', '0', '18500', 'Pakistan', 'Pending', '2020-11-16 11:47:24', '2020-11-16 11:47:24', '2823'),
(15, '1', '18510', 'waleed', 'ahmed', 'waleedahmed131997@gmail.com', '03174011206', 'home#883 osama block nishter colony ferozepur road lahore ', '16-11-2020', '10', '500', '0', '18500', 'Pakistan', 'Pending', '2020-11-16 12:05:26', '2020-11-16 12:05:26', '2823'),
(16, '1', '18510', 'waleed', 'ahmed', 'waleedahmed131997@gmail.com', '03174011206', 'home#883 osama block nishter colony ferozepur road lahore ', '16-11-2020', '10', '500', '0', '18500', 'Pakistan', 'Pending', '2020-11-16 12:06:15', '2020-11-16 12:06:15', '2823'),
(17, '1', '18510', 'waleed', 'ahmed', 'waleedahmed131997@gmail.com', '03174011206', 'home#883 osama block nishter colony ferozepur road lahore ', '16-11-2020', '10', '500', '0', '18500', 'Pakistan', 'Pending', '2020-11-16 12:09:04', '2020-11-16 12:09:04', '2823'),
(18, '1', '18510', 'waleed', 'ahmed', 'waleedahmed131997@gmail.com', '03174011206', 'home#883 osama block nishter colony ferozepur road lahore ', '16-11-2020', '10', '500', '0', '18500', 'Pakistan', 'Pending', '2020-11-16 12:14:50', '2020-11-16 12:14:50', '2823'),
(19, '1', '7006', 'waleed', 'ahmed', 'waleedahmed131997@gmail.com', '03174011206', 'home#883 osama block nishter colony ferozepur road lahore ', '16-11-2020', '10', '4', '0', '6996', 'Pakistan', 'Completed', '2020-11-16 12:18:11', '2020-11-22 13:07:20', '2823'),
(20, '1', '5510', 'waleed', 'ahmed', 'waleedahmed131997@gmail.com', '03174011206', 'home#883 osama block nishter colony ferozepur road lahore ', '16-11-2020', '10', '500', '0', '5500', 'Pakistan', 'Processing', '2020-11-16 12:23:44', '2020-11-22 13:07:05', '2823'),
(21, '1', '7006', 'waleed', 'ahmed', 'waleedahmed131997@gmail.com', '03174011206', 'home#883 osama block nishter colony ferozepur road lahore ', '22-11-2020', '10', '4', '0', '6996', 'Pakistan', 'Pending', '2020-11-22 13:56:37', '2020-11-22 13:56:37', '2823'),
(22, '1', '510', 'waleed', 'ahmed', 'waleedahmed131997@gmail.com', '03174011206', 'home#883 osama block nishter colony ferozepur road lahore ', '22-11-2020', '10', '0', '0', '500', 'Pakistan', 'Pending', '2020-11-22 13:57:36', '2020-11-22 13:57:36', '2823');

-- --------------------------------------------------------

--
-- Table structure for table `order_products`
--

CREATE TABLE `order_products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `discount` int(11) NOT NULL DEFAULT 0,
  `discount_id` int(11) NOT NULL DEFAULT 0,
  `varient_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `qty` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `original_price` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `order_products`
--

INSERT INTO `order_products` (`id`, `order_id`, `product_id`, `discount`, `discount_id`, `varient_id`, `qty`, `price`, `original_price`, `created_at`, `updated_at`) VALUES
(1, '2', '34', 0, 0, '1', '1', '200', 0, '2020-10-12 06:31:27', '2020-10-12 06:31:27'),
(2, '3', '36', 0, 0, '14', '1', '6000', 0, '2020-10-12 06:43:34', '2020-10-12 06:43:34'),
(3, '3', '37', 0, 0, '15', '1', '7000', 0, '2020-10-12 06:43:34', '2020-10-12 06:43:34'),
(4, '3', '36', 0, 0, '14', '1', '6000', 0, '2020-10-12 06:43:34', '2020-10-12 06:43:34'),
(5, '4', '36', 0, 0, '14', '1', '6000', 0, '2020-10-12 07:21:09', '2020-10-12 07:21:09'),
(6, '4', '37', 0, 0, '15', '1', '7000', 0, '2020-10-12 07:21:09', '2020-10-12 07:21:09'),
(7, '4', '36', 0, 0, '14', '1', '6000', 0, '2020-10-12 07:21:09', '2020-10-12 07:21:09'),
(8, '4', '37', 0, 0, '15', '1', '7000', 0, '2020-10-12 07:21:09', '2020-10-12 07:21:09'),
(9, '5', '34', 0, 0, '31', '1', '1000', 0, '2020-10-16 06:32:05', '2020-10-16 06:32:05'),
(10, '5', '34', 0, 0, '31', '2', '2000', 0, '2020-10-16 06:32:05', '2020-10-16 06:32:05'),
(11, '6', '38', 0, 0, '16', '1', '500', 0, '2020-10-31 04:47:39', '2020-10-31 04:47:39'),
(12, '7', '38', 0, 0, '16', '1', '500', 0, '2020-10-31 04:55:49', '2020-10-31 04:55:49'),
(13, '8', '38', 0, 0, '16', '1', '500', 0, '2020-10-31 12:22:19', '2020-10-31 12:22:19'),
(14, '8', '37', 0, 0, '15', '1', '7000', 0, '2020-10-31 12:22:19', '2020-10-31 12:22:19'),
(15, '9', '37', 0, 0, '15', '1', '7000', 0, '2020-11-03 14:28:45', '2020-11-03 14:28:45'),
(16, '9', '36', 0, 0, '14', '1', '6000', 0, '2020-11-03 14:28:45', '2020-11-03 14:28:45'),
(17, '10', '37', 0, 0, '15', '1', '7000', 0, '2020-11-03 14:30:20', '2020-11-03 14:30:20'),
(18, '10', '36', 0, 0, '14', '1', '6000', 0, '2020-11-03 14:30:20', '2020-11-03 14:30:20'),
(19, '11', '37', 0, 0, '15', '1', '7000', 0, '2020-11-03 14:30:33', '2020-11-03 14:30:33'),
(20, '11', '36', 0, 0, '14', '1', '6000', 0, '2020-11-03 14:30:33', '2020-11-03 14:30:33'),
(21, '12', '37', 0, 0, '15', '1', '7000', 0, '2020-11-10 13:28:52', '2020-11-10 13:28:52'),
(22, '12', '36', 0, 0, '14', '1', '6000', 0, '2020-11-10 13:28:52', '2020-11-10 13:28:52'),
(23, '13', '37', 0, 0, '15', '1', '7000', 0, '2020-11-10 13:35:34', '2020-11-10 13:35:34'),
(24, '13', '36', 0, 0, '14', '1', '6000', 0, '2020-11-10 13:35:34', '2020-11-10 13:35:34'),
(25, '14', '37', 0, 0, '15', '1', '7000', 0, '2020-11-16 11:47:24', '2020-11-16 11:47:24'),
(26, '14', '36', 0, 0, '14', '1', '6000', 0, '2020-11-16 11:47:24', '2020-11-16 11:47:24'),
(27, '14', '36', 0, 0, '14', '1', '5500', 0, '2020-11-16 11:47:24', '2020-11-16 11:47:24'),
(28, '15', '37', 0, 0, '15', '1', '7000', 0, '2020-11-16 12:05:26', '2020-11-16 12:05:26'),
(29, '15', '36', 0, 0, '14', '1', '6000', 0, '2020-11-16 12:05:26', '2020-11-16 12:05:26'),
(30, '15', '36', 500, 5, '14', '1', '5500', 0, '2020-11-16 12:05:26', '2020-11-16 12:05:26'),
(31, '16', '37', 0, 0, '15', '1', '7000', 0, '2020-11-16 12:06:15', '2020-11-16 12:06:15'),
(32, '16', '36', 0, 0, '14', '1', '6000', 0, '2020-11-16 12:06:15', '2020-11-16 12:06:15'),
(33, '16', '36', 500, 5, '14', '1', '5500', 0, '2020-11-16 12:06:15', '2020-11-16 12:06:15'),
(34, '17', '37', 0, 0, '15', '1', '7000', 0, '2020-11-16 12:09:04', '2020-11-16 12:09:04'),
(35, '17', '36', 0, 0, '14', '1', '6000', 0, '2020-11-16 12:09:04', '2020-11-16 12:09:04'),
(36, '17', '36', 500, 5, '14', '1', '5500', 0, '2020-11-16 12:09:04', '2020-11-16 12:09:04'),
(37, '18', '37', 0, 0, '15', '1', '7000', 0, '2020-11-16 12:14:50', '2020-11-16 12:14:50'),
(38, '18', '36', 0, 0, '14', '1', '6000', 0, '2020-11-16 12:14:50', '2020-11-16 12:14:50'),
(39, '18', '36', 500, 5, '14', '1', '5500', 0, '2020-11-16 12:14:50', '2020-11-16 12:14:50'),
(40, '19', '37', 4, 5, '15', '1', '6996', 0, '2020-11-16 12:18:11', '2020-11-16 12:18:11'),
(41, '20', '36', 500, 5, '14', '1', '5500', 6000, '2020-11-16 12:23:44', '2020-11-16 12:23:44'),
(42, '21', '37', 4, 5, '15', '1', '6996', 7000, '2020-11-22 13:56:37', '2020-11-22 13:56:37'),
(43, '22', '38', 0, 5, '16', '1', '500', 500, '2020-11-22 13:57:36', '2020-11-22 13:57:36');

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
(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, '2020-10-17 01:14:08', '2020-11-23 12:48:22'),
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
(37, 'Spring Matress', '005', 'Dumy ProductDumy ProductDumy ProductDumy ProductDumy ProductDumy ProductDumy ProductDumy ProductDumy ProductDumy Product', 'size', 'Piece', '10', '7', '1', '1', '1', '1', '2020-10-11 20:37:17', '2020-11-14 13:00:23'),
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
(36, 52, 'ssg', 0, '2020-11-01 12:52:32', '2020-11-01 12:52:32'),
(37, 36, 'large', 7500, '2020-11-14 13:24:49', '2020-11-14 13:24:49');

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
-- Table structure for table `sliderimages`
--

CREATE TABLE `sliderimages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sliderimages`
--

INSERT INTO `sliderimages` (`id`, `image`, `created_at`, `updated_at`) VALUES
(2, '1606059807.png', '2020-11-22 09:15:58', '2020-11-22 10:43:28'),
(3, '1606059553.png', '2020-11-22 10:37:57', '2020-11-22 10:39:13'),
(4, '1606059566.png', '2020-11-22 10:39:27', '2020-11-22 10:39:27'),
(7, '1606059628.png', '2020-11-22 10:40:29', '2020-11-22 10:40:29');

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
-- Indexes for table `automaticdiscounts`
--
ALTER TABLE `automaticdiscounts`
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
-- Indexes for table `discountvariations`
--
ALTER TABLE `discountvariations`
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
-- Indexes for table `dis_carts`
--
ALTER TABLE `dis_carts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `dis_forgotpasswords`
--
ALTER TABLE `dis_forgotpasswords`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `dis_orders`
--
ALTER TABLE `dis_orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `dis_order_products`
--
ALTER TABLE `dis_order_products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `forgotpasswords`
--
ALTER TABLE `forgotpasswords`
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
-- Indexes for table `sliderimages`
--
ALTER TABLE `sliderimages`
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
-- AUTO_INCREMENT for table `automaticdiscounts`
--
ALTER TABLE `automaticdiscounts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `discountcodes`
--
ALTER TABLE `discountcodes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `discountvariations`
--
ALTER TABLE `discountvariations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `distributors`
--
ALTER TABLE `distributors`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `distributors_product_variations`
--
ALTER TABLE `distributors_product_variations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=112;

--
-- AUTO_INCREMENT for table `dis_carts`
--
ALTER TABLE `dis_carts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `dis_forgotpasswords`
--
ALTER TABLE `dis_forgotpasswords`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `dis_orders`
--
ALTER TABLE `dis_orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `dis_order_products`
--
ALTER TABLE `dis_order_products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `forgotpasswords`
--
ALTER TABLE `forgotpasswords`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `order_products`
--
ALTER TABLE `order_products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

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
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `sliderimages`
--
ALTER TABLE `sliderimages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

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
