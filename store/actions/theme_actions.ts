export enum ActionType {
  DarkThemeOn,
  DarkThemeOff
}

export interface DarkThemeOn {
  type: ActionType.DarkThemeOn;
}

export interface DarkThemeOff {
  type: ActionType.DarkThemeOff;
}

export type ThemeActions = DarkThemeOn | DarkThemeOff;
