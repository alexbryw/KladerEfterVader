import React, {CSSProperties} from 'react'
import moment from 'moment'
import 'moment/locale/sv'
import Clock from './Clock'

export default function DateTimePlace() {
  let currentDate = moment().format('LL')

  return (
    <div style = {timeContainer}>
        <Clock />
      <div style = {timeItem}>
        {currentDate}
      </div> 
    </div>
  )
}

const timeContainer: CSSProperties = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}

const timeItem: CSSProperties = {
  margin: '0 0 2rem 0',
  fontSize: '1.2rem'
}