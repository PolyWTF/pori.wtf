import React, { ReactEventHandler, MouseEventHandler } from 'react'
import {
  Button,
  Typography,
  makeStyles,
  Grid,
  IconButton,
  AppBar,
  Toolbar,
  Drawer as MaterialDrawer,
  List,
  ListItem,
  ListItemProps,
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
  const [drawerStatus, toggleDrawerStatus] = React.useState(false)
  const classes = TopStyles()
  return (
    <>
      <AppBar color="default" position="sticky" className={classes.appBar}>
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-end"
          >
            <Grid item>
              <IconButton
                onClick={() => toggleDrawerStatus(!drawerStatus)}
                edge="start"
              >
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
      {/* <Drawer open={drawerStatus} /> */}
    </>
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

type DrawerProps = {
  open: boolean
}

const Drawer = (props: DrawerProps) => {
  function onClickHandler(path: string) {
    navigate(`/${path}`)
  }
  return (
    <MaterialDrawer open={props.open} variant="permanent" anchor="left">
      <List>
        {['about', 'contact'].map((path, index) => (
          <ListItem key={index} onClick={() => onClickHandler(path)}>
            {toUpperCamelCase(path)}
          </ListItem>
        ))}
      </List>
    </MaterialDrawer>
  )
}

function toUpperCamelCase(text: string) {
  return `${text.charAt(0).toUpperCase()}${text.substring(1)}`
}

export default Top
