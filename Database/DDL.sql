CREATE DATABASE `testdb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

CREATE TABLE `patient` (
  `pid` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `suburb` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `post_code` varchar(255) DEFAULT NULL,
  `phone_no` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`pid`)
) ENGINE=MyISAM AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;


INSERT INTO `patient` (`first_name`, `last_name`, `address`, `suburb`, `state`, `post_code`, `phone_no`) VALUES
('ADE', 'MAISAL', 'Jakarta Street', 'Jakarta Suburb', 'Indonesia', '11111', '098765655'),
('ADE1', 'MAISAL1', 'Jakarta Street1', 'Jakarta Suburb1', 'Indonesia1', '22222', '0987656551');
COMMIT;