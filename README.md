# Blog App — React Native with Context API

A simple and modular mobile application for creating, viewing, editing, and deleting blog posts. Designed with editorial clarity, emotionally intelligent architecture, and a focus on user experience.

---

## Features

- Create new blog posts with title and content
- View post details
- Edit existing posts
- Delete posts
- Global state management with Context API
- Navigation between screens using React Navigation

---

## Folder Structure

```plaintext
src/
├── context/
│   ├── BlogContext.js         # Context provider using useBlogReducer
│   ├── BlogReducer.js         # Reducer logic for blog actions
│   └── actionTypes.js         # Centralized action type constants
│
├── components/
│   └── BlogPostForm.js        # Reusable form for creating and editing posts
│
├── screens/
│   ├── IndexScreen.js         # Lists all blog posts with delete and navigation
│   ├── ShowScreen.js          # Displays post details with edit access
│   ├── CreateScreen.js        # Uses BlogPostForm to create a new post
│   └── EditScreen.js          # Uses BlogPostForm to edit an existing post
│
└── App.js                     # Navigation stack and screen configuration
```

---

## Features

- Create new blog posts with title and content
- View detailed post information
- Edit existing posts
- Delete posts with visual confirmation
- Global state management using Context API and `useReducer`
- Clean and accessible UI built with React Native

---

## Installation

1. Clone the repository:

git clone https://github.com/maitepv87/blog.git
cd blog

2. Install dependencies:

npm install

3. Start the development server:

npx expo start

---

## Dependencies

- react-native
- expo
- @react-navigation/native
- @react-navigation/native-stack
- @expo/vector-icons

---

## Future Improvements

- Add local persistence with AsyncStorage
- Form validation and error handling
- API integration for remote data storage
- UI enhancements and accessibility improvements
- Unit tests for reducer and context logic
