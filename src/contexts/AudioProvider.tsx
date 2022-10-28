import {
  createContext,
  useState,
  useMemo,
  useRef,
  ComponentProps,
  FC,
  PropsWithChildren,
  useEffect,
  useCallback,
} from 'react'

type AudioContextValue = {
  src: string
  audioRef: React.RefObject<HTMLAudioElement>
  setAudio: (src: string) => void
  isPlaying: boolean
  playAudio: () => void
  pauseAudio: () => void
  setDefaultAudio: () => void
  title: string
  setTitle: React.Dispatch<React.SetStateAction<string>>
}

export const AudioContext = createContext<AudioContextValue>(
  {} as AudioContextValue,
)

const AudioProvider = ({ children }: ComponentProps<FC<PropsWithChildren>>) => {
  const [src, setSrc] = useState<string>('./static/audios/emaj01.mp3')
  const [title, setTitle] = useState<string>('Default Audio')
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.onpause = () => {
        setIsPlaying(false)
      }
      audioRef.current.onplay = () => {
        setIsPlaying(true)
      }
    }
  }, [])

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

  const playAudio = useCallback(() => {
    if (!isPlaying) {
      audioRef.current?.play()
    }
  }, [isPlaying])

  const pauseAudio = useCallback(() => {
    if (isPlaying) {
      audioRef.current?.pause()
    }
  }, [isPlaying])

  const setDefaultAudio = () => {
    setAudio('./static/audios/emaj01.mp3')
  }

  const value = useMemo(
    () => ({
      src,
      audioRef,
      setAudio,
      isPlaying,
      playAudio,
      pauseAudio,
      setDefaultAudio,
      title,
      setTitle,
    }),
    [src, audioRef],
  )

  return <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
}

export default AudioProvider
