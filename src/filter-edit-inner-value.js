// @flow
import React from 'react'

import BasicText from './value-types/text'
import NumberValue from './value-types/number'
import ComboboxValue from './value-types/combobox'
import DateValue from './value-types/date'
import TimeValue from './value-types/time'

type Props = {
  currentlyConstructedFilter: TokenFilterEntryCreating,
  category: TokenFilterCategoryDescritor,
  onChange: Function,
}

export default function TokenFilterEditInnerValue({
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

  if (category.type === 'time') {
    ValueInput = TimeValue
  }

  return (
    <ValueInput
      category={category}
      value={currentlyConstructedFilter.value}
      onChange={onChange}
    />
  )
}

TokenFilterEditInnerValue.displayName = 'TokenFilterEditInnerValue'
