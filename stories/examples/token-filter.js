import TokenFilter from '../../src/index.js'
import React, {Component} from 'react'

class ExampleTokenFilter extends Component {
  state = {
    filters: [],
  }
  render() {
    return this.state.filters
      .map(filter => {
        return <span key={filter.value}>{filter.value}</span>
      })
      .concat([
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
            },

            {
              category: 'Price',
            },
          ]}
        />,
      ])
  }
}

export default ExampleTokenFilter
