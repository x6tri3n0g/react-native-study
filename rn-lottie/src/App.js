import {StyleSheet, Text, View} from 'react-native';

import LottieView from './LottieView';
import React from 'react';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    setTimeout(this.isloading, 3400);
  }

  isloading = () => {
    this.setState({loading: false});
  };

  render() {
    return this.state.loading ? (
      <LottieView />
    ) : (
      <View style={styles.wrapper}>
        <Text style={styles.text}>Hollo Lottie 😁</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 26,
  },
});
