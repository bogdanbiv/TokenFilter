import React, {Component} from 'react'
import PropTypes from 'prop-types'

import keys from 'lodash/keys'
import property from 'lodash/property'

class TokenFilter extends Component {
  render() {
    return (
      <button
        onClick={() => {
          if (this.props.receiveNewFilters) {
            this.props.receiveNewFilters([
              ...this.props.currentFilters,
              {
                category: this.props.options.map(property('category'))[1],
                operator: 'contains',
                value: `hello ${Math.random()}`,
              },
            ])
          }
        }}
      >
        Add A filter
      </button>
    )
  }
}

TokenFilter.propTypes = {
  options: PropTypes.array.isRequired,
  currentFilters: PropTypes.array.isRequired,
  receiveNewFilters: PropTypes.func,
}

export default TokenFilter
