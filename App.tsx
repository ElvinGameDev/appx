import { useTheme, themeContext } from "AppRoot/src/context/index";
import Route from "AppRoot/src/route/Route";
import store from "AppRoot/src/store/store";
import React from "react";
import { Provider } from "react-redux";

const App = () => {
  const theme = useTheme();

  return (
    <Provider store={store}>
      <themeContext.Provider value={theme}>
        <Route />
      </themeContext.Provider>
    </Provider>
  );
};

export default App;
