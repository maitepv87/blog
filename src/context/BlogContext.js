import React, { useContext } from "react";
import { useBlogReducer } from "./useBlogReducer";

// Create the context
export const BlogContext = React.createContext();

// Provider that wraps the app
export const BlogProvider = ({ children }) => {
  const { state, dispatch } = useBlogReducer();

  return (
    <BlogContext.Provider value={{ state, dispatch }}>
      {children}
    </BlogContext.Provider>
  );
};

// Hook to consume the context
export const useBlogContext = () => {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error("useBlogContext must be used within a <BlogProvider>");
  }
  return context;
};
