import {
  createContext,
  FC,
  ComponentProps,
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from 'react'

type AboutTabContextValue = {
  tabNum: number
  setTabNum: (tabNum: number) => void
  nextTab: () => void
  prevTab: () => void
  scrollHandler: React.WheelEventHandler
}

export const AboutTabContext = createContext<AboutTabContextValue>(
  {} as AboutTabContextValue,
)

const AboutTabProvider =
  (size: number) =>
  ({ children }: ComponentProps<FC<PropsWithChildren>>) => {
    const [isScrollable, setScrollable] = useState<boolean>(true)
    const [tabNum, setTabNum] = useState<number>(1)

    const setTabNum2 = useCallback(
      (newTabNum: number) => {
        if (newTabNum > size || newTabNum < 1) return
        setTabNum(newTabNum)
      },
      [tabNum],
    )

    const nextTab = useCallback(() => {
      if (tabNum >= size) return
      setTabNum(tabNum + 1)
      setScrollable(false)
      setTimeout(() => setScrollable(true), 500)
    }, [tabNum])

    const prevTab = useCallback(() => {
      if (tabNum <= size) return
      setTabNum(tabNum - 1)
      setScrollable(false)
      setTimeout(() => setScrollable(true), 500)
    }, [tabNum])

    const scrollHandler = useCallback(
      (e: React.WheelEvent) => {
        if (!isScrollable) return

        if (e.deltaY > 15) {
          nextTab()
        } else if (e.deltaY < -15) {
          prevTab()
        }
      },
      [isScrollable, tabNum],
    )

    const value = useMemo(
      () => ({
        tabNum,
        setTabNum: setTabNum2,
        nextTab,
        prevTab,
        scrollHandler,
      }),
      [tabNum, isScrollable],
    )

    return (
      <AboutTabContext.Provider value={value}>
        {children}
      </AboutTabContext.Provider>
    )
  }

export default AboutTabProvider
