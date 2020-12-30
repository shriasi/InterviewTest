# InterviewTest

Test  Date : 30 / 12 /2020

Name : Shrimali Senevirathna

Institute : SLIIT

Simple Login with React and PHP + MySql

commands

````
**create react app

npx create-react-app myapp


**Routing

npm install react-router-dom

**Alert and linkify

npm install react-confirm-alert
npm install react-linkify


**run app

npm start

**Create database
Create DATABASE `Exam`;

use `Exam`;

** create table
Table structure for table `User`
CREATE TABLE `User` (
  `id` bigint NOT NULL,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `auth_key` varchar(32) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `pswdFailedAttempts` int DEFAULT NULL,
  `password` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `password_hash` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `password_reset_token` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `verification_token` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `createdUser` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `updatedUser` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `createdTime` datetime NOT NULL,
  `updatedTime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
COMMIT;

** Connect mysql database create
 1).htaccess file
 2) config.php
 3) index.php

````
