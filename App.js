import {
  FooterButton,
  FooterButtonText,
  FooterButtonWrapper,
  HeaderButton,
  HeaderButtonWrapper,
  ScreenWrapper,
} from './src/components/Atoms';
import React, {useRef, useState} from 'react';

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

      setUrl(curUrl);
    }
  };

  // 웹 페이지의 이전 페이지로 돌아가기
  const onPressBackBtn = () => {
    webviewRef.current.goBack();
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
          uri: 'https://github.com/',
        }}
        renderLoading={() => <Loading />}
        originWhitelist={['*']}
        allowsBackForwardNavigationGestures={true}
        style={{marginTop: 80}}
        injectedJavaScriptBeforeContentLoaded={runFirst}
        onNavigationStateChange={onNavigationStateChange}
      />
      <FooterButtonWrapper>
        <FooterButton onPress={() => alert('장바구니에 담습니다!')}>
          <FooterButtonText>Add to Cart</FooterButtonText>
        </FooterButton>
      </FooterButtonWrapper>
    </ScreenWrapper>
  );
};

export default App;
