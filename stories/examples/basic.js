import React, {Component} from 'react'

// import Autocomplete from '../../src'

class Examples extends Component {
  state = {
    selectedColor: '',
  }

  changeHandler = selectedColor => {
    this.setState({selectedColor})
  }

  render() {
    const items = ['Black', 'Red', 'Green', 'Blue', 'Orange', 'Purple']

    return (
      <div>
        <h2>basic example</h2>

        <div display="flex" justifyContent="center">
          {items.map(item => (
            <div onClick={() => this.changeHandler(item)} key={item}>
              {item}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Examples
