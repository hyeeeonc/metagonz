import {
  createContext,
  useState,
  useMemo,
  useRef,
  ComponentProps,
  FC,
  PropsWithChildren,
} from 'react'

type AudioContextValue = {
  src: string
  audioRef: React.RefObject<HTMLAudioElement>
  setAudio: (src: string) => void
}

export const AudioContext = createContext<AudioContextValue>(
  {} as AudioContextValue,
)

const AudioProvider = ({ children }: ComponentProps<FC<PropsWithChildren>>) => {
  const [src, setSrc] = useState<string>('./static/audios/emaj01.mp3')
  const audioRef = useRef<HTMLAudioElement>(null)

  const setAudio = (src: string) => {
    setSrc(src)
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.load()
      audioRef.current.play()
      audioRef.current.onended = () => {
        audioRef.current?.play()
      }
    }
  }

  const value = useMemo(
    () => ({
      src,
      audioRef,
      setAudio,
    }),
    [src],
  )

  return <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
}

export default AudioProvider
