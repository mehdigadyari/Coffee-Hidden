import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import Title from '../../component/TitleAbout'
import { getTranslate } from '../../localization'
import Portfolio from '../../component/portfolio'
import Q0 from '../../asset/prof2.jpg'
import Q1 from '../../asset/q1.jpg'
import Q2 from '../../asset/q2.jpg'
import Q3 from '../../asset/q3.jpg'
import Q4 from '../../asset/q4.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    padding: 30,
    paddingTop: 60,
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      paddingRight: 10,
      paddingLeft: 10
    }
  }
}))

export default function Index() {
  const classes = useStyles()
  const trans = getTranslate()

  return (
    <div className={classes.root}>
      <Title title={trans.portfolios} />

      <Grid item container xs={12}>
        <Grid container direction="row">
          <Portfolio image={Q0} />
          <Portfolio image={Q1} />
          <Portfolio image={Q2} />
          <Portfolio image={Q3} />
        </Grid>
        <Grid container direction="row">
          <Portfolio image={Q0} />
          <Portfolio image={Q1} />
          <Portfolio image={Q4} />
          <Portfolio image={Q3} />
        </Grid>
      </Grid>
    </div>
  )
}
