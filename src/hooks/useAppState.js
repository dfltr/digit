import { createContext, useContext } from 'react';

export const defaultAppContext = {
  appState: {},
  setAppState: () => {},
};

export const AppStateContext = createContext(defaultAppContext);

const useAppState = () => useContext(AppStateContext);

export default useAppState;
