// @flow
import React from 'react'
import TimePicker from 'rc-time-picker'
import moment from 'moment'

export default function TimeValueType({
  value,
  onChange,
}: {
  value: any,
  onChange: Function,
}) {
  return (
    <TimePicker
      value={value ? moment.unix(value) : null}
      onChange={date => {
        onChange(date.format('X'))
      }}
    />
  )
}

TimeValueType.displayName = 'TimeValueType'
