import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import GetAppIcon from '@material-ui/icons/GetApp'
import Button from '@material-ui/core/Button'

import Sales from './sales/Sales'
import MainLeft from '../mainLeft/MainLeft'
import { LeftGrid } from './Dashboard.styles'
import Sankey from './suggestions/Sankey'
import Suggestions from './suggestions/Suggestions'
import AdherenceVolumeOfCallEmil from './adherence/AdherenceRight'

const Dashboard = () => {
  return (
    <Grid container>
      <LeftGrid item xs={2}>
        <MainLeft />
      </LeftGrid>
      <Grid item xs={10}>
        <Box mt={5}>
          <Typography align='center' component='h2' variant='h2'>
            YOUR PERFORMANCE
          </Typography>
          <Box>
            <Typography component='p' align='center' gutterBottom>
              Maximise your revenue from every interaction with machine learning
              insights.
            </Typography>
          </Box>
        </Box>
        <Container>
          <Paper variant='outlined'>
            <Grid container direction='row'>
              <Grid item xs={6}>
                sd
              </Grid>
              <Grid item xs={6} justify='flex-end'>
                <Button endIcon={<GetAppIcon />}>Updated : 12.9</Button>
              </Grid>
            </Grid>
          </Paper>
          {/* starts sales */}
          <Box my={1}>
            <Typography component='h3' variant='h3'>
              SALES PERFORMANCE
            </Typography>
          </Box>
          <Paper variant='outlined'>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Paper>
                  <Sales />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper>Graph</Paper>
              </Grid>
            </Grid>
          </Paper>
          {/* Ends sales */}
          {/* starts adherence */}
          <Box my={2}>
            <Typography component='h3' variant='h3'>
              ADHERENCE
            </Typography>
          </Box>
          <Paper variant='outlined'>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Paper>Graph</Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper>
                  <AdherenceVolumeOfCallEmil />
                </Paper>
              </Grid>
            </Grid>
          </Paper>

          {/* Ends sales */}
          {/* starts suggestions */}
          <Box my={2}>
            <Typography component='h3' variant='h3'>
              SUGGESTIONS
            </Typography>
          </Box>
          <Paper variant='outlined'>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} p={3}>
                <Paper>
                  <Suggestions />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper>
                  <Sankey />
                </Paper>
              </Grid>
            </Grid>
          </Paper>

          {/* Ends  */}
        </Container>
        <Box m={5}></Box>
      </Grid>
    </Grid>
  )
}

export default Dashboard
