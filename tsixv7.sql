-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.30 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping data for table tsix.categories: ~6 rows (approximately)
INSERT IGNORE INTO `categories` (`id_cate`, `name_cate`, `slug`, `createdAt`, `updatedAt`) VALUES
	(0, 'Khác', 'khac', '2023-11-14 10:17:12', '2023-11-14 10:17:12'),
	(17, 'Bàn', 'ban', '2023-11-09 07:20:03', '2023-11-09 07:20:03'),
	(18, 'Ghế', 'ghe', '2023-11-09 07:20:07', '2023-11-09 07:20:07'),
	(19, 'Giường', 'giuong', '2023-11-09 07:20:18', '2023-11-09 07:20:18'),
	(20, 'Tủ', 'tu', '2023-11-09 07:20:30', '2023-11-09 07:20:30'),
	(21, 'Trang trí', 'trang-tri', '2023-11-09 07:20:40', '2023-11-09 07:20:40');

-- Dumping data for table tsix.images: ~8 rows (approximately)
INSERT IGNORE INTO `images` (`id_pd`, `url`, `alt`, `filename`, `createdAt`, `updatedAt`) VALUES
	(12, 'https://res.cloudinary.com/tsix-project/image/upload/v1700041963/tsix/rfn0lagnf8t3o1qke6mg.jpg', 'gojoo_img_0', 'tsix/rfn0lagnf8t3o1qke6mg', '2023-11-15 09:52:45', '2023-11-15 09:52:45'),
	(12, 'https://res.cloudinary.com/tsix-project/image/upload/v1700041964/tsix/ofp4fgnqfg8ezj0k0ukg.jpg', 'gojoo_img_1', 'tsix/ofp4fgnqfg8ezj0k0ukg', '2023-11-15 09:52:45', '2023-11-15 09:52:45'),
	(14, 'https://res.cloudinary.com/tsix-project/image/upload/v1700042082/tsix/x0y6thmi6e74ozsgwlxa.jpg', 'a_img_0', 'tsix/x0y6thmi6e74ozsgwlxa', '2023-11-15 09:54:43', '2023-11-15 09:54:43'),
	(14, 'https://res.cloudinary.com/tsix-project/image/upload/v1700042082/tsix/mff4djjpdatsmngufmim.jpg', 'a_img_1', 'tsix/mff4djjpdatsmngufmim', '2023-11-15 09:54:43', '2023-11-15 09:54:43'),
	(18, 'https://res.cloudinary.com/tsix-project/image/upload/v1700738190/tsix/zxuczxxnvudokzmswwvz.jpg', 'du_img_0', 'tsix/zxuczxxnvudokzmswwvz', '2023-11-23 11:16:30', '2023-11-23 11:16:30'),
	(15, 'https://res.cloudinary.com/tsix-project/image/upload/v1700738345/tsix/lr8azy9wc1wy3tptf40r.png', 'ban-go-nho_img_0', 'tsix/lr8azy9wc1wy3tptf40r', '2023-11-23 11:19:04', '2023-11-23 11:19:04'),
	(15, 'https://res.cloudinary.com/tsix-project/image/upload/v1700738345/tsix/zfmdyjpdikswygi7js6l.png', 'ban-go-nho_img_1', 'tsix/zfmdyjpdikswygi7js6l', '2023-11-23 11:19:04', '2023-11-23 11:19:04'),
	(15, 'https://res.cloudinary.com/tsix-project/image/upload/v1700738345/tsix/dmhch6puhtgrn605xtgq.png', 'ban-go-nho_img_2', 'tsix/dmhch6puhtgrn605xtgq', '2023-11-23 11:19:04', '2023-11-23 11:19:04');

-- Dumping data for table tsix.orders: ~0 rows (approximately)

-- Dumping data for table tsix.order_details: ~0 rows (approximately)

