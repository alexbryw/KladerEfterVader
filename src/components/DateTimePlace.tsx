import React, {CSSProperties} from 'react';
import moment from 'moment';
import 'moment/locale/sv';


export default function DateTimePlace() {

  let currentTime = moment().format('LT');
  let currentDate = moment().format('LL');
  
  return (
    <div style = {timeContainer}>
      <div style = {timeItem}>
        {currentTime}
      </div>
      <div style = {timeItem}>
        {currentDate}
      </div>    
    </div>
  );
}

const timeContainer: CSSProperties = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}

const timeItem: CSSProperties = {
  margin: '0 0 2rem 0'
}