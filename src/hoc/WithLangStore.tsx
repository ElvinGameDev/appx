import langSlice from "AppRoot/src/store/module/lang";
import { AppState, AppDispatch } from "AppRoot/src/store/store";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

interface Props {
  component: any;
  [key: string]: any;
}

const WithLangStore: React.FC<Props> = (props) => {
  const dispatch: AppDispatch = useDispatch();
  const langStore = useSelector((state: AppState) => state.lang);

  const updateLang = (nextLang: LANG_TYPE) =>
    dispatch(langSlice.actions.updateLang(nextLang));

  const ChildComonent = props.component;
  const _prpos = {
    ...props,
    langStore,
    updateLang,
  };

  return <ChildComonent {..._prpos} />;
};

export default WithLangStore;
