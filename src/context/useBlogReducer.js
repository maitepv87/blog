import { useReducer } from "react";
import { ACTION_TYPES } from "./actionTypes";

// Initial state
const initialState = {
  blogPosts: [],
};

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_BLOG_POST:
      return {
        ...state,
        blogPosts: [
          ...state.blogPosts,
          {
            id: Date.now(),
            title: action.payload.title,
            content: action.payload.content,
          },
        ],
      };
    case ACTION_TYPES.DELETE_BLOG_POST:
      return {
        ...state,
        blogPosts: state.blogPosts.filter((post) => post.id !== action.payload),
      };
    default:
      return state;
  }
};

// Custom hook
export const useBlogReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return { state, dispatch };
};
