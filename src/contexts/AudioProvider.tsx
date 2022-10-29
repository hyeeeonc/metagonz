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
  setAudio: (src: string) => void
  isPlaying: boolean
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>
  playAudio: () => void
  pauseAudio: () => void
  setDefaultAudio: () => void
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
      file(
        relativePath: {
          eq: "audios/Metagonz ARA feat.Pure 100% - BE A PART OF US.mp3"
        }
      ) {
        publicURL
      }
    }
  `)
  const [src, setSrc] = useState<string>('')
  const [title, setTitle] = useState<string>('Default Audio')
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)

  // useEffect(() => {
  //   setAudio(`${defaultAudio.file.publicURL}`)
  // }, [])

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
    setIsPlaying(true)
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.load()
      // eslint-disable-next-line
      audioRef.current.play()
      audioRef.current.onended = () => {
        // eslint-disable-next-line
        audioRef.current?.play()
      }
    }
    console.log(isPlaying)
  }

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
      setIsPlaying,
    }),
    [src, audioRef, isPlaying, title],
  )

  return <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
}

export default AudioProvider
