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
import { graphql, useStaticQuery } from 'gatsby'

type AudioContextValue = {
  src: string
  audioRef: React.RefObject<HTMLAudioElement>
  isPlaying: boolean
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>
  playAudio: () => void
  pauseAudio: () => void
  setDefaultAudio: () => void
  setCharacterAudio: (src: string) => void
  title: string
  setTitle: React.Dispatch<React.SetStateAction<string>>
}
export const AudioContext = createContext<AudioContextValue>(
  {} as AudioContextValue,
)

type AudioType = {
  file: {
    publicURL: string
  }
}

const AudioProvider = ({ children }: ComponentProps<FC<PropsWithChildren>>) => {
  const defaultAudio: AudioType = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "audios/home.mp3" }) {
        publicURL
      }
    }
  `)
  const [src, setSrc] = useState<string>('')
  const [title, setTitle] = useState<string>('Default Audio')
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [isDefaultAudio, setIsDefaultAudio] = useState<boolean>(true)
  const [isInitialLoad, setIsInitialLoad] = useState<boolean>(true)

  useEffect(() => {
    setSrc(defaultAudio.file.publicURL)
  }, [])

  useEffect(() => {
    if (isInitialLoad) {
      setIsInitialLoad(false)
      if (audioRef.current) {
        audioRef.current.volume = 0.3
        audioRef.current.load()
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.load()
        // eslint-disable-next-line
        if (isPlaying) {
          audioRef.current.play()
        }
        audioRef.current.onended = () => {
          // eslint-disable-next-line
          audioRef.current?.play()
        }
      }
    }
  }, [src])

  const playAudio = useCallback(() => {
    if (!isPlaying) {
      // eslint-disable-next-line
      audioRef.current?.play()
      setIsPlaying(true)
    }
  }, [isPlaying])

  const pauseAudio = useCallback(() => {
    if (isPlaying) {
      audioRef.current?.pause()
      setIsPlaying(false)
    }
  }, [isPlaying])

  const setDefaultAudio = useCallback(() => {
    if (!isDefaultAudio) {
      setSrc(defaultAudio.file.publicURL)
      setIsDefaultAudio(true)
    }
  }, [isDefaultAudio])

  const setCharacterAudio = useCallback(
    (src: string) => {
      setSrc(src)
      setIsDefaultAudio(false)
    },
    [isDefaultAudio],
  )

  const value = useMemo(
    () => ({
      src,
      audioRef,
      isPlaying,
      setIsPlaying,
      playAudio,
      pauseAudio,
      setDefaultAudio,
      setCharacterAudio,
      title,
      setTitle,
    }),
    [src, isPlaying, title, isDefaultAudio],
  )

  return <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
}

export default AudioProvider
