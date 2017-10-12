import React from 'react'

// @flow
export default function({value, onChange}) {
  return (
    <input type="text" value={value} onInput={e => onChange(e.target.value)} />
  )
}
