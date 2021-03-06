import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import * as dateFns from 'date-fns';
import Shimmer from '~/components/Shimmer';
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
    result = `${result + temp} hr${temp > 1 ? 's' : ''}, `;
    x = dateFns.addHours(x, temp);
    temp = dateFns.differenceInMinutes(y, x);
    result = `${result + temp} min, `;
    x = dateFns.addMinutes(x, temp);
    temp = dateFns.differenceInSeconds(y, x);
    result = `${result + temp} s`;

    setCountDown(result);
  };

  useEffect(() => {
    const count = setInterval(() => {
      getCountDown(new Date('2021-02-13T23:00:00.000Z'));
    }, 1000);

    return () => {
      clearInterval(count);
    };
  }, []);

  return (
    <Container>
      <Content>
        <IconTime name="access-time" />
        <TextTitle>Restam: </TextTitle>
        {countDown !== '' ? (
          <TextTime>{countDown}</TextTime>
        ) : (
          <Shimmer
            visible={false}
            shimmerColors={['#F2F5FF', '#CED4ED', '#F2F5FF']}
            style={{ marginLeft: 4, borderRadius: 25 }}
          >
            <Text>Loading</Text>
          </Shimmer>
        )}
      </Content>
    </Container>
  );
};

export default CountDown;
