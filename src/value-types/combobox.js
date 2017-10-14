import React, {Component} from 'react'
// @flow
export default function({value, onChange}) {
  return (
    <input
      type="number"
      value={value}
      onInput={e => onChange(e.target.value)}
    />
  )
}
