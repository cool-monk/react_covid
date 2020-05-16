import { THEME_TOGGLE } from "./themeTypes";

const initialState = {
  isDark: false,
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;

    case THEME_TOGGLE: {
      return {
        isDark: !state.isDark,
      };
    }
  }
};

export default themeReducer;