-- Dumping data for table tsix.posts: ~2 rows (approximately)
INSERT IGNORE INTO `posts` (`id_post`, `id_user`, `title`, `image`, `content`, `slug`, `createdAt`, `updatedAt`) VALUES
	(1, 'lofqh50r', 'Ghế thứ 5 nè', 'https://res.cloudinary.com/tsix-project/image/upload/v1700734732/tsix/qxsnz8ktjtz1n3297nxj.jpg', 'beafutifullllllllllllllll', 'ghe-thu-5-ne', '2023-11-23 10:18:51', '2023-11-23 10:18:51'),
	(3, 'lofqh50r', 'bai viet moi', 'https://res.cloudinary.com/tsix-project/image/upload/v1701262805/tsix/aldf5idda2sud0dmgfxc.jpg', 'dong ho', 'bai-viet-moi', '2023-11-29 13:00:04', '2023-11-29 13:00:04');

-- Dumping data for table tsix.products: ~4 rows (approximately)
INSERT IGNORE INTO `products` (`id_pd`, `id_subcate`, `name_pd`, `image`, `price`, `material`, `size`, `brand`, `description`, `inventory`, `slug`, `createdAt`, `updatedAt`) VALUES
	(10, 5, 'Sản phẩm thuộc bàn ăn edit  2', 'https://res.cloudinary.com/tsix-project/image/upload/v1700041911/tsix/gvvnlcimsrjmvcs6ocle.jpg', 12000000, 'nước', '1m5', 'mèo', 'test độ dài: \r\nNot shared. Only administrators can manage this folder.Upload the first asset in this folder\r\nDrag and drop to add assets, or use the Upload button for more options.Not shared. Only administrators can manage this folder.Upload the first asset in this folder\r\nDrag and drop to add assets, or use the Upload button for more options.Not shared. Only administrators can manage this folder.Upload the first asset in this folder\r\nDrag and drop to add assets, or use the Upload button for more options.Not shared. Only administrators can manage this folder.Upload the first asset in this folder\r\nDrag and drop to add assets, or use the Upload button for more options. test độ dài . test độ dài . test độ dài. test độ dài. test độ dài. test độ dài', 55, 'san-pham-thuoc-ban-an-edit-2', '2023-11-09 08:50:17', '2023-11-29 12:57:39'),
	(12, 8, 'Bàn học', 'https://res.cloudinary.com/tsix-project/image/upload/v1700041990/tsix/ck2twbbgv6wigt6fpxha.webp', 12, '123', '123', '312', 'saaaaaaaa 21 2e2e ', 6, 'ban-hoc', '2023-11-10 04:01:51', '2023-11-15 09:53:11'),
	(14, 6, 'Bàn gỗ ', 'https://res.cloudinary.com/tsix-project/image/upload/v1701263857/tsix/il2v9cuxyin1xncjgu0u.jpg', 12, 'gỗ ', '2m8', 'Gỗ T-six', 'bàn bàn bànnnnnnn', 2, 'ban-go-', '2023-11-12 14:36:11', '2023-11-29 13:17:35'),
	(15, 5, 'Bàn gỗ nhỏ', 'https://res.cloudinary.com/tsix-project/image/upload/v1700042188/tsix/ycfzhsn8hui3omcnpq7s.jpg', 0, '666', '666m', 't6', 'fsef', 5, 'ban-go-nho', '2023-11-12 14:36:15', '2023-11-23 11:19:04');

-- Dumping data for table tsix.subcategories: ~6 rows (approximately)
INSERT IGNORE INTO `subcategories` (`id_subcate`, `name_subcate`, `slug`, `id_cate`, `createdAt`, `updatedAt`) VALUES
	(5, 'bàn ăn', 'ban-an', 17, '2023-11-09 07:42:10', '2023-11-09 07:42:10'),
	(6, 'bàn làm việc update', 'ban-lam-viec-update', 17, '2023-11-09 07:42:27', '2023-11-14 09:12:08'),
	(7, 'Ghế làm việc 2', 'ghe-lam-viec', 18, '2023-11-09 07:42:39', '2023-11-14 09:09:27'),
	(8, 'Ghế gỗ', 'ghe-go', 18, '2023-11-09 07:42:44', '2023-11-09 07:42:44'),
	(9, 'Ghế nhựa', 'ghe-nhua', 18, '2023-11-09 07:42:50', '2023-11-09 07:42:50'),
	(13, 'new trang tri', 'new-trang-tri', 21, '2023-11-14 09:15:06', '2023-11-14 09:15:06');

