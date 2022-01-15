import { createContext, Dispatch, FC, useContext, useReducer } from "react";
import { ActionType, ThemeActions } from "../actions/theme_actions";
import { themeReducer } from "../reducers/theme_reduser";

export interface ThemeState {
  darkMode: boolean;
  darkModeHandler: () => void;
}

const initialThemeState: ThemeState = {
  darkMode: false,
  darkModeHandler: () => {}
};

export const ThemeContext = createContext<ThemeState>(initialThemeState);

export const ThemeProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialThemeState);

  const darkModeHandler = () => {
    dispatch({
      type: state.darkMode ? ActionType.DarkThemeOff : ActionType.DarkThemeOn
    });
  };

  return (
    <ThemeContext.Provider value={{ ...state, darkModeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
