#!/bin/bash
# --------------------------------------------------------
# 🧠 Gatsby Deployment Script for ronitshahu.github.io
# Author: Ronit Shahu
# Description:
#   Pulls latest changes from GitHub,
#   rebuilds the Gatsby site,
#   and deploys it to /var/www/html
# --------------------------------------------------------

# Exit immediately if a command fails
set -e

# Step 1: Navigate to project directory
cd ~/ronitshahu.github.io

# Step 2: Pull latest changes from GitHub
echo "🔄 Pulling latest changes from GitHub..."
git pull origin main

# Step 3: Build the Gatsby project
echo "🏗️  Building Gatsby site..."
npm run build

# Step 4: Clear the current HTML directory
echo "🧹 Clearing old deployment files..."
sudo rm -rf /var/www/html/*

# Step 5: Copy new build output
echo "📦 Copying new build to /var/www/html..."
sudo cp -r public/* /var/www/html/

# Step 6: Reload Nginx to apply changes
echo "🔁 Reloading Nginx..."
sudo systemctl reload nginx

# Done
echo "✅ Deployment complete! Visit: https://ronitshahu.com"
