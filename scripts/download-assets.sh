#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
mkdir -p "$ROOT/public/images"
curl -L --fail --retry 3 -o "$ROOT/public/images/plaza-espana-hero.jpg" 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Plaza_Espa%C3%B1a%2C_C%C3%B3rdoba%2C_Argentina.jpg'
curl -L --fail --retry 3 -o "$ROOT/public/images/plaza-espana-2007.jpg" 'https://upload.wikimedia.org/wikipedia/commons/5/58/Plaza_Espa%C3%B1a_en_C%C3%B3rdoba_2007-08-08.jpg'
curl -L --fail --retry 3 -o "$ROOT/public/images/plaza-espana-mmau-night.jpg" 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Plaza_Espa%C3%B1a_y_MmAU_Noche.jpg'
file "$ROOT"/public/images/*
