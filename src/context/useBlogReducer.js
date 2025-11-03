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
            id: Math.floor(Math.random() * 99999),
            title: `Blog Post #${state.blogPosts.length + 1}`,
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
