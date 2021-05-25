import AsyncStorage from "@react-native-community/async-storage";
import { Component } from "react";

const tokenData = "TOKEN_DATA";

export default class Preferences extends Component {
  /* ---------------------------------- TOKEN --------------------------------- */
  async setToken(data) {
    try {
      await AsyncStorage.setItem(tokenData, JSON.stringify(data));
      console.debug("Token data saved!");
    } catch (error) {
      console.log("Error: ", error.message);
    }
  }

  async getToken() {
    try {
      const data = await AsyncStorage.getItem(tokenData);
      return JSON.parse(data);
    } catch (error) {
      console.log("Error: " + error);
      return null;
    }
  }

  async removeToken() {
    try {
      const data = await AsyncStorage.removeItem(tokenData);
      return data;
    } catch (error) {
      console.log("Error: " + error);
      return null;
    }
  }
}
