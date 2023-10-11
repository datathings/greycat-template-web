#!/bin/bash
set -e

GREYCAT_CORE_MAJOR=${1:-"6.3"}
GREYCAT_CORE_VERSION=${2:-"6.3.76-dev"}
GREYCAT_CORE_BRANCH=${3:-"dev"}

curl -qsL https://get.greycat.io/files/core/${GREYCAT_CORE_BRANCH}/x86-linux/${GREYCAT_CORE_MAJOR}/${GREYCAT_CORE_VERSION}.zip -o tmp.zip \
  && unzip -d greycat -oqq tmp.zip \
  && rm tmp.zip
PATH="$PATH:./greycat/bin"

greycat test

pnpm install
pnpm build

# cleanup
rm -rf ./greycat