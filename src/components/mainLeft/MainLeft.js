import React from 'react'
import AssessmentIcon from '@material-ui/icons/Assessment'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'

const MainLeft = () => {
  return (
    <div>
      <ButtonGroup orientation='vertical' fullWidth>
        <Button variant='contained' color='inActive'>
          <Grid container direction='column'>
            <Grid item>
              <PeopleAltIcon />
            </Grid>
            <Grid item>Suggestions</Grid>
          </Grid>
        </Button>
        <Button variant='contained' color='secondary'>
          <Grid container direction='column' alignItems='center'>
            <Grid item>
              <AssessmentIcon />
            </Grid>
            <Grid item>Reports</Grid>
          </Grid>
        </Button>
      </ButtonGroup>
    </div>
  )
}

export default MainLeft
