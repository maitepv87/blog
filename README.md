# Blog App — React Native with Context API

A simple and modular mobile application for creating, viewing, editing, and deleting blog posts. Designed with editorial clarity, emotionally intelligent architecture, and a focus on user experience.

---

## Features

- Create new blog posts with title and content
- View detailed post information
- Edit existing posts
- Delete posts with visual confirmation
- Global state management using Context API and `useReducer`
- Clean and accessible UI built with React Native

---

## Architecture Overview

- `BlogContext.js`: manages global state for blog posts
- `actionTypes.js`: defines action types for clarity and consistency
- `reducer`: handles `ADD`, `EDIT`, and `DELETE` actions
- `BlogPostForm`: reusable form component for both creation and editing
- `IndexScreen`: displays list of posts with navigation and delete functionality
- `ShowScreen`: displays post details with edit access
- `CreateScreen` and `EditScreen`: use `BlogPostForm` with dynamic props

---

## Folder Structure

src/
├── context/
│ ├── BlogContext.js // Context provider using useBlogReducer
│ ├── BlogReducer.js // Reducer logic for blog actions
│ └── actionTypes.js // Centralized action type constants
├── components/
│ └── BlogPostForm.js // Reusable form for creating and editing posts
├── screens/
│ ├── IndexScreen.js // Lists all blog posts with delete and navigation
│ ├── ShowScreen.js // Displays post details with edit access
│ ├── CreateScreen.js // Uses BlogPostForm to create a new post
│ └── EditScreen.js // Uses BlogPostForm to edit an existing post
└── App.js // Navigation stack and screen configuration

---

## Installation

```bash
npm install
npx expo start
```
