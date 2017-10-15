// @flow
import React, {Component} from 'react'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import {SingleDatePicker} from 'react-dates'
import moment from 'moment'

export default class TokenFilterValueDate extends Component {
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
