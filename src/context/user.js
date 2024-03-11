import { useState, useContext, createContext } from "react";

const UserContext = createContext();
const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};

// custom hook
const useUser = () => useContext(UserContext);

export { useUser, UserProvider };
