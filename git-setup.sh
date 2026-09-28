#!/bin/sh
git init
git add .
git commit -m "Initial Next.js project"
git branch -M main
echo "Git repository initialized."
echo "Next: create a GitHub repository and run:"
echo "git remote add origin YOUR_GITHUB_REPOSITORY_URL"
echo "git push -u origin main"
