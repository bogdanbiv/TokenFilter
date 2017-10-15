// @flow
import React, {Component} from 'react'

type Props = {
  currentlyConstructedFilter: TokenFilterEntryCreating,
  category: TokenFilterCategoryDescritor,
  onChange: Function,
}

import BasicText from './value-types/text.js'
import NumberValue from './value-types/number.js'
import ComboboxValue from './value-types/combobox.js'
import DateValue from './value-types/date.js'

export default function({
  currentlyConstructedFilter,
  category,
  onChange,
}: Props) {
  let ValueInput = BasicText

  if (category.type === 'number') {
    ValueInput = NumberValue
  }

  if (category.type === 'combobox') {
    ValueInput = ComboboxValue
  }

  if (category.type === 'date') {
    ValueInput = DateValue
  }

  return (
    <ValueInput
      category={category}
      value={currentlyConstructedFilter.value}
      onChange={onChange}
    />
  )
}
