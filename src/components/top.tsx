import React from 'react'
import {
  Button,
  Typography,
  makeStyles,
  Grid,
  IconButton,
  AppBar,
  Toolbar,
  Icon,
} from '@material-ui/core'
import { navigate } from 'gatsby'
import { DarkModeContext } from '../hooks/useDarkMode'

import MenuIcon from '@material-ui/icons/Menu'
import TwitterIcon from '@material-ui/icons/Twitter'
import GitHubIcon from '@material-ui/icons/GitHub'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import Brightness7Icon from '@material-ui/icons/Brightness7'

const TopStyles = makeStyles({
  appBar: {
    marginBottom: 16,
  },
})

const Top = (props: TopProps) => {
  const classes = TopStyles()
  return (
    <AppBar
      color="default"
      position="sticky"
      className={classes.appBar}
      elevation={2}
    >
      <Toolbar>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="flex-end"
        >
          <Grid item>
            <IconButton edge="start">
              <MenuIcon />
            </IconButton>
            <Button onClick={() => navigate('/')}>
              <Typography variant="h6" component="h1">
                {props.title}
              </Typography>
            </Button>
          </Grid>
          <Grid item>
            <RedirectIconButton to="https://twitter.com/poriWTF">
              <TwitterIcon />
            </RedirectIconButton>
            <RedirectIconButton to="https://github.com/PolyWTF">
              <GitHubIcon />
            </RedirectIconButton>
            <CanSwitchDarkModeButton />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

type TopProps = {
  title: string
}

const RedirectIconButton = (props: redirectIconButtonProps) => {
  return (
    <IconButton edge="start" onClick={() => open(props.to, '_blank')}>
      {props.children}
    </IconButton>
  )
}

type redirectIconButtonProps = {
  to: string
  children: JSX.Element
}

const CanSwitchDarkModeButton = () => {
  const { type, toggleDarkMode } = React.useContext(DarkModeContext)
  return (
    <IconButton edge="start" onClick={() => toggleDarkMode()}>
      {type ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  )
}

export default Top
