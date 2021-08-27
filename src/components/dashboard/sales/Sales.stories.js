import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

import Sales from './Sales'

export default {
  title: 'Components/Dashboard/Sales',
  component: Sales,
}

const Template = () => <Sales />

export const Default = Template.bind({})
