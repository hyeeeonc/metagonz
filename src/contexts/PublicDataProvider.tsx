import {
  useEffect,
  useState,
  ComponentProps,
  FC,
  PropsWithChildren,
  useMemo,
  createContext,
} from 'react'

type PublicDataContextValue = {
  publicData: PublicDataType
}

export const PublicDataContext = createContext<PublicDataContextValue>(
  {} as PublicDataContextValue,
)

type PublicDataType = {
  discord: number
  twitter: number
  roadmap: {
    progress: number
    text: string
    year: number
  }[]
}

const PublicDataProvider = ({
  children,
}: ComponentProps<FC<PropsWithChildren>>) => {
  const [publicData, setPublicData] = useState<PublicDataType>(
    {} as PublicDataType,
  )

  useEffect(() => {
    ;(async function () {
      const res = await fetch(
        `http://jsongettester.s3-website-us-east-1.amazonaws.com/parse.json`,
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        },
      )
      const data: PublicDataType = await res.json()
      setPublicData(data)
    })()
  }, [])

  const value = useMemo(
    () => ({
      publicData,
    }),
    [publicData],
  )

  return (
    <PublicDataContext.Provider value={value}>
      {children}
    </PublicDataContext.Provider>
  )
}

export default PublicDataProvider
