echo "Switching to branch master"
git checkout main

echo "Building app..."
npm run build

# Define the password
password=""

echo "Create new build location"
echo "$password" | ssh -tt troy@207.246.124.25 "sudo -S mkdir /var/www/new_build"
echo "$password" | ssh -tt troy@207.246.124.25 "sudo -S chmod -R 777 /var/www/new_build"

echo "Deploying files to server..."
scp -r build/* troy@207.246.124.25:/var/www/new_build/

echo "Rename new build to production level"
echo "$password" | ssh -tt troy@207.246.124.25 "sudo -S mv /var/www/new_build /var/www/troyschwab.com"

echo "Done!"