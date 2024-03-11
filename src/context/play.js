import { useState, useContext, createContext } from "react";

const PlayContext = createContext();
const PlayProvider = ({ children }) => {
  const [play, setPlay] = useState(0);

  return (
    <PlayContext.Provider value={[play, setPlay]}>
      {children}
    </PlayContext.Provider>
  );
};

// custom hook
const usePlay = () => useContext(PlayContext);

export { usePlay, PlayProvider };
