import React, {useEffect, useState} from 'react';

import {CalendarList} from 'react-native-calendars';
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

    // console.log(selectedPeriod);
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
    <CalendarScreenWrapper>
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
          // console.log('selected day', day);
          selectDay(day.dateString);
        }}
        // onVisibleMonthsChange={(months) => {
        //   console.log('now these months are visible', months);
        // }}
        pastScrollRange={50}
        futureScrollRange={50}
        scrollEnabled={true}
        showScrollIndicator={true}
        markedDates={period}
        markingType={'period'}
      />
    </CalendarScreenWrapper>
  );
};

const CalendarScreenWrapper = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
`;

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
