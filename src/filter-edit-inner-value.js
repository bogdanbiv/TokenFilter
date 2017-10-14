// @flow
import React, {Component} from 'react'

type Props = {
  currentlyConstructedFilter: TokenFilterEntryCreating,
  category: TokenFilterCategoryDescritor,
  onChange: Function,
}

import BasicText from './value-types/text.js'
import NumberValue from './value-types/number.js'

export default function({
  currentlyConstructedFilter,
  category,
  onChange,
}: Props) {
  let ValueInput = BasicText

  if (category.type === 'number') {
    ValueInput = NumberValue
  }

  return (
    <ValueInput value={currentlyConstructedFilter.value} onChange={onChange} />
  )
}
