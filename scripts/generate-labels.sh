#!/bin/bash

labels=(
  "setup f9d0c4 Project setup and configuration tasks"
  "feature 0e8a16 New features and enhancements"
  "tooling 1d76db Tooling and developer environment setup"
  "documentation 0075ca Documentation and guides"
  "UI 5319e7 User Interface related tasks"
  "layout 8a2be2 Layout and structural components"
  "responsive 2ecc71 Responsive design and mobile support"
  "auth ff6f61 Authentication and authorization"
  "feedback f39c12 Feedback system and interactions"
  "modal ff4500 Modals and dialogs"
  "forms 3498db Forms and input handling"
  "performance 27ae60 Performance improvements and optimizations"
  "optimization 16a085 Optimization tasks"
  "roadmap f1c40f Roadmap and project status tracking"
  "admin e74c3c Admin dashboard and moderation"
  "dashboard 9b59b6 Dashboard UI and admin panels"
  "moderation c0392b Moderation and review controls"
  "fix e67e22 Bug fixes and UI polish"
  "cleanup 95a5a6 Code cleanup and refactoring"
)

for label in "${labels[@]}"; do
  set -- $label
  gh label create "$1" --color "$2" --description "$3" || echo "Label '$1' already exists"
done

echo "Labels created successfully.✅"