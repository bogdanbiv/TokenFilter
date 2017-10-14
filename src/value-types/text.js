// @flow
import React from 'react'

export default function({value, onChange}: {value: any, onChange: Function}) {
  return (
    <input type="text" value={value} onInput={e => onChange(e.target.value)} />
  )
}
