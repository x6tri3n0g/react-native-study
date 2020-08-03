# Using Jest with React Native

기본적으로 `Jest`는 위와 같은 일정한 패턴으로 작성됩니다.

```
test("테스트 설명", () => {
  expect("검증대상").toXxx("기대 결과");
})
```

toXxx() 부분에서 사용되는 함수를 흔히 Test Matchcher라고 하며 예를 들어 toBe() 함수는 숫자나 문자와 같은 객체가 아닌 기본형(primitive)값을 비교할 때 사용합니다.

그리고 `npm test` 또는 `yarn test`를 실행시키면 테스트를 시작합니다.

Jest는 `test.js`로 끝나거나 `__test__` 디렉터리 안에 있는 파일들은 모두 테스트 파일로 인식합니다.

만약 특정 테스트 파일만 실행하고 싶은 경우 `npm test <파일명 or 경로>`를 입력하면 됩니다.
