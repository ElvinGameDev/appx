import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as Localization from "expo-localization";

const thisLang: LANG_TYPE =
  Localization.locale.indexOf("ja") >= 0 ? "ja" : "en";

interface LangStore {
  lang: LANG_TYPE;
}

const lang = createSlice({
  name: "lang",
  initialState: { lang: thisLang } as LangStore,
  reducers: {
    updateLang: (state, action: PayloadAction<LANG_TYPE>) => {
      const nextState = { ...state, lang: action.payload };
      return nextState;
    },
  },
});

export default lang;
