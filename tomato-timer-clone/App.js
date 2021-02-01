import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Timer from "./components/Timer";
import reducer from "./reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";

let store = createStore(reducer);

console.log(store.getState());

export default function App() {
  return (
    <Provider store={store}>
      <Timer />
    </Provider>
  );
}
