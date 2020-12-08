import {
  FooterButton,
  FooterButtonText,
  FooterButtonWrapper,
  HeaderButton,
  HeaderButtonWrapper,
  ScreenWrapper,
} from './src/components/Atoms';
import React, {useEffect, useRef, useState} from 'react';

import Loading from './src/Loading';
import {Text} from 'react-native';
import {WebView} from 'react-native-webview';

const App = () => {
  const webviewRef = useRef(WebView);
  const [url, setUrl] = useState('');

  const runFirst = `
      window.isNativeApp = true;
      true; // note: this is required, or you'll sometimes get silent failures
    `;

  const onNavigationStateChange = (navState) => {
    if (url !== navState.url) {
      let curUrl = navState.url;

      // 현재 페이지 url 가져오기
      console.log(curUrl);

      // 현재 페이지 url 저장하기
      setUrl(curUrl);
    }
  };

  // 웹 페이지의 이전 페이지로 돌아가기
  const onPressBackBtn = () => {
    webviewRef.current.goBack();
  };

  const jsCode =
    "window.ReactNativeWebView.postMessage(document.getElementById('content'))";

  const _onMessage = (event) => {
    let message = event.nativeEvent.data;
    // console.log('####### ' + message);
    console.log(event.nativeEvent.data);

    Array.from(message).map((node) => console.log(node.tagName));
    // for (let i = 0; i < message.length; i++) {
    //   console.log(message[i].tagName + '<br />');
    // }
  };

  const onPressFooterBtn = () => {
    // webviewRef.current._onMessage();
    console.log('장바구니에 댬겼습니다!');
  };

  return (
    <ScreenWrapper>
      <HeaderButtonWrapper>
        <HeaderButton onPress={onPressBackBtn}>
          <Text>Back</Text>
        </HeaderButton>
        <HeaderButton onPress={() => alert('검색창으로 이동')}>
          <Text>Search</Text>
        </HeaderButton>
      </HeaderButtonWrapper>
      <WebView
        ref={webviewRef}
        source={{
          uri:
            'http://item.gmarket.co.kr/Item?goodscode=1129396260&ver=637320604834110686',
        }}
        onLoad={(syntheticEvent) => {
          const {nativeEvent} = syntheticEvent;
          setUrl(nativeEvent.url);
          console.log(nativeEvent);
        }}
        onShouldStartLoadWithRequest={() => true}
        startInLoadingState={true}
        renderLoading={() => <Loading />}
        originWhitelist={['*']}
        allowsBackForwardNavigationGestures={true}
        injectedJavaScriptBeforeContentLoaded={runFirst}
        onNavigationStateChange={onNavigationStateChange}
        onMessage={(event) => _onMessage(event)}
        injectedJavaScript={jsCode}
      />
      <FooterButtonWrapper>
        <FooterButton onPress={onPressFooterBtn}>
          <FooterButtonText>Add to Cart</FooterButtonText>
        </FooterButton>
      </FooterButtonWrapper>
    </ScreenWrapper>
  );
};

export default App;
