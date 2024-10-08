#!/bin/sh
# This script is run from package.json

# Fail at first failure
set -e

ROOT="."
PUBLIC="$ROOT/public"
SOURCE_CNAME="$ROOT/CNAME"
# SOURCE_ASSETS="$ROOT/content/assets/site"
# DEST_ASSETS="$PUBLIC/assets"

# Handle assets
# echo "copying assets..."
# mkdir -p $DEST_ASSETS && cp -r $SOURCE_ASSETS $DEST_ASSETS

# Handle CNAME
echo "copying CNAME..."
mkdir public || echo ""
cp $SOURCE_CNAME "$PUBLIC/CNAME"
echo "copy completed."
