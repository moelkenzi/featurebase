#!/bin/bash

FILE="issues.md"
REPO="moelkenzi/featurebase"

# Function to trim whitespace
trim() {
  echo "$1" | sed 's/^[[:space:]]*//;s/[[:space:]]*$//'
}

issue_title=""
issue_body=""
issue_labels=""

create_issue() {
  local title="$1"
  local body="$2"
  local labels="$3"

  echo "Creating issue: $title with labels: $labels"

  # Convert space-separated labels to multiple --label flags
  label_flags=""
  for label in $labels; do
    label_flags+=" --label \"$label\""
  done

  # Use eval to expand the label flags correctly
  eval gh issue create --repo "$REPO" --title "\"$title\"" --body "\"$body\"" $label_flags
}

while IFS= read -r line; do

  # Detect new issue title line (starts with ###)
  if [[ $line =~ ^###\ (feat|fix|perf|docs|ui|admin|other):\ (.+) ]]; then
    # If there is an old issue collected, create it
    if [[ -n "$issue_title" ]]; then
      create_issue "$issue_title" "$issue_body" "$issue_labels"
      # Reset body and labels for next issue
      issue_body=""
      issue_labels=""
    fi
    issue_title="${BASH_REMATCH[1]^}: ${BASH_REMATCH[2]}"  # Capitalize type
    continue
  fi

  # Collect issue body lines (tasks and description)
  if [[ $line =~ ^- ]]; then
    issue_body+="$line"$'\n'
  fi

  # Extract labels from LABELS: lines
  if [[ $line =~ LABELS:\ (.*) ]]; then
    # Replace commas with spaces to separate labels in gh CLI
    issue_labels=$(echo "${BASH_REMATCH[1]}" | sed 's/,/ /g')
  fi

done < "$FILE"

# Create last issue
if [[ -n "$issue_title" ]]; then
  create_issue "$issue_title" "$issue_body" "$issue_labels"
fi

echo "✨ Issues created successfully.✅"