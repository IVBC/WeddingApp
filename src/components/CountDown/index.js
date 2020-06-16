import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import * as dateFns from 'date-fns';

import { Container, IconTime, TextTitle, TextTime, Content } from './styles';

const CountDown = () => {
  const [countDown, setCountDown] = useState('');

  const getCountDown = (fDate) => {
    // const result = [];
    // const now = new Date();
    // const parts = ['year', 'month', 'day', 'hour', 'minute'];

    // parts.forEach((p, i) => {
    //   const uP = p.charAt(0).toUpperCase() + p.slice(1);
    //   const t = dateFns[`differenceIn${uP}s`](fDate, now);
    //   if (t) {
    //     result.push(
    //       `${i === parts.length - 1 ? 'and ' : ''}${t} ${uP}${
    //         t === 1 ? '' : 's'
    //       }`
    //     );
    //     if (i < parts.length) fDate = dateFns[`sub${uP}s`](fDate, t);
    //   }
    // });
    // return result.join(' ');
    let x = new Date();
    const y = fDate;
    let temp;
    temp = dateFns.differenceInYears(y, x);
    x = dateFns.addYears(x, temp);
    temp = dateFns.differenceInMonths(y, x);
    let result = `${temp} mes${temp > 1 ? 'es' : ''}, `;
    x = dateFns.addMonths(x, temp);
    temp = dateFns.differenceInDays(y, x);
    result = `${result + temp} dia${temp > 1 ? 's' : ''}, `;
    x = dateFns.addDays(x, temp);
    temp = dateFns.differenceInHours(y, x);
    result = `${result + temp} Hr${temp > 1 ? 's' : ''}, `;
    x = dateFns.addHours(x, temp);
    temp = dateFns.differenceInMinutes(y, x);
    result = `${result + temp} Min, `;
    x = dateFns.addMinutes(x, temp);
    temp = dateFns.differenceInSeconds(y, x);
    result = `${result + temp} Seg`;

    setCountDown(result);
  };

  useEffect(() => {
    setInterval(() => {
      getCountDown(new Date('2021-02-13'));
    }, 1000);
  }, []);

  return (
    <Container>
      <Content>
        <IconTime name="access-time" />
        <TextTitle>Restam: </TextTitle>
        <TextTime>{countDown}</TextTime>
      </Content>
    </Container>
  );
};

export default CountDown;
