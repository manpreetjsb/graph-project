import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

import Suggestions from './Suggestions'

export default {
  title: 'Components/Dashboard/Suggestions',
  component: Suggestions,
}

const Template = () => <Suggestions />

export const Default = Template.bind({})
