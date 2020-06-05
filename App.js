import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

import LocalNotification from './src/module/LocalPushNotification';

class App extends Component {
  componentWillUnmount() {
    LocalNotification.unregister();
  }

  componentDidMount() {
    LocalNotification.register();
  }

  render() {
    return (
      <SafeAreaView style={styles.wrapper}>
        <Text>Local Push Notification Test</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
