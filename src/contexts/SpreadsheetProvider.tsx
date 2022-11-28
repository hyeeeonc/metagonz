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
import { GoogleSpreadsheet } from 'google-spreadsheet'

type SpreadsheetContextValue = {
  doc: GoogleSpreadsheet
  docLoaded: boolean
}

export const SpreadsheetContext = createContext<SpreadsheetContextValue>(
  {} as SpreadsheetContextValue,
)

type SheetType = {
  googleJson: {
    client_email: string
    private_key: string
  }
}

const SpreadsheetProvider = ({
  children,
}: ComponentProps<FC<PropsWithChildren>>) => {
  const {
    googleJson: { client_email, private_key },
  }: SheetType = useStaticQuery(graphql`
    query {
      googleJson {
        client_email
        private_key
      }
    }
  `)

  const [doc, _] = useState(
    new GoogleSpreadsheet('1EMVPZPHGVbm1fVaRraiMBYl0XVnI_xPeGa5sJvVfe18'),
  )

  const [docLoaded, setDocLoaded] = useState<boolean>(false)

  useEffect(() => {
    ;(async function () {
      await doc.useServiceAccountAuth({
        client_email,
        private_key: private_key.replace(/\\n/gm, '\n'),
      })

      await doc.loadInfo()

      setDocLoaded(true)
    })()
  }, [])

  const value = useMemo(
    () => ({
      doc,
      docLoaded,
    }),
    [docLoaded],
  )

  return (
    <SpreadsheetContext.Provider value={value}>
      {children}
    </SpreadsheetContext.Provider>
  )
}

export default SpreadsheetProvider
