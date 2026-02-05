import { createContext } from "react";

interface IAppContext {
  user: string;
<<<<<<< HEAD
  isLoggedIn: boolean;
=======
>>>>>>> c5bc199a65bd406702df37d0f806d4bdfddedb93
}
export const AppContext = createContext({} as IAppContext);
export const AppContextProvider = ({ children }: any) => {
  const user = "Tiao";
<<<<<<< HEAD
  const isLoggedIn = false;

  return (
    <AppContext.Provider value={{ user, isLoggedIn }}>
      {children}
    </AppContext.Provider>
  );
=======

  return <AppContext.Provider value={{ user }}>{children}</AppContext.Provider>;
>>>>>>> c5bc199a65bd406702df37d0f806d4bdfddedb93
};
