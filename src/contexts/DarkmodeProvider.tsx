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
}

export const DarkmodeContext = createContext<DarkmodeContextValue>(
  {} as DarkmodeContextValue,
)

const DarkmodeProvider = ({
  children,
}: ComponentProps<FC<PropsWithChildren>>) => {
  const [isDarkmode, setMode] = useState<boolean>(false)

  const toggleMode = () => setMode(isDarkmode => !isDarkmode)

  const value = useMemo(
    () => ({
      isDarkmode,
      setMode,
      toggleMode,
    }),
    [isDarkmode],
  )

  return (
    <DarkmodeContext.Provider value={value}>
      {children}
    </DarkmodeContext.Provider>
  )
}

export default DarkmodeProvider
