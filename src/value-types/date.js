import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ignoredInitialize from 'react-dates/initialize'
import {SingleDatePicker} from 'react-dates'
import moment from 'moment'

// TODO: extract this in a separated file
// import ignoredCSS from 'react-dates/lib/css/_datepicker.css'

export default class TokenFilterValueDate extends Component {
  static propTypes = {
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired,
  }

  state = {
    focused: false,
  }

  render() {
    return (
      <SingleDatePicker
        date={this.props.value ? moment.unix(this.props.value) : null}
        onDateChange={date => {
          this.props.onChange(date.format('X'))
        }}
        focused={this.state.focused}
        onFocusChange={({focused}) => this.setState({focused})}
      />
    )
  }
}
