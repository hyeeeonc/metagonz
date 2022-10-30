import {
  createContext,
  ComponentProps,
  FC,
  PropsWithChildren,
  useState,
  useMemo,
} from 'react'

type DarkmodeContextValue = {
  isDarkmode: boolean
  toggleMode: () => void
  setMode: React.Dispatch<React.SetStateAction<boolean>>

  menuOpened: boolean
  toggleMenu: () => void
}

export const DarkmodeContext = createContext<DarkmodeContextValue>(
  {} as DarkmodeContextValue,
)

const DarkmodeProvider = ({
  children,
}: ComponentProps<FC<PropsWithChildren>>) => {
  const [isDarkmode, setMode] = useState<boolean>(false)
  const [menuOpened, setMenuOpened] = useState<boolean>(false)

  const toggleMode = () => setMode(isDarkmode => !isDarkmode)

  const toggleMenu = () =>
    setMenuOpened(menuOpened => {
      if (!menuOpened) {
        setMode(false)
      }
      return !menuOpened
    })

  const value = useMemo(
    () => ({
      isDarkmode,
      setMode,
      toggleMode,
      menuOpened,
      toggleMenu,
    }),
    [isDarkmode, menuOpened],
  )

  return (
    <DarkmodeContext.Provider value={value}>
      {children}
    </DarkmodeContext.Provider>
  )
}

export default DarkmodeProvider
