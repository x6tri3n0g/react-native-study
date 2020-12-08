# ✈️ React Native App Flow Structuring using react-navigation

<br />

> Using `react-navigation(v5)`

<br />
<br />

## React Navigation version 5을 이용해 App Flow를 구성합니다.

> Intro

<br />

> Login

<br />

> Home

<br />

> Detail

<br />

Stack Navigation으로 구성되었으며 Login 시 Home Screen에서 다시 Login Screen으로 넘어갈 수 없도록 했습니다.
reset 메서드를 사용해서 stack history의 index를 0으로 만들어 이전 history의 index를 초기화했습니다.

```
...
const onPressLogin = () => {
    navigation.reset({
        index: 0,
        routes: [{name: 'Home'}],
    });
};
...
```

<br />
<br />
<br />

## 추가적으로 테스트 할 Navigation

<br />

`Drawer` / `Tab Navigation`

<br />

> 조합하여 플로우 완성 할 것
