#!/bin/sh
# Renders banner.html to a 2400x1200 PNG (1200x600 CSS px at 2x), then a 1600px JPEG for
# the email (much lighter than the PNG), into ../assets and the hosted folder.
cd "$(dirname "$0")"
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless=new --disable-gpu --hide-scrollbars \
  --window-size=1200,600 --force-device-scale-factor=2 \
  --virtual-time-budget=6000 \
  --screenshot="${TMPDIR:-/tmp}/afore-banner.png" "file://$PWD/banner.html" 2>/dev/null
sips -s format jpeg -s formatOptions 82 -Z 1600 "${TMPDIR:-/tmp}/afore-banner.png" --out ../assets/banner-v3.jpg >/dev/null
mkdir -p ../../../hosted/afore-fireside-2026
cp ../assets/banner-v3.jpg ../../../hosted/afore-fireside-2026/banner-v3.jpg
sips -g pixelWidth -g pixelHeight ../assets/banner-v3.jpg | tail -2
ls -lh ../assets/banner-v3.jpg | awk '{print $5}'
