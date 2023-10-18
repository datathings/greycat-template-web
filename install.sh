#!/bin/bash
set -e
GREYCAT_DIR=${GREYCAT_HOME:-"$HOME/.greycat"}
GREYCAT_ARCH="x64"
if [[ $(uname -m) == 'arm64' ]]; then
    GREYCAT_ARCH="arm64"
fi
GREYCAT_OS="linux"
if [[ $(uname) == 'Darwin' ]]; then
    GREYCAT_OS="apple"
fi
GREYCAT_TARGET="${GREYCAT_ARCH}-${GREYCAT_OS}"
GREYCAT_BRANCH="dev"
GREYCAT_CORE_VERSION="6.4/6.4.28-dev"
GREYCAT_LANG_VERSION="6.4/6.4.3-dev"
GREYCAT_EXPLORER_VERSION="6.4/6.4.6-dev"
GREYCAT_CORE_VERSION_ARCH=$(printf "${GREYCAT_CORE_VERSION}" | sed "s/\//\/${GREYCAT_TARGET}\//")
curl -qsL https://get.greycat.io/files/core/${GREYCAT_BRANCH}/${GREYCAT_CORE_VERSION_ARCH}.zip -o tmp.zip && unzip -d ${GREYCAT_DIR} -oqq tmp.zip && rm tmp.zip
curl -qsL https://get.greycat.io/files/lang/${GREYCAT_BRANCH}/${GREYCAT_LANG_VERSION}.zip -o tmp.zip && unzip -d ${GREYCAT_DIR} -oqq tmp.zip && rm tmp.zip
curl -qsL https://get.greycat.io/files/apps/explorer/${GREYCAT_BRANCH}/${GREYCAT_EXPLORER_VERSION}.zip -o tmp.zip && unzip -d "$GREYCAT_DIR" -oqq tmp.zip && rm tmp.zip
