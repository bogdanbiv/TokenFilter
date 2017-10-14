// @flow
import TokenFilter from '../../src/index.js'
import React, {Component} from 'react'

class ExampleTokenFilter extends Component<
  void,
  {
    filters: Array<TokenFilterEntry>,
  },
> {
  state = {
    filters: [],
  }

  render() {
    return [
      <ul key="filters_list">
        {this.state.filters.map((filter, index) => {
          let key = `${filter.value}:${filter.category}:${filter.operator}`
          return (
            <li key={key}>
              {filter.category} {filter.operator} {filter.value}
              <button
                onClick={() => {
                  this.setState({
                    filters: this.state.filters.splice(index, 1),
                  })
                }}
              >
                remove
              </button>
            </li>
          )
        })}
      </ul>,

      <TokenFilter
        key="add_filter"
        currentFilters={this.state.filters}
        receiveNewFilters={newFilters => {
          console.log('received new filters', newFilters)

          this.setState({
            filters: newFilters,
          })
        }}
        options={[
          {
            category: 'Name',
            type: 'text',
          },

          {
            category: 'Price',
            type: 'number',
          },

          {
            category: 'Country',
            type: 'combobox',
            getItems: () => {
              return []
            },
          },
        ]}
      />,
    ]
  }
}

export default ExampleTokenFilter
