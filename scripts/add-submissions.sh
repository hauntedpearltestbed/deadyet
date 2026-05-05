#!/usr/bin/env bash
set -e

cd "$(dirname "$0")/.."

if ! command -v npx &> /dev/null; then
  echo "npx not found. Make sure Node.js is installed."
  read -n 1 -s -r -p "Press any key to exit..."
  exit 1
fi

if [ -t 0 ]; then
  # Already running in a terminal
  npx tsx scripts/add-submissions.ts
else
  # Not in a terminal — open kitty
  if command -v kitty &> /dev/null; then
    kitty --title="Add Submissions — deadyet" bash -c "cd $(pwd) && npx tsx scripts/add-submissions.ts; echo ''; read -n 1 -s -r -p 'Press any key to close...'"
  else
    echo "No terminal emulator found. Please run: npx tsx scripts/add-submissions.ts"
    read -n 1 -s -r -p "Press any key to exit..."
    exit 1
  fi
fi
