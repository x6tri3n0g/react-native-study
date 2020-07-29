import {Agenda, Calendar, CalendarList} from 'react-native-calendars';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['ko'] = {
  monthNames: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  monthNamesShort: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  dayNames: ['일', '월', '화', '수', '목', '금', '토'],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
  today: 'Today!',
};
LocaleConfig.defaultLocale = 'ko';

const App = () => {
  const [selectedStart, setSelectedStart] = useState('');
  const [selectedEnd, setSelectedEnd] = useState('');
  const [period, setPeriod] = useState(null);

  useEffect(() => {}, []);

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <View
        style={{
          height: 50,
          width: '100%',
          backgroundColor: '#888888',
          justifyContent: 'center',
          marginTop: 40,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
            paddingLeft: 20,
          }}>
          {selectedStart}
        </Text>
      </View>
      <CalendarList
        current={Date()}
        onDayPress={(day) => {
          console.log('selected day', day);
          setSelectedStart(day.dateString);
        }}
        // Callback which gets executed when visible months change in scroll view. Default = undefined
        onVisibleMonthsChange={(months) => {
          console.log('now these months are visible', months);
        }}
        // Max amount of months allowed to scroll to the past. Default = 50
        pastScrollRange={50}
        // Max amount of months allowed to scroll to the future. Default = 50
        futureScrollRange={50}
        // Enable or disable scrolling of calendar list
        scrollEnabled={true}
        // Enable or disable vertical scroll indicator. Default = false
        showScrollIndicator={true}
        // ...calendarParams
        markedDates={{
          '2020-08-14': {
            startingDay: true,
            color: '#5F00FF',
            textColor: 'white',
          },
          '2020-08-15': {
            selected: true,
            color: '#5F00FF',
            textColor: 'white',
          },
          '2020-08-16': {
            selected: true,
            color: '#5F00FF',
            textColor: 'white',
          },
          '2020-08-17': {
            selected: true,
            color: '#5F00FF',
            textColor: 'white',
          },
          '2020-08-18': {
            selected: true,
            color: '#5F00FF',
            textColor: 'white',
          },
          '2020-08-19': {
            selected: true,
            color: '#5F00FF',
            textColor: 'white',
          },
          '2020-08-20': {
            selected: true,
            endingDay: true,
            color: '#5F00FF',
            textColor: 'white',
          },
        }}
        // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
        markingType={'period'}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
