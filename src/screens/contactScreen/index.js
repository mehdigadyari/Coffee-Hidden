import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, TextField, Button } from '@material-ui/core'
import PhoneIcon from '@material-ui/icons/CallEndOutlined'
import EmailIcon from '@material-ui/icons/EmailOutlined'
import RoomIcon from '@material-ui/icons/RoomOutlined'
import { getTranslate } from '../../localization'
import Title from '../../component/TitleAbout'
import './contact.css'
import Contact from '../../component/contact'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh'
  },
  contactGrid: {
    paddingTop: 60,
    paddingBottom: 50,
    paddingRight: 30,
    paddingLeft: 30,
    [theme.breakpoints.down('xs')]: {
      paddingRight: 5,
      paddingLeft: 5
    }
  },
  FormGrid: { padding: 10 },
  detailsGrid: { padding: 35 },
  getintouch: {
    textAlign: 'left'
  },
  TextFieldStyle: {
    marginTop: 25
  },
  FormBtn: {
    marginTop: 25,
    display: 'flex'
  },
  iconStyle: {
    fontSize: 45,
    color: theme.palette.primary.maintwo
  },
  href: {
    cursor: 'pointer',
    '& a': {
      textDecoration: 'none',
      color: theme.palette.contrastThreshold,
      transition: '0.4'
    }
  }
}))

export default function Index() {
  const classes = useStyles()
  const trans = getTranslate()

  return (
    <Grid alignItems="flex-start" container className={classes.root}>
      <Grid className={classes.contactGrid} item container xs={12}>
        <Title title={trans.contactme} />
        <Grid container direction="row">
          {/* <Grid item xs={12} md={6} className={classes.FormGrid}>
            <Typography className={classes.getintouch} variant="h4">
              {trans.getintouch}
            </Typography>
            <TextField
              className={classes.TextFieldStyle}
              size="medium"
              fullWidth
              required
              id="outlined-required"
              label={trans.enteryourname}
              variant="outlined"
            />
            <TextField
              className={classes.TextFieldStyle}
              size="medium"
              fullWidth
              required
              label={trans.enteryouremail}
              variant="outlined"
            />
            <TextField
              className={classes.TextFieldStyle}
              size="medium"
              fullWidth
              required
              label={trans.enteryoursubject}
              variant="outlined"
            />
            <TextField
              className={classes.TextFieldStyle}
              size="medium"
              fullWidth
              required
              label={trans.enteryourmessage}
              variant="outlined"
              multiline={trans}
              rows={5}
            />
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.FormBtn}
            >
              {trans.sendmessage}
            </Button>
          </Grid>
        */}
          <Grid item xs={12} md={6} className={classes.detailsGrid}>
            <Contact
              icon={<PhoneIcon className={classes.iconStyle} />}
              title={trans.phone}
              text1="09356400154"
            />
            <Contact
              icon={<EmailIcon className={classes.iconStyle} />}
              title={trans.email}
              text1="sti_gad@yahoo.com"
              text2="mehdigadyari@gmail.com"
            />
            <Contact
              icon={<RoomIcon className={classes.iconStyle} />}
              title={trans.address}
              text1="اهواز - گلستان - خیابان بهمن - کافه هیدن"
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography
              variant="overline"
              color="primary"
              className={classes.href}
            >
              کلیه حقوق مادی معنوی این سایت متعلق به
              <a href="http://mehdigadyari.ir/"> ادلان صنعت بامبو </a>
              می باشد
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
