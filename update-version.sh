#!/bin/bash

# Read the current version from version.txt
current_version=$(<version.txt)

# Increment the version (e.g., increment minor version)
IFS='.' read -a version_parts <<< "$current_version"
((version_parts[1]++))
new_version="${version_parts[0]}.${version_parts[1]}.${version_parts[2]}"

# Update version.txt
echo "$new_version" > version.txt

# Update package.json
jq ".version=\"$new_version\"" package.json > tmpfile && mv tmpfile package.json

# Commit the changes
git add version.txt package.json
git commit -m "Bumped version to $new_version"
