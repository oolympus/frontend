echo "Switching to branch main"

git checkout main

echo "Building app..."

npm run build

echo "Deploying files to server"

scp -r dist/* olympus@172.105.41.169:/var/www/172.105.41.169

echo "Done!"
