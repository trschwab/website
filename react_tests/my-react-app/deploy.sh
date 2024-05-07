echo "Switching to branch master"
git checkout main

echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -r build/* troy@207.246.124.25:/var/www/troyschwab.com/

echo "Done!"