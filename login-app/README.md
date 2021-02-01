# LoginApp

> LoginApp Tutorial with React Native

<br />
<br />

## App.js
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

  - '[react-native-router-flux](https://github.com/aksonov/react-native-router-flux)' 모듈을 사용하여 App의 flow를 구성했습니다.
  - `<Stack>`를 `<Router/>`로 감싸 구성되었으며 `<Stack>` 안에 `<Scene>`를 통해 스택되어지는 화면을 순서대로 나열합니다.
  - 초기화면 : Login.js
  
<br />
<br />
<br />


## Login.js(./src/pages/Login.js)
```
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  Keyboard,
} from 'react-native';

import {Actions} from 'react-native-router-flux';

import Form from '../components/Form';

export default class Login extends Component {
  signup() {
    Actions.signup();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{'\n'}</Text>
        <Text>{'\n'}</Text>
        <Form type="Login" />
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Dont have an account yet? </Text>
          <TouchableOpacity onPress={this.signup}>
            <Text style={styles.signupButton}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  signupTextCont: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingVertical: 16,
    flexDirection: 'row',
  },
  signupText: {
    color: '#12799f',
    fontSize: 16,
  },
  signupButton: {
    color: '#12799f',
    fontSize: 16,
    fontWeight: '500',
  },
});
```

  - `Login.js`에는 로그인에 필요한 UI 구성합니다.
  - `Form` 컴포넌트를 통해 Login에 해당하는 기능을 수행합니다.
  - Sign Up를 누르게 되면 `react-native-reouter-flux`을 통해 Signup 페이지로 이동합니다.

<br />
<br />
<br />

## Signup.js(./src/pages/Signup.js)
```
import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import Form from '../components/Form';

import {Actions} from 'react-native-router-flux';

export default class Signup extends Component {
  goBack() {
    Actions.pop();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{'\n'}</Text>
        <Text>{'\n'}</Text>
        <Form type="Signup" />
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Already have an account? </Text>
          <TouchableOpacity onPress={this.goBack}>
            <Text style={styles.signupButton}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  signupTextCont: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingVertical: 16,
    flexDirection: 'row',
  },
  signupText: {
    color: '#12799f',
    fontSize: 16,
  },
  signupButton: {
    color: '#12799f',
    fontSize: 16,
    fontWeight: '500',
  },
});
```

  - `goBack()` 함수를 통해 이전에 Stack으로 쌓아 놓은 Login 페이지로 이동할 수 있습니다.
  - 회원가입 UI가 구성되어 있으며 `Form` 컴포넌트(../component/Form.js)를 통해 입력을 처리합니다.
  
<br />
<br />
<br />

## Form.js(./src/component/Form.js)
```
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  Keyboard,
} from 'react-native';

import {Actions} from 'react-native-router-flux';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  saveData = async () => {
    const {email, password} = this.state;

    //save data with asyncstorage
    let loginDetails = {
      email: email,
      password: password,
    };

    if (this.props.type !== 'Login') {
      AsyncStorage.setItem('loginDetails', JSON.stringify(loginDetails));

      Keyboard.dismiss();
      alert(
        'You successfully registered. Email: ' +
          email +
          ' password: ' +
          password,
      );
      this.login();
    } else if (this.props.type == 'Login') {
      try {
        let loginDetails = await AsyncStorage.getItem('loginDetails');
        let ld = JSON.parse(loginDetails);

        if (ld.email != null && ld.password != null) {
          if (ld.email == email && ld.password == password) {
            alert('Go in!');
          } else {
            alert('Email and Password does not exist!');
          }
        }
      } catch (error) {
        alert(error);
      }
    }
  };

  showData = async () => {
    let loginDetails = await AsyncStorage.getItem('loginDetails');
    let ld = JSON.parse(loginDetails);
    alert('email: ' + ld.email + ' ' + 'password: ' + ld.password);
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          onChangeText={email => this.setState({email})}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Email"
          placeholderTextColor="#002f6c"
          selectionColor="#fff"
          keyboardType="email-address"
          onSubmitEditing={() => this.password.focus()}
        />

        <TextInput
          style={styles.inputBox}
          onChangeText={password => this.setState({password})}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#002f6c"
          ref={input => (this.password = input)}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={this.saveData}>
            {this.props.type}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    width: 300,
    backgroundColor: '#eeeeee',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#002f6c',
    marginVertical: 10,
  },
  button: {
    width: 300,
    backgroundColor: '#4f83cc',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 12,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },
});
```

  - `saveData()` 함수에서 'Login'인지 'SignUp'인지 확인합니다.
  - 'SignUp'인 경우 AsyncStorage.setItem을 통해 유저가 입력한 email, password를 모바일에 저장합니다.
  - 'Login'의 경우 AsyncStorage.getItem을 통해 유저의 email, password 정보를 가져와 값을 모두 입력했는지/입력한 정보가 알맞은지 확인합니다.
