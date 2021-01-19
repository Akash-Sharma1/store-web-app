#!/bin/sh
mvn -f $TRAVIS_BUILD_DIR/Backend/store/pom.xml clean install
mvn -f $TRAVIS_BUILD_DIR/Backend/store/pom.xml spring-boot:run