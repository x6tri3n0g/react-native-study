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
import styled from 'styled-components';

LocaleConfig.locales['en'] = {
  formatAccessibilityLabel: "dddd d 'of' MMMM 'of' yyyy",
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthNamesShort: [
    'jan',
    'feb',
    'mar',
    'apr',
    'may',
    'jun',
    'jul',
    'aug',
    'sep',
    'oct',
    'nov',
    'dec',
  ],
  dayNames: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Frid', 'Sat'],
};

LocaleConfig.defaultLocale = 'en';

const App = () => {
  const [selectedStart, setSelectedStart] = useState('-');
  const [selectedEnd, setSelectedEnd] = useState('-');
  const [period, setPeriod] = useState(null);

  useEffect(() => {
    const selectedPeriod = {};

    const startDay = selectedStart;
    const endDay = selectedEnd;

    const keyArr = [startDay, endDay];
    const valueArr = [
      {startingDay: true, color: '#5F00FF', textColor: 'white'},
      {endingDay: true, color: '#5F00FF', textColor: 'white'},
    ];

    for (let i = 0; i < keyArr.length; i++) {
      const key = keyArr[i];
      selectedPeriod[key] = valueArr[i];
    }

    console.log(selectedPeriod);
    setPeriod(selectedPeriod);
  }, [selectedStart, selectedEnd]);

  const selectDay = (day) => {
    if (selectedStart === '-') {
      setSelectedStart(day);
    } else if (selectedEnd === '-') {
      setSelectedEnd(day);
    } else {
      // reset
      setSelectedStart('-');
      setSelectedEnd('-');
    }
  };

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <CalendarHeaderWrapper>
        <DayWrapper>
          <DayKeyText>입국 날짜</DayKeyText>
          <DayText>{selectedStart}</DayText>
        </DayWrapper>
        <DayWrapper>
          <DayKeyText>출국 날짜</DayKeyText>
          <DayText>{selectedEnd}</DayText>
        </DayWrapper>
      </CalendarHeaderWrapper>
      <CalendarList
        // current={Date()}
        monthFormat={'yyyy MM'}
        onDayPress={(day) => {
          console.log('selected day', day);
          selectDay(day.dateString);
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
        markedDates={
          //   {
          //   '2020-07-30': {
          //     startingDay: true,
          //     color: '#5F00FF',
          //     textColor: 'white',
          //   },
          //   '2020-07-31': {
          //     selected: true,
          //     color: '#5F00FF',
          //     textColor: 'white',
          //   },
          //   '2020-08-16': {
          //     selected: true,
          //     color: '#5F00FF',
          //     textColor: 'white',
          //   },
          //   '2020-08-17': {
          //     selected: true,
          //     color: '#5F00FF',
          //     textColor: 'white',
          //   },
          //   '2020-08-18': {
          //     selected: true,
          //     color: '#5F00FF',
          //     textColor: 'white',
          //   },
          //   '2020-08-19': {
          //     selected: true,
          //     color: '#5F00FF',
          //     textColor: 'white',
          //   },
          //   '2020-08-20': {
          //     selected: true,
          //     endingDay: true,
          //     color: '#5F00FF',
          //     textColor: 'white',
          //   },
          // }
          period
        }
        // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
        markingType={'period'}
      />
    </SafeAreaView>
  );
};

const CalendarHeaderWrapper = styled.View`
  width: 100%;
  height: 50px;
  background-color: #f2f2f2;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
`;

const DayWrapper = styled.View`
  width: 74px;
  margin-left: 30px;
  margin-right: 30px;
`;

const DayText = styled.Text`
  font-size: 12px;
`;

const DayKeyText = styled(DayText)`
  color: #5c5c5c;
  margin-bottom: 4px;
`;

export default App;
