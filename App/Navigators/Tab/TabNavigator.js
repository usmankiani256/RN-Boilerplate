import React from "react";

// Import Tab Navigator
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Import Tab Navigator Options
import TabNavigatorOptions from "./TabNavigatorOptions";

// Import Screens
// ...
// Declare Tab Navigator Object
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="" backBehavior="initialRoute">
      {/* Insert screens here */}
    </Tab.Navigator>
  );
};

export default TabNavigator;
