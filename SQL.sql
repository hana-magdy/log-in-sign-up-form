CREATE TABLE `user` ( `user_id` int(20) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Name` varchar(30) NOT NULL,
  `Password` varchar(100) NOT NULL,
  `Reg_Date` timestamp NOT NULL DEFAULT current_timestamp() )



CREATE TABLE `department` ( `Id` int(20) NOT NULL,
 `DName` varchar(30) NOT NULL,
 `Description` varchar(300) NOT NULL )

INSERT INTO `department` (`Id`, `DName`, `Description`) 
  VALUES (NULL, 'Department 1 ', 'Description of department 1.');

INSERT INTO `department` (`Id`, `DName`, `Description`) 
  VALUES (NULL, 'Department 2', 'Description of department 2.');

INSERT INTO `department` (`Id`, `DName`, `Description`) 
  VALUES (NULL, 'Department 3 ', 'Description of department 3.');

INSERT INTO `department` (`Id`, `DName`, `Description`) 
  VALUES (NULL, 'Department 4 ', 'Description of department 4.');

INSERT INTO `department` (`Id`, `DName`, `Description`) 
  VALUES (NULL, 'Department 5 ', 'Description of department 5.');

INSERT INTO `department` (`Id`, `DName`, `Description`) 
  VALUES (NULL, 'Department 6 ', 'Description of department 6.');

INSERT INTO `department` (`Id`, `DName`, `Description`) 
  VALUES (NULL, 'Department 7 ', 'Description of department 7.');



