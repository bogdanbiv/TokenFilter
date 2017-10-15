// @flow
import React from 'react'

export default function TextValueType({
  value,
  onChange,
}: {
  value: any,
  onChange: Function,
}) {
  return (
    <input type="text" value={value} onInput={e => onChange(e.target.value)} />
  )
}

TextValueType.displayName = 'TextValueType'
