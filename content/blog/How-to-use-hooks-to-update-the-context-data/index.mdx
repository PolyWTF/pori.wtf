---
title: useContextとHooksを使って子コンポーネントからコンテキスト更新する
date: 2020-08-12 22:51:15
description: useContextを使いカスタムしたhooksから単一のデーターにアクセス、変更できるようにする
---
## 概要
このブログのダークモードを実装するのにかなり苦戦したため未来の自分のためにここに書き残しておく。  
実装、記事を書くのに[この記事](https://medium.com/@0n3z3r0n3/react-usecontext-how-to-update-context-from-child-component-8fa2894eee3d)を大変参考にさせていただきました。  
この場を借りて筆者様に感謝申し上げます。  

## 結論から
同じ型の値、メゾットを持つhooksとコンテキストを定義して`Context.Provider`にブチ込む  

## Contextを作成
```tsx
import React from 'react'

export interface ThemeContextInterface {
  type: boolean,
  setType: (value: boolean) => void,
  isDeviceMode: () => boolean
  toggleMode: () => void
}

const ThemeContext = React.createContext<ThemeContextInterface>({type: false, isDeviceMode: () => { return true }, setType: () => {  }, toggleMode: () => {}}) 

export default ThemeContext

```
ContextとInterfaceを作成  
これから作るHooksの雛形のようなもの

## Hooksを作成
```tsx
import React from 'react'

function useTheme() {
  const [type, setType] = React.useState(false)

  function isDeviceMode() {
    return ('(prefers-color-scheme: dark)')
  }

  function toggleMode() {
    setType(!type)
  }

  return {
    type,
    setType,
    isDeviceMode,
    toggleMode
  }
}

export default useTheme

```
Contextの状態を保存し、更新するフックを作る  
`toggleMode`, `setType`を使ってchildrenから状態を更新する  

## Content.Provider
```tsx
import React from 'react'
import ThemeContext from './hooks/ModeContext'
import useTheme from './hooks/useTheme'

const App = () => {
  const theme = useTheme()
  return (
    <>
      <ThemeContext.Provider value={theme}>
        <div>
          <ToggleThemeButton />
        </div>
      </ThemeContext.Provider>
    </>
  )
}

export default App
```
<App />を`Context.Provider`でラップする

## 子コンポーネントからContextを呼び出す
```tsx
import React from 'react'
import ThemeContext from './hooks/ModeContext'

const ToggleThemeButton = () => {
  const theme = React.useContext(ThemeContext)

  return (
    <button onClick={() => theme.toggleMode()}></button>
  )
}

export default ToggleThemeButton

```
これで子コンポーネントからContextを更新する事ができた