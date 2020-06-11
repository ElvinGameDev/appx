import HomeList from "AppRoot/src/components/organisms/Home/HomeList/HomeList";
import { themeContext } from "AppRoot/src/context/";
import { AppState } from "AppRoot/src/store/store";
import React, { useContext } from "react";
import { View, Text } from "react-native";
import { ENV_VAL } from "react-native-dotenv";
import { useSelector } from "react-redux";

const HomeContainer: React.FC = () => {
  const langStore = useSelector((state: AppState) => state.lang);
  const theme = useContext(themeContext);

  const env_val = ENV_VAL;

  return (
    <View>
      <HomeList lang={langStore.lang} themeColor={theme.themeColor} />
      <Text style={{ padding: 20 }}>dotenv: {env_val}</Text>
    </View>
  );
};

export default HomeContainer;
