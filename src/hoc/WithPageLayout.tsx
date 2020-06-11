import React from "react";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

interface Props {
  children: React.ReactChild;
}

const WithPageLayout: React.FC<Props> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default WithPageLayout;
