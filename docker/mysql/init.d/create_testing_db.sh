#!/bin/sh

mysql -u root -proot < /docker-entrypoint-initdb.d/create_testing_db.sql