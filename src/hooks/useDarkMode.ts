import React, { createContext, useState } from 'react'
import { useMediaQuery } from '@material-ui/core'

interface DarkModeContext {
  type: boolean
  setType: (value: boolean) => void
  isDeviceDarkMode: () => boolean
  toggleDarkMode: () => void
}

const DarkModeContext = createContext<DarkModeContext>({
  type: false,
  isDeviceDarkMode: () => {
    return true
  },
  setType: () => {},
  toggleDarkMode: () => {},
})

function useDarkMode() {
  const [type, setType] = useState(false)

  function isDeviceDarkMode() {
    return useMediaQuery('(prefers-color-scheme: dark)')
  }

  function toggleDarkMode() {
    setType(!type)
  }

  return {
    type,
    setType,
    isDeviceDarkMode,
    toggleDarkMode,
  }
}

export { DarkModeContext, useDarkMode }
