import React from 'react'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'

import { ToolbarHeader } from './header.styles'

const Header = () => {
  return (
    <AppBar position='static'>
      <ToolbarHeader>
        <Grid
          container
          direction='row'
          justifyContent='space-between'
          alignItems='center'
        >
          <Grid item>
            <Typography>Logo</Typography>
          </Grid>
          <Grid item justify-content='flex-end'>
            <IconButton edge='end' color='inherit' aria-label='menu'>
              <MenuIcon />
            </IconButton>
          </Grid>
        </Grid>
      </ToolbarHeader>
    </AppBar>
  )
}
export default Header
