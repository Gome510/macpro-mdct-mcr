#!/bin/bash

set -e

deps=(
  'shared_utils' 
)

services=(
  'ui-src'
  'app-api'
)

install_deps() {
  if [ "$CI" == "true" ]; then # If we're in a CI system
    if [ ! -d "node_modules" ]; then # If we don't have any node_modules (CircleCI cache miss scenario), run yarn install --frozen-lockfile.  Otherwise, we're all set, do nothing.
      yarn install --frozen-lockfile
    fi
  else # We're not in a CI system, let's yarn install
    yarn install
  fi
}

unit_test() {
  service=$1
  pushd services/$service
  install_deps
  if [[ ! " ${deps[*]} " =~ " ${service} " ]]; then
    yarn run coverage
  fi
  popd
}

install_deps
export PATH=$(pwd)/node_modules/.bin/:$PATH

concat=("${deps[@]}" "${services[@]}")
for i in ${concat[@]}
do
	unit_test $i
done
