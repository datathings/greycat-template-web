#!/bin/bash
set -e

GREYCAT_CORE_BRANCH=${1:-"dev"}
GREYCAT_CORE_MAJOR=${2:-"6.3"}
GREYCAT_CORE_VERSION=${3:-"6.3.76-dev"}
GREYCAT_LANG_VERSION=${4:-"6.3.5-dev"}

# install greycat
curl -qsL https://get.greycat.io/files/core/${GREYCAT_CORE_BRANCH}/x86-linux/${GREYCAT_CORE_MAJOR}/${GREYCAT_CORE_VERSION}.zip -o tmp.zip &&
  unzip -d greycat -oqq tmp.zip &&
  rm tmp.zip
# install greycat-lang
curl -qsL https://get.greycat.io/files/lang/${GREYCAT_CORE_BRANCH}/${GREYCAT_CORE_MAJOR}/${GREYCAT_LANG_VERSION}.zip -o tmp.zip &&
  unzip -d /tmp/greycat -oqq tmp.zip &&
  rm tmp.zip
PATH="$PATH:/tmp/greycat/bin"

pnpm install
pnpm lint
pnpm test
pnpm build

# cleanup
rm -rf /tmp/greycat
