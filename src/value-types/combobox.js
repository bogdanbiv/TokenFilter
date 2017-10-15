// @flow
/* eslint no-console: "off" */

import React from 'react'

import BasicAutocomplete from '../basic-autocomplete'

export default function ComboboxValue({
  value,
  onChange,
  category,
}: {
  value: any,
  onChange: Function,
  category: TokenFilterCategoryDescritor,
}) {
  if (!category.getItems) {
    console.error(
      'Combobox value type requires you to pass a getItems function that will actually pass all the items.',
    )
  }

  const itemsGetter = category.getItems || (() => [])

  return (
    <BasicAutocomplete
      placeholder="Pick a value..."
      controlledValue={value}
      onChange={receivedValue => onChange(receivedValue)}
      items={itemsGetter()}
    />
  )
}
