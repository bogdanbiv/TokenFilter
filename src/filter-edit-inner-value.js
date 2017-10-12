// @flow
import React, {Component} from 'react'

type Props = {
  currentlyConstructedFilter: TokenFilterEntryCreating,
  categoryType: TokenFilterCategoryType,
  onChange: Function,
}

export default function({
  currentlyConstructedFilter,
  categoryType,
  onChange,
}: Props) {
  return (
    <input
      type="text"
      value={currentlyConstructedFilter.value}
      onInput={e => onChange(e.target.value)}
    />
  )
}
