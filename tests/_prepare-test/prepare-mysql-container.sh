#!/bin/sh

CONTAINER_NAME="mysql-test"
TEST_MYSQL_PORT="9336"
DB1_NAME="main_test"
DB2_NAME="logger_test"

docker stop "$CONTAINER_NAME"
### For Intel Chip
#docker run --rm --name "$CONTAINER_NAME" -e MYSQL_ROOT_PASSWORD=root -d -p "TEST_MYSQL_PORT":3306 mysql:8.0.33 --default-authentication-plugin=mysql_native_password --sql-mode=""
### For Apple Chip
docker run --rm --platform linux/amd64 --name "$CONTAINER_NAME" -e MYSQL_ROOT_PASSWORD=root -d -p "$TEST_MYSQL_PORT":3306 mysql:8.0.33 --default-authentication-plugin=mysql_native_password --sql-mode=""

RET=1
while [[ RET -ne 0 ]]; do
    echo "=> Waiting for confirmation of MySQL service startup"
    sleep 2
    docker exec "$CONTAINER_NAME" sh -c 'mysql -uroot -proot -e "status" > /dev/null 2>&1'
    RET=$?
done

echo "=> Check datbase: $DB1_NAME"
if ! docker exec "$CONTAINER_NAME" sh -c "mysql -uroot -proot -e 'use \`$DB1_NAME\`' > /dev/null 2>&1"; then
  docker exec "$CONTAINER_NAME" sh -c "mysql -u root -proot -e 'CREATE DATABASE \`$DB1_NAME\`' > /dev/null 2>&1"
  echo "==> $DB1_NAME: created."
fi

echo "=> Check datbase: $DB2_NAME"
if ! docker exec "$CONTAINER_NAME" sh -c "mysql -uroot -proot -e 'use \`$DB2_NAME\`' > /dev/null 2>&1"; then
  docker exec "$CONTAINER_NAME" sh -c "mysql -u root -proot -e 'CREATE DATABASE \`$DB2_NAME\`' > /dev/null 2>&1"
  echo "==> $DB2_NAME: created."
fi
