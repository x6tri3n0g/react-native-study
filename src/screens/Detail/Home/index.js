import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import React from 'react';

const Home = ({navigation}) => {
  const goDetail = () => {
    navigation.navigate('Detail');
  };

  return (
    <View style={styles.screenWrapper}>
      <Text style={styles.homeTitle}>Home Screen</Text>
      <TouchableOpacity style={styles.homeBtn} onPress={goDetail}>
        <Text style={styles.homeBtnText}>Detail Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.homeBtn} onPress={goDetail}>
        <Text style={styles.homeBtnText}>Detail Screen</Text>
      </TouchableOpacity>
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
  homeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  homeBtn: {
    marginTop: 24,
    width: '80%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1F2F3',
  },
  homeBtnText: {
    fontSize: 16,
    fontWeight: '400',
  },
});

export default Home;
