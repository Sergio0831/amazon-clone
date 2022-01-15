import { ActionType, ThemeActions } from "../actions/theme_actions";
import { ThemeState } from "../context/theme_context";

export const themeReducer = (
  state: ThemeState,
  action: ThemeActions
): ThemeState => {
  switch (action.type) {
    case ActionType.DarkThemeOn:
      return {
        ...state,
        darkMode: true
      };
    case ActionType.DarkThemeOff:
      return {
        ...state,
        darkMode: false
      };
    default:
      return state;
  }
};
