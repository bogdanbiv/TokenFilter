// @flow
import React from 'react'

export default function NumberValueType({
  value,
  onChange,
}: {
  value: any,
  onChange: Function,
}) {
  return (
    <input
      type="number"
      value={value}
      onInput={e => onChange(e.target.value)}
    />
  )
}

NumberValueType.displayName = 'NumberValueType'
