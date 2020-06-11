import HomeList from "AppRoot/src/components/organisms/Home/HomeList/HomeList";
import { themeContext } from "AppRoot/src/context/";
import { AppState } from "AppRoot/src/store/store";
import React, { useContext } from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";

const HomeContainer: React.FC = () => {
  const langStore = useSelector((state: AppState) => state.lang);
  const theme = useContext(themeContext);

  console.info(theme);

  return (
    <View>
      <HomeList lang={langStore.lang} themeColor={theme.themeColor} />
    </View>
  );
};

export default HomeContainer;
