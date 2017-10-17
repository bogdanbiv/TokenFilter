// @flow
import React from 'react'

import Downshift from 'downshift'

export default function BasicAutocomplete({
  controlledValue,
  items,
  onChange,
  placeholder,
  disabled,
}: {
  controlledValue: any,
  items: Array<any>,
  onChange: any => void,
  placeholder: string,
  disabled: boolean,
}) {
  return (
    <Downshift selectedItem={controlledValue} onChange={onChange}>
      {({
        getInputProps,
        getItemProps,
        isOpen,
        toggleMenu,
        inputValue,
        selectedItem,
        highlightedIndex,
      }) => (
        <div>
          <input
            onFocus={toggleMenu}
            {...getInputProps({
              placeholder,
              disabled,
              style: {
                width: '300px',
              },
            })}
          />

          {isOpen ? (
            <div style={{border: '1px solid #ccc'}}>
              {items
                .filter(
                  i =>
                    !inputValue ||
                    i.toLowerCase().includes(inputValue.toLowerCase()),
                )
                .map((item, index) => (
                  <div
                    {...getItemProps({item})}
                    key={item}
                    style={{
                      backgroundColor:
                        highlightedIndex === index ? 'gray' : 'white',
                      fontWeight: selectedItem === item ? 'bold' : 'normal',
                    }}
                  >
                    {item}
                  </div>
                ))}
            </div>
          ) : null}
        </div>
      )}
    </Downshift>
  )
}

BasicAutocomplete.defaultProps = {
  placeholder: 'Select...',
  disabled: false,
  controlledValue: false,
}
