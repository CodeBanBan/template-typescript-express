#!/bin/sh

CONTAINER_NAME="redis-test"
TEST_REDIS_PORT="16379"

docker stop "$CONTAINER_NAME"

docker run --rm --name "$CONTAINER_NAME" -d -p "$TEST_REDIS_PORT":6379 redis:8.0.2

RESULT=""
while [ "$RESULT" != "PONG" ]; do
  echo "=> Waiting for confirmation of Redis service startup ==> $RESULT"
  sleep 2
  RESULT=$(docker exec "$CONTAINER_NAME" redis-cli ping 2>/dev/null)
done
