import React, { createContext, useState, useEffect, useContext } from "react";

const StoreContext = createContext()

const AuthProvider = () => {
  useEffect(() => {
      
  });
};

const useAuth = () => {
  const context = useContext();

  return context;
};

export { useAuth };
