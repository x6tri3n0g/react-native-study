import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import React from 'react';

const Detail = ({navigation}) => {
  const goDetail = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.screenWrapper}>
      <Text style={styles.introTitle}>Detail Screen</Text>
      <Text style={styles.introSubTitle}>Detail 1</Text>
      <TouchableOpacity style={styles.homeBtn} onPress={goDetail}>
        <Text style={styles.homeBtnText}>Go Home Screen</Text>
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

export default Detail;
