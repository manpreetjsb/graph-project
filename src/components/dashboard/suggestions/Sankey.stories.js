import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

import Sankey from './Sankey'

export default {
  title: 'Components/Dashboard/Sankey',
  component: Sankey,
}

const Template = () => <Sankey />

export const Default = Template.bind({})
