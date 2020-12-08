import {AppState, PushNotificationIOS} from 'react-native';

import PushNotification from 'react-native-push-notification';

const _handleAppStateChange = nextAppState => {
  if (nextAppState === 'active') {
    _registerLocalNotification();
  }
};

const _registerLocalNotification = () => {
  PushNotification.setApplicationIconBadgeNumber(0);
  PushNotification.cancelAllLocalNotifications();

  let nextHour = new Date();
  nextHour.setDate(nextHour.getDate() + 1);
  nextHour.setHours(nextHour.getHours() - 1);

  PushNotification.localNotificationSchedule({
    /* Android Only Properties */
    vibrate: true,
    vibration: 300,
    priority: 'hight',
    visibility: 'public',
    importance: 'hight',

    /* iOS and Android properties */
    message: '이거 Local Push Notification인데 [TEST]얌',
    playSound: false,
    number: 1,
    actions: '["OK"]',

    // for production
    // repeatType: 'day', // (optional) Repeating interval. Check 'Repeating Notifications' section for more info.
    // date: nextHour,

    // test to trigger each miniute
    repeatType: 'minute',
    date: new Date(Date.now() + 10 * 1000),

    // test to trigger one time
    // date: new Date(Date.now() + 20 * 1000),
  });
};
export default {
  // register() : PushNotification을 초기화 후, 앱 자체 알림을 등록하는 함수를 호출
  register: async () => {
    PushNotification.configure({
      onNotification: function(notification) {
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
      popInitialNotification: true,
    });

    _registerLocalNotification();

    AppState.addEventListener('change', _handleAppStateChange);
  },
  unregister: () => {
    AppState.removeEventListener('change', _handleAppStateChange);
  },
};
