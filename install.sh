#!/bin/bash
set -e
GREYCAT_DIR=${GREYCAT_HOME:-"$HOME/.greycat"}
GREYCAT_ARCH="x86"
if [[ $(uname -m) == 'arm64' ]]; then
    GREYCAT_ARCH="arm"
fi
GREYCAT_OS="linux"
if [[ $(uname) == 'Darwin' ]]; then
    GREYCAT_OS="apple"
fi
GREYCAT_TARGET="${GREYCAT_ARCH}-${GREYCAT_OS}"
GREYCAT_CORE_VERSION="dev/${GREYCAT_TARGET}/6.3/6.3.86-dev"
GREYCAT_LANG_VERSION="dev/6.3/6.3.5-dev"
GREYCAT_EXPLORER_VERSION="dev/6.3/6.3.33-dev"
curl -qsL https://get.greycat.io/files/core/${GREYCAT_CORE_VERSION}.zip -o tmp.zip && unzip -d ${GREYCAT_DIR} -oqq tmp.zip && rm tmp.zip
curl -qsL https://get.greycat.io/files/lang/${GREYCAT_LANG_VERSION}.zip -o tmp.zip && unzip -d ${GREYCAT_DIR} -oqq tmp.zip && rm tmp.zip
curl -qsL https://get.greycat.io/files/apps/explorer/${GREYCAT_EXPLORER_VERSION}.zip -o tmp.zip && unzip -d "$GREYCAT_DIR" -oqq tmp.zip && rm tmp.zip
