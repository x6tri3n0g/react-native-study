import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Loading from './src/Loading';
import {WebView} from 'react-native-webview';

const App = () => {
  const [url, setUrl] = useState('');
  const runFirst = `
      window.isNativeApp = true;
      true; // note: this is required, or you'll sometimes get silent failures
    `;

  const onNavigationStateChange = (navState) => {
    if (url !== navState.url) {
      let url = navState.url;

      // 현재 페이지 url 가져오기
      console.log(url);

      setUrl(url);
    }
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          position: 'absolute',
          top: 0,
          width: '100%',
          height: 80, // 80
          backgroundColor: 'white',
          zIndex: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}>
        <TouchableOpacity
          onPress={() => alert('뒤로가기')}
          style={{
            marginTop: 40,
            marginRight: 30,
            marginLeft: 30,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: 40,
            marginRight: 30,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>Search</Text>
        </TouchableOpacity>
      </View>
      <WebView
        source={{
          uri: 'http://global.gmarket.co.kr/Home/Main',
        }}
        renderLoading={() => <Loading />}
        originWhitelist={['*']}
        allowsBackForwardNavigationGestures={true}
        style={{marginTop: 20}}
        injectedJavaScriptBeforeContentLoaded={runFirst}
        onNavigationStateChange={onNavigationStateChange}
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
