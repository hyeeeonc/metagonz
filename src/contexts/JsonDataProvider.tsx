import {
  createContext,
  FC,
  ComponentProps,
  PropsWithChildren,
  useState,
  useEffect,
} from 'react'

type JsonDataType = {
  discord: number
  twitter: number
  roadmap: Array<{
    progress: number
    text: string
    year: number
  }>
}

export const JsonDataContext = createContext<JsonDataType>({} as JsonDataType)

const JsonDataProvider = ({
  children,
}: ComponentProps<FC<PropsWithChildren>>) => {
  const [data, setData] = useState<JsonDataType>({
    discord: 0,
    twitter: 0,
    roadmap: [],
  })

  useEffect(() => {
    ;(async function () {
      const res = await fetch(
        `https://d178gfbb5ksb7v.cloudfront.net/parse.json`,
      )
      const json: JsonDataType = await res.json()
      setData(json)
    })()
  }, [])

  return (
    <JsonDataContext.Provider value={data}>{children}</JsonDataContext.Provider>
  )
}

export default JsonDataProvider
