#!/bin/bash

set -e

stage=${1:-dev}

deps=(
  'shared_utils' 
)

services=(
  'database'
  'uploads'
  'topics'
  'app-api'
  'ui'
  'ui-auth'
  'ui-src'
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

prepare_service() {
  service=$1
  pushd services/$service
  install_deps
  popd
}

install_deps
export PATH=$(pwd)/node_modules/.bin/:$PATH

concat=("${deps[@]}" "${services[@]}")
for i in "${concat[@]}"
do
	prepare_service $i
done

serverless deploy --stage $stage

pushd services
echo """
------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------
Application endpoint:  `./output.sh ui CloudFrontEndpointUrl $stage`
------------------------------------------------------------------------------------------------
"""
popd
