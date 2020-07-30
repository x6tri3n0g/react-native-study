import React, {useRef, useState} from 'react';
import ViewShot, {captureRef} from 'react-native-view-shot';

import {WebView} from 'react-native-webview';
import styled from 'styled-components';

function useCapture() {
  const captureViewRef = useRef();
  const [captureImg, setCaptureImg] = useState('');

  function onCapture() {
    captureRef(captureViewRef, {
      format: 'jpg',
      quality: 0.9,
    }).then(
      (uri) => setCaptureImg(uri),
      (error) => console('Oops, snapshot failed', error),
    );
  }

  return {
    captureViewRef,
    onCapture,
    captureImg,
  };
}

const App = () => {
  const {captureViewRef, onCapture, captureImg} = useCapture();

  return (
    <ScreenWrapper>
      <ViewShot ref={captureViewRef} style={{flex: 1}} captureMode="mount">
        <WebView
          source={{
            uri: 'https://www.naver.com/',
          }}
        />
      </ViewShot>
      <ImageWrapper>
        <CaptureImg
          source={{
            uri: captureImg || 'image',
          }}
          resizeMode="contain"
        />
      </ImageWrapper>

      <CaptureButton onPress={onCapture}>
        <CaptureButtonText>화면 캡처하기</CaptureButtonText>
      </CaptureButton>
    </ScreenWrapper>
  );
};

const ScreenWrapper = styled.SafeAreaView`
  flex: 1;
`;

const ImageWrapper = styled.View`
  align-items: center;
  border: 1px solid #333;
`;

const CaptureImg = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 100%;
  height: 220px;
`;

const CaptureButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  width: 80%;
  height: 50px;
  margin: 30px;
  align-items: center;
  justify-content: center;
  background-color: #5f00ff;
  border-radius: 10px;
`;

const CaptureButtonText = styled.Text`
  font-size: 16px;
  font-weight: 800;
  color: white;
`;

export default App;
