import React from "react";
import styles from "./styles";

// Import Drawer Navigator
import { createDrawerNavigator } from "@react-navigation/drawer";

// Import Drawer Navigator Options
import DrawerNavigatorOptions from "./DrawerNavigatorOptions";

// Import Screens
// ...

// Declare Drawer Navigator Object
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerType="slide"
      drawerStyle={styles.drawerStyle}
      drawerContent={(props) => {}}
    >
      {/* Insert screens here */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
