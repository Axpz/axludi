#!/bin/bash

REMOTE_USER="root"
REMOTE_HOST="139.196.151.26"
REMOTE_DIR="/tmp"

images=(
  "g-frontend-linux-amd64:latest"
)

# 如果传入参数，则用参数作为镜像列表，否则用默认的 images 数组
if [ "$#" -gt 0 ]; then
  images=("$@")
fi

for image in "${images[@]}"; do
  file_name=$(echo "$image" | sed 's/:/_/g' | sed 's/\//_/g').tar
  echo "Saving image $image to $file_name"
  docker save -o "$file_name" "$image"
  echo "Copying $file_name to $REMOTE_USER@$REMOTE_HOST:$REMOTE_DIR/"
  scp "$file_name" "$REMOTE_USER@$REMOTE_HOST:$REMOTE_DIR/"
  rm -f "$file_name"
done
