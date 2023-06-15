/*
 * @Author: xiewenhao
 * @Date: 2023-06-13 09:36:34
 * @LastEditTime: 2023-06-14 10:32:33
 * @Description:
 */

import il8b from "i18next";
import {
  CHANGE_LANGUAGE,
  LanguageActionType,
  ADD_LANGUAGE,
} from "./languageActions";

export interface LanguageState {
  language: "en" | "zh";
  languageList: { name: string; code: string }[];
}
const defaultState: LanguageState = {
  language: "zh",
  languageList: [
    {
      name: "中文",
      code: "zh",
    },
    {
      name: "English",
      code: "en",
    },
  ],
};
export default (state = defaultState, action: LanguageActionType) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      il8b.changeLanguage(action.payload);
      return { ...state, language: action.payload };
    case ADD_LANGUAGE:
      return {
        ...state,
        languageList: [...state.languageList, { name: "xx", code: "xx" }],
      };
    default:
      return state;
  }
};
