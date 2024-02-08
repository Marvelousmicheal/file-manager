"use client"
import { createContext, useState } from "react";

export const ParentFolderContext = createContext(null);

export default function ParentFolderState({ children }) {
  const [parentFolderid, setParentFolderid] = useState(); // Ensure that useState is directly imported
  const [refreshUseEffect, setRefreshUseEffect] = useState(false)

  return (
    <ParentFolderContext.Provider value={{ parentFolderid, setParentFolderid, refreshUseEffect,setRefreshUseEffect }}>
      {children}
    </ParentFolderContext.Provider>
  );
}
