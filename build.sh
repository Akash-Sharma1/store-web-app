#!/bin/sh
mvn -f $TRAVIS_BUILD_DIR/backend/store/pom.xml clean install
mvn -f $TRAVIS_BUILD_DIR/backend/store/pom.xml spring-boot:run