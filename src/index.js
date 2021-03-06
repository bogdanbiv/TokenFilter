// @flow
import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {property, filter} from 'lodash'

import {getOperatorsForCategoryType} from '../lib/support'
import BasicAutocomplete from './basic-autocomplete'
import FilterEditInnerValue from './filter-edit-inner-value'

type Props = {
  options: Array<TokenFilterCategoryDescritor>,
  currentFilters: Array<TokenFilterEntry>,
  receiveNewFilters: (Array<TokenFilterEntry>) => void,
}

type State = {
  currentlyConstructedFilter: TokenFilterEntryCreating,
}

const constructDefaultFilter = () => ({
  category: null,
  value: '',
  operator: null,
})

class TokenFilter extends Component<Props, State> {
  static propTypes = {
    options: PropTypes.array.isRequired,
    currentFilters: PropTypes.array.isRequired,
    receiveNewFilters: PropTypes.func,
  }

  state = {
    currentlyConstructedFilter: constructDefaultFilter(),
  }

  isButtonDisabled(): boolean {
    return !(
      this.state.currentlyConstructedFilter.category &&
      this.state.currentlyConstructedFilter.value &&
      this.state.currentlyConstructedFilter.operator
    )
  }

  getCurrentCategory(): TokenFilterCategoryDescritor {
    const foundCategory: TokenFilterCategoryDescritor = filter(
      this.props.options,
      {
        category: this.state.currentlyConstructedFilter.category,
      },
    )[0]

    return foundCategory
      ? foundCategory
      : {
          category: 'Empty',
          type: 'text',
        }
  }

  getCurrentCategoryType(): TokenFilterCategoryType {
    return this.getCurrentCategory().type
  }

  getOperatorsItems() {
    const currentCategoryType = this.getCurrentCategoryType()

    if (!currentCategoryType) return []

    return this.state.currentlyConstructedFilter.category
      ? getOperatorsForCategoryType(currentCategoryType)
      : []
  }

  render() {
    return (
      <div>
        <h1>Add a filter</h1>

        <h4>Select a category</h4>

        <BasicAutocomplete
          placeholder="Pick a category..."
          controlledValue={this.state.currentlyConstructedFilter.category}
          onChange={category =>
            this.setState({
              currentlyConstructedFilter: {
                ...this.state.currentlyConstructedFilter,
                category,
                operator: null,
                value: '',
              },
            })}
          items={this.props.options.map(property('category'))}
        />

        <h4>Select operator</h4>

        <BasicAutocomplete
          disabled={!this.state.currentlyConstructedFilter.category}
          controlledValue={this.state.currentlyConstructedFilter.operator}
          placeholder={
            this.state.currentlyConstructedFilter.category
              ? 'Pick an operator'
              : 'Please pick a category before selecting an operator'
          }
          onChange={operator =>
            this.setState({
              currentlyConstructedFilter: {
                ...this.state.currentlyConstructedFilter,
                operator,
              },
            })}
          items={this.getOperatorsItems()}
        />

        <h4>Select Value</h4>

        {this.state.currentlyConstructedFilter.category ? (
          <FilterEditInnerValue
            currentlyConstructedFilter={this.state.currentlyConstructedFilter}
            onChange={value =>
              this.setState({
                currentlyConstructedFilter: {
                  ...this.state.currentlyConstructedFilter,
                  value,
                },
              })}
            category={this.getCurrentCategory()}
          />
        ) : (
          <p>In order to pick a value, please select a category first.</p>
        )}

        <br />

        <button
          disabled={this.isButtonDisabled()}
          title={
            this.isButtonDisabled()
              ? "You can't add the filter until you select everything."
              : 'Add the filter'
          }
          onClick={() => {
            if (!this.props.receiveNewFilters) return

            this.props.receiveNewFilters([
              ...this.props.currentFilters,
              {
                value: this.state.currentlyConstructedFilter.value || '',
                category:
                  this.state.currentlyConstructedFilter.category || 'Name',
                operator:
                  this.state.currentlyConstructedFilter.operator || '===',
              },
            ])

            this.setState({
              currentlyConstructedFilter: constructDefaultFilter(),
            })
          }}
        >
          Add A filter
        </button>
      </div>
    )
  }
}

export default TokenFilter
