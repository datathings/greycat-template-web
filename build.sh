#!/bin/bash
set -e

GREYCAT_CORE_BRANCH=${1:-"dev"}
GREYCAT_CORE_MAJOR=${2:-"6.3"}
GREYCAT_CORE_VERSION=${3:-"6.3.76-dev"}

curl -qsL https://get.greycat.io/files/core/${GREYCAT_CORE_BRANCH}/x86-linux/${GREYCAT_CORE_MAJOR}/${GREYCAT_CORE_VERSION}.zip -o tmp.zip \
  && unzip -d greycat -oqq tmp.zip \
  && rm tmp.zip
PATH="$PATH:./greycat/bin"

greycat test

pnpm install
pnpm build

# cleanup
rm -rf ./greycat