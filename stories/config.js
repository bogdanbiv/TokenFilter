/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import {configure, storiesOf} from '@storybook/react'
import React from 'react'

import Basic from './examples/basic'

function loadStories() {
  // clear the console to make debugging experience better
  console.clear()

  storiesOf('Examples', module).add('basic', () => <Basic />)
}

configure(loadStories, module)
