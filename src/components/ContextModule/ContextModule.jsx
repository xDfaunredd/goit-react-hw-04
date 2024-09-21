import { createContext, useState } from "react";

export const myContext = createContext();

function ContextModule({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [urlImage, setUrlImage] = useState("");

  const open = (url) => {
    setUrlImage(url);
    setIsOpen(true);
  };

  const close = () => setIsOpen(false);

  return (
    <myContext.Provider value={{ isOpen, open, close, urlImage }}>
      {children}
    </myContext.Provider>
  );
}

export default ContextModule;
