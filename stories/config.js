/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import {configure, storiesOf} from '@storybook/react'
import React from 'react'

import Basic from './examples/basic'
import ExampleTokenFilter from './examples/token-filter.js'

function loadStories() {
  // clear the console to make debugging experience better
  console.clear()

  storiesOf('Examples', module).add('basic', () => <Basic />)
  storiesOf('Examples', module).add('filter', () => <ExampleTokenFilter />)
}

configure(loadStories, module)