-- Dumping data for table tsix.users: ~11 rows (approximately)
INSERT IGNORE INTO `users` (`id_user`, `name`, `phone`, `address`, `email`, `password`, `role`, `status`, `createdAt`, `updatedAt`) VALUES
	('lofqh50r', 'hoang admin', '0222222222', 'mk 1', 'hoang', '$2a$10$kvf9FrnzBn5Nd/2TjvNzZeS34DLzIvnY3CVFu5GfxgfBFsob5Uxfe', 2, 0, '2023-11-01 12:28:04', '2023-11-23 09:54:12'),
	('logom3jg', NULL, NULL, NULL, 'ngochoang27810@gmail.com', '$2a$10$dLY2PsNgXmOnhvcAW4yk9uDmoNMvQ8csLGQ/3gAacYNw/AgscHFa6', 0, 0, '2023-11-02 04:23:42', '2023-11-15 06:21:01'),
	('logp0dvt', 'dinh hoang', '0999922222', 'vn', 'hoang2@gmail.com', '$2a$10$Pt7co8cACK/.3POFfrlYz.uFZ.svOkKovLSCzlyrgjmTRUNNcqsGy', 0, 0, '2023-11-02 04:34:49', '2023-11-29 13:07:22'),
	('logw1vzq', 'Huy', '09999999', 'Việt Nam', 'huy@gmail.com', '$2a$10$lc4O0FJxg40fo2YsIo6wa.yea8bNilcAjt/kxQZ9RbXQVt/RDkiDe', 1, -1, '2023-11-02 07:51:56', '2023-11-29 13:07:14'),
	('lok3xqdz', NULL, NULL, NULL, 'hoang3', '$2a$10$uq7XawS9IeRP/otDtbnKRupP4UeMiJQ/dKfKhI8gwl8HpoMN/cijO', 1, -1, '2023-11-04 13:55:58', '2023-11-14 09:35:29'),
	('lok462z2', 'h', NULL, NULL, 'hoang4', '$2a$10$pNEbBCjM8y63l.KwWd5c8OZ5b.VQaNe7TgatuNQEb1/TZ6WpRl2ry', 2, 0, '2023-11-04 14:02:27', '2023-11-04 14:02:27'),
	('lozd9w59', 'Admin', '0000000001', 'da nang', 'anotheradmin@gmail.com', '$2a$10$DEAfA8uUaCY6hJq6zrt34uZZNnpNJDEmOeFbjR5j75s2Z4oWjKMtq', 2, 0, '2023-11-15 06:13:54', '2023-11-15 06:13:54'),
	('lozdkbfy', 'Nhân viên hoàng', '0512612', 'mk 123', 'hoangnv@gmail.com', '$2a$10$YBvNhQqE2/GGwq2XrY4sZOW.M42K1suNpOSNBkEiVAjewpkas9ffm', 0, 0, '2023-11-15 06:22:01', '2023-11-29 13:08:55'),
	('lozi12fc', 'khách', '123', 'vn', 'khachhang@gmail.com', '$2a$10$KRuERpMi8F1YrZRQiDxkM.uQ83RaFWK3sRTVv1w.a/5t0YtWMoPGu', 0, 0, '2023-11-15 08:27:01', '2023-11-15 08:27:01'),
	('lozk2vly', 'last test', NULL, NULL, 'test@gmail.com', '$2a$10$2jmIMQEisKvWjno5LZBS0uZG.5UsxUTTIW.R77t4p2MOq/sltJZGi', 0, 0, '2023-11-15 09:24:24', '2023-11-15 09:24:24'),
	('lpcpevgv', '123@', NULL, NULL, '123@1', '$2a$10$//e/45Q9jvEEygOu7px8du6OREs7aqGOwDHr2JSZQGPinPHuRI9iO', 0, 0, '2023-11-24 14:14:42', '2023-11-24 14:14:42');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
