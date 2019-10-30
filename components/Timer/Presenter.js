// state와 redux에 대한 작업은 ./index.js에서 하고 여기서는 보여주는 것만 합니다.

import React, { Component } from "react";
import { StyleSheet, View, Text, Platform, StatusBar } from "react-native";
import Button from "../Button";

class Timer extends Component {
  render() {
    const { isPlaying, elapsedTime, timerDuration } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar barStyle={"light-content"} />
        <View style={styles.upper}>
          <Text style={[styles.time]}>25:00</Text>
        </View>
        <View style={styles.lower}>
          {!isPlaying && (
            <Button
              iconName="play-circle"
              onPress={() => alert("it works!!")}
            />
          )}
          {isPlaying && (
            <Button
              iconName="stop-circle"
              onPress={() => alert("it works!!")}
            />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#CE0B24" },
  upper: { flex: 2, justifyContent: "center", alignItems: "center" },
  lower: { flex: 1, justifyContent: "center", alignItems: "center" },
  time: {
    color: "white",
    fontSize: 120,
    ...Platform.select({
      android: { fontWeight: "100" },
      ios: {
        fontWeight: "100"
      }
    })
  }
});

export default Timer;
