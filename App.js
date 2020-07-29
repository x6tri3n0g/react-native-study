import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import React from 'react';
import {WebView} from 'react-native-webview';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <WebView
        source={{
          uri:
            'http://global.gmarket.co.kr/Home/Main?gclid=CjwKCAjwmf_4BRABEiwAGhDfSfHmJaGpTbWeMXQpbf4GgRl5C8nQ7ljQhHtjF-f-GZ5c_TUAxfqWFBoCSIMQAvD_BwE',
        }}
        style={{marginTop: 20}}
      />
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          alignItems: 'center',
          width: '100%',
          height: 90,
          backgroundColor: 'white',
          borderTopColor: '#BDBDBD',
          borderTopWidth: 1,
        }}>
        <TouchableOpacity
          onPress={() => alert('구매하시겠습니까?')}
          style={{
            width: '80%',
            height: 38,
            backgroundColor: '#5F00FF',
            margin: 10,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
          }}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
