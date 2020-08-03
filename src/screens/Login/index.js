import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import React from 'react';

const Login = ({navigation}) => {
  const completeLogin = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'Home'}],
    });
  };

  return (
    <View style={styles.screenWrapper}>
      <Text style={styles.loginTitle}>Login Screen</Text>
      <TouchableOpacity style={styles.loginBtn} onPress={completeLogin}>
        <Text style={styles.loginBtnText}>Login</Text>
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
  loginTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  loginBtn: {
    marginTop: 30,
    width: '80%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1F2F3',
  },
  loginBtnText: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default Login;
