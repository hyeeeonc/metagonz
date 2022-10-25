import { createContext, useState, useMemo } from 'react'

type AudioContextValue = {
  src: string
  setSrc: React.Dispatch<React.SetStateAction<string>>
}

export const AudioContext = createContext<AudioContextValue>(
  {} as AudioContextValue,
)

const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const [src, setSrc] = useState<string>('audios/emaj01.mp3')

  const value = useMemo(
    () => ({
      src,
      setSrc,
    }),
    [src],
  )

  return <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
}

export default AudioProvider
