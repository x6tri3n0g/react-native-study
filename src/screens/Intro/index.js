import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Intro = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
  }, []);

  return (
    <View style={styles.screenWrapper}>
      <Text style={styles.introTitle}>React Native</Text>
      <Text style={styles.introSubTitle}>React Navigation TEST</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  introTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  introSubTitle: {
    fontSize: 12,
    fontWeight: '300',
    color: '#888888',
    lineHeight: 30,
  },
});

export default Intro;
