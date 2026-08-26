#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
mkdir -p "$ROOT/public/images"
curl -L --fail --retry 3 -o "$ROOT/public/images/plaza-espana-2010.jpg" 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Plaza_Espa%C3%B1a%2C_C%C3%B3rdoba%2C_Argentina.jpg'
curl -L --fail --retry 3 -o "$ROOT/public/images/plaza-espana-1980.jpg" 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Plaza_Espa%C3%B1a_%28C%C3%B3rdoba%2C_Argentina%29.JPG'
curl -L --fail --retry 3 -o "$ROOT/public/images/plaza-espana-2007.jpg" 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Plaza%20Espa%C3%B1a%20en%20C%C3%B3rdoba%202007-08-08.jpg'
file "$ROOT"/public/images/*
