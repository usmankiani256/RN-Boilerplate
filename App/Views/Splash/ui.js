// Imports
import { View } from "react-native";
import React from "react";
import { Loader } from "Atoms";
import styles from "./styles";
import useService from "./service";

const Splash = (props) => {
  useService(props);

  return (
    <View style={styles.root}>
      <Loader />
    </View>
  );
};

// Export
export default Splash;
