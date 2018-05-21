-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-03-06 08:16:46
-- 服务器版本： 10.1.19-MariaDB
-- PHP Version: 5.5.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `yuanning`
--

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE `user` (
  `id` int(9) NOT NULL COMMENT '用户id',
  `nickName` varchar(20) NOT NULL COMMENT '用户昵称',
  `tel` varchar(255) NOT NULL COMMENT '手机号码',
  `pwd` varchar(255) NOT NULL COMMENT '密码',
  `role` tinyint(2) NOT NULL COMMENT '角色',
  `createTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` tinyint(2) NOT NULL COMMENT '状态'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='用户';

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `nickName`, `tel`, `pwd`, `role`, `createTime`, `status`) VALUES
(1, '76D33A8E-2A51-4CFC-0', '', '', 0, '2017-03-01 12:22:02', 1),
(2, 'ytaPq9', '', '', 0, '2017-03-01 12:22:02', 1),
(3, 'tiwJcQ', '', '', 0, '2017-03-01 12:22:02', 1),
(4, 'VJANvM', '', '', 0, '2017-03-01 12:22:02', 1),
(5, 'c8MCzT', '', '', 0, '2017-03-01 12:22:02', 1),
(6, 'maxE0k', '', '', 0, '2017-03-01 12:22:02', 1),
(7, '游客-UJzyBa', '', '', 0, '2017-03-01 12:22:02', 1),
(8, '游客-PGQ7Em', '', '', 0, '2017-03-01 12:22:02', 1),
(9, '游客-PIshwH', '', '', 0, '2017-03-01 12:22:02', 1),
(10, '游客-cUjVm4', '', '', 0, '2017-03-01 12:22:02', 1),
(11, '游客-TjQ0QC', '', '', 0, '2017-03-01 12:22:02', 1),
(12, '游客-0SToMV', '', '', 0, '2017-03-01 12:22:02', 1),
(13, '游客-DRRFOV', '', '', 0, '2017-03-01 12:22:02', 1),
(14, '游客-FrwaDk', '', '', 0, '2017-03-01 12:22:02', 1),
(15, '游客-dG4SET', '', '', 0, '2017-03-01 12:22:02', 1),
(16, '游客-jKUNpy', '', '', 0, '2017-03-01 12:22:02', 1),
(17, '游客-ppHUdK', '', '', 0, '2017-03-01 12:22:02', 1),
(18, '游客-Y6dKrJ', '', '', 0, '2017-03-01 12:22:02', 1),
(19, '游客-wU9WOu', '', '', 0, '2017-03-01 12:22:02', 1),
(20, '游客-hX5jRZ', '', '', 0, '2017-03-01 12:22:02', 1),
(21, 'P38Koc', '', '', 0, '2017-03-01 12:22:02', 1),
(22, 'vAX9NL', '', '', 0, '2017-03-01 12:22:02', 1),
(23, 'LWFiaH', '', '', 0, '2017-03-01 12:22:02', 1),
(24, '3sEyqh', '', '', 0, '2017-03-01 12:22:02', 1),
(25, 'kevenfeng', '18627959680', '123456', 3, '2017-03-01 12:22:02', 1),
(26, 'mpicLO', '', '', 0, '2017-03-01 12:22:02', 1),
(27, 'Z2qP4R', '', '', 0, '2017-03-01 12:22:02', 1),
(28, '8aI8tn', '', '', 0, '2017-03-01 12:22:02', 1),
(29, '1ECgE6', '', '', 0, '2017-03-01 12:22:02', 1),
(30, 'NUfl00', '', '', 0, '2017-03-01 12:22:02', 1),
(31, 'M4nPN6', '', '', 0, '2017-03-01 12:22:02', 1),
(32, 'qaz9Pr', '', '', 0, '2017-03-01 12:22:02', 1),
(33, 'JOkbLS', '', '', 0, '2017-03-01 12:22:02', 1),
(34, '9ElxeC', '', '', 0, '2017-03-01 12:22:02', 1),
(35, '8SAJmC', '', '', 0, '2017-03-01 12:22:02', 1),
(36, '''9gtonA''', '', '', 0, '2017-03-01 12:22:02', 1),
(37, '''gnUS9v''', '', '', 0, '2017-03-01 12:22:02', 1),
(38, '''gnBltw''', '', '', 0, '2017-03-01 12:22:02', 1),
(39, '''7P4ME1''', '', '', 0, '2017-03-01 12:22:02', 1),
(40, '''8LlKnd''', '', '', 0, '2017-03-01 12:22:02', 1),
(41, '''k1Et0X''', '', '', 0, '2017-03-01 12:22:02', 1),
(42, 'asD5jD', '', '', 0, '2017-03-01 12:22:02', 1),
(43, 'n9lXwR', '', '', 0, '2017-03-01 12:24:29', 1),
(44, '02HlVC', '', '', 0, '2017-03-02 01:50:14', 1),
(45, 'mEt3To', '', '', 0, '2017-03-02 02:01:57', 1),
(46, 'm4jm9e', '', '', 0, '2017-03-02 02:30:00', 1),
(47, 'vkFIgX', '', '', 0, '2017-03-06 03:49:54', 1);

-- --------------------------------------------------------

--
-- 表的结构 `ynstockuser`
--

CREATE TABLE `ynstockuser` (
  `id` int(9) NOT NULL,
  `stock` varchar(50) NOT NULL,
  `tel` varchar(50) NOT NULL,
  `createTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`);

--
-- Indexes for table `ynstockuser`
--
ALTER TABLE `ynstockuser`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `user`
--
ALTER TABLE `user`
  MODIFY `id` int(9) NOT NULL AUTO_INCREMENT COMMENT '用户id', AUTO_INCREMENT=48;
--
-- 使用表AUTO_INCREMENT `ynstockuser`
--
ALTER TABLE `ynstockuser`
  MODIFY `id` int(9) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
