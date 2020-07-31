# React Native WebView

<br />

> Using [`react-native-webview`](https://github.com/react-native-community/react-native-webview)

<br />
<br />

## Started Guide

### 1. Add react-native-webview

```
$ yarn add react-native-webview
// or
$ npm install --save react-native-webview
```

<br />
<br />

### 2. iOS & Android Setting

#### iOS

if using CocoaPods, in the ios/ or macos/ directory run:

```
$ pod install
```

<br />

#### Android

Android - react-native-webview version <6: This module does not require any extra step after running the link command 🎉
<br />
Android - react-native-webview version >=6.X.X: Please make sure AndroidX is enabled in your project by editting `android/gradle.properties` and adding 2 lines:
<br />

> android.useAndroidX=true

> android.enableJetifier=true
