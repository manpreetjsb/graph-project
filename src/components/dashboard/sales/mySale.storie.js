import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

import MySale from './mySale'

export default {
  title: 'Components/Dashboard/MySale/',
  component: MySale,
}

const Template = () => <MySale />

export const Default = Template.bind({})
