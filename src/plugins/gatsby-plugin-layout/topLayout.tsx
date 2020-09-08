import React from 'react'

import { ThemeProvider, CssBaseline, createMuiTheme } from '@material-ui/core'

import { DarkModeContext, useDarkMode } from '../../hooks/useDarkMode'

const TopLayout = (props: TopLayoutProps) => {
  const mode = useDarkMode()
  const preferMode = mode.isDeviceDarkMode()
  const modifiedTheme = React.useMemo(() => {
    return createMuiTheme({
      palette: {
        type: mode.type ? 'dark' : 'light',
        primary: {
          main: '#484848',
          light: '#212121',
          dark: '#000000',
        },
        secondary: {
          main: '#2962ff',
          light: '#768fff',
          dark: '#004ecb',
        },
      },
      typography: {
        fontFamily: 'Noto Sans JP',
      },
    })
  }, [mode.type])

  React.useMemo(() => {
    mode.setType(preferMode)
  }, [preferMode])

  return (
    <>
      <DarkModeContext.Provider value={mode}>
        <ThemeProvider theme={modifiedTheme}>
          <CssBaseline />
          {props.children}
        </ThemeProvider>
      </DarkModeContext.Provider>
    </>
  )
}

type TopLayoutProps = {
  children: React.ReactChildren
}

export default TopLayout
