import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  Children,
} from "react";

const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
  const [tokenLocal, setTokenLocal] = useState(
    localStorage.getItem("accessToken") ?? null
  );

  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken");
    if (storedToken) {
      setTokenLocal(storedToken);
    }
  }, []);

  const saveToken = (newToken) => {
    setTokenLocal(newToken);
    localStorage.setItem("accessToken", newToken);
  };

  return (
    <TokenContext.Provider
      value={{
        tokenLocal,
        saveToken,
      }}
    >
      {children}
    </TokenContext.Provider>
  );
};

export const useToken = () => {
  const context = useContext(TokenContext);
  if (!context) {
    throw new Error("useToken must be used within a TokenProvider");
  }
  return context;
};
