# React Native Lottie Study

> react-native-lottie 라이브러리를 사용하는 study입니다.

using [LottieFile](https://lottiefiles.com/24156-pride-rainbow#).json

### 사용하기
  React Native에서 Lottie를 사용하는 방법은 간단합니다. 
  
  
```
yarn add lottie-react-native
# or
npm i --save lottie-react-native
```

`NPM` 또는 `Yarn`을 통해 패키지를 설치해주고 `{$project_root}/ios`에서 `pod install` 해주면 간단하게 사용이 가능합니다.

이 Repo에는 앱 실행 Lottie 애니메이션이 실행되고 3400ms(3.4초) 뒤에 종료된 후 준비된 Screen을 실행시키도록 해보았습니다.
이를 이용해서 애니메이션이 있는 loading을 구현하거나 앱에 귀여운(?) 애니메이션이 필요한 곳에 적용해 줄 수 있을 것 같습니다.

[React Native Lottie Docs](https://airbnb.io/lottie/#/react-native)를 참고하세요!

### 실행하기
1. `git clone ...`
2. `cd ios && pod install && cd ../`
3. `npx react-native run-ios`
