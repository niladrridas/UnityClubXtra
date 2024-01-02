#!/bin/bash

# Deployment script for UnityClubXtra

# Pull the latest changes from the repository
git pull

# Install dependencies
npm install

# Build the frontend
npm run build

# Restart the server
pm2 restart app.js
