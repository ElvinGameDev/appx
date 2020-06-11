import React from "react";
import { View, Text } from "react-native";

import texts from ".//HomeListTexts";
import styles from "./HomeListStyle";

interface Props {
  lang: LANG_TYPE;
  themeColor: string;
}

const HomeList: React.FC<Props> = ({ lang, themeColor }) => {
  return (
    <View>
      <Text style={styles.headline}>{texts[lang].greeting}</Text>
      <View style={styles.list}>
        <Text>redux - lang: {lang}</Text>
      </View>
      <View style={styles.list}>
        <Text>context - theme: {themeColor}</Text>
      </View>
    </View>
  );
};

export default HomeList;
