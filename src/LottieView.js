import LottieView from 'lottie-react-native';
import React from 'react';

export default class BasicExample extends React.Component {
  render() {
    return (
      <LottieView source={require('./Assets/animation.json')} autoPlay loop />
    );
  }
}
