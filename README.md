# LoginApp

Tutorial
with React Native


### App.js
```
import React, {Component} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';

import Routes from './src/Routes';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#002f6c" barStyle="light-content" />
        <Routes />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

```

  - App.js에서는 Routes.js(./src/Routes)를 import합니다.
  - 'react-native'에서 불러온 `StatusBar`를 사용하면 디바이스의 상단의 Status Bar를 제어 할 수 있습니다.(여기에서는 스타일을 적용했습니다.)

<br />
<br />
<br />

### Routes.js(./src/Routes.js)
```
import React, {Component} from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './pages/Login';
import Signup from './pages/Signup';

export default class Routes extends Component {
  render() {
    return (
      <Router
        barButtonIconStyle={styles.barButtonIconStyle}
        hideNavBar={false}
        navigationBarStyle={{backgroundColor: '#1565c0'}}
        titleStyle={{color: 'white'}}>
        <Stack key="root">
          <Scene key="login" component={Login} title="Login" />
          <Scene key="signup" component={Signup} title="Sign up" />
        </Stack>
      </Router>
    );
  }
}

const styles = {
  barButtonIconStyle: {
    tintColor: 'white',
  },
};
``` 

  - 'react-native-router-flux' 모듈을 사용하여 App의 flow를 구성했습니다.
  - `<Stack>`를 `<Router/>`로 감싸 구성되었으며 `<Stack>` 안에 `<Scene>`를 통해 스택되어지는 화면을 순서대로 나열합니다.
  - 초기화면 : Login.js
