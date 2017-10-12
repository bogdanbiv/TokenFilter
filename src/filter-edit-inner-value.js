// @flow
import React, {Component} from 'react'

type Props = {
  currentlyConstructedFilter: TokenFilterEntryCreating,
  categoryType: TokenFilterCategoryType,
  onChange: Function,
}

import BasicText from './value-types/text.js'
import NumberValue from './value-types/number.js'

export default function({
  currentlyConstructedFilter,
  categoryType,
  onChange,
}: Props) {
  let ValueInput = BasicText

  if (categoryType === 'number') {
    ValueInput = NumberValue
  }

  return (
    <ValueInput value={currentlyConstructedFilter.value} onChange={onChange} />
  )
}
