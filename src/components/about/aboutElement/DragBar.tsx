import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import styled from '@emotion/styled'

const DragBarBlock = styled.div`
  position: absolute;
  bottom: 82px;
  right: 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: none;

  width: 287px;
  padding: 5px;
  border-radius: 2px 5px;
  height: 29px;

  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 8px;

  z-index: 5;

  @media (max-width: 767px) {
    position: absolute;
    top: 400px;
    left: calc(50vw - 119px);

    width: 238px;
    height: 58px;

    padding: 0;
    border-radius: 0;
    border: 0;
    box-sizing: border-box;
    background-color: transparent;
  }
`

const DragBarIcon = styled.svg`
  width: 29px;
  height: 28px;

  @media (max-width: 767px) {
    position: absolute;
    top: 0;
    left: calc(50% - 14px);
  }
`

const DragBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 238px;
  height: 40px;

  color: black;
  @media (max-width: 767px) {
    position: absolute;
    bottom: -20px;
    left: 0x;
  }
`

const DragBarBodyBackground = styled.div`
  position: absolute;
  top: 17.5px;
  right: 22px;

  width: 200px;
  height: 3px;

  background: rgba(0, 0, 0, 0.1);
  border-radius: 100px;
`

const DragBarBodyProgressBar = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;

  width: 2px;
  height: 3px;

  background: #000000;
  border-radius: 100px;
`

const DragBarBodyProgressController = styled.div`
  position: absolute;

  cursor: pointer;

  left: 2px;
  top: -13.5px;

  width: 30px;
  height: 30px;

  z-index: 10;

  // border: 1px solid black;
`
const DragBar = ({
  page,
  isOn,
  setImgIdx,
  initProgress,
}: {
  page: string
  isOn: boolean
  setImgIdx: React.Dispatch<React.SetStateAction<number>>
  initProgress?: number
}) => {
  const [dragProgress, setDragProgress] = useState<number>(initProgress ?? 1)
  const [isDrag, setIsDrag] = useState<boolean>(false)
  const barController = useRef<HTMLDivElement>(null)

  const [offsetX, setOffsetX] = useState<number>(0)

  const offsetHandler = useCallback(() => {
    const currentOffsetX =
      barController.current?.getBoundingClientRect().left ?? 0
    setOffsetX(currentOffsetX - dragProgress)
  }, [dragProgress])

  useEffect(() => {
    const currentOffsetX =
      barController.current?.getBoundingClientRect().left ?? 0
    setOffsetX(currentOffsetX - dragProgress)

    setImgIdx(Math.round(dragProgress / 2))

    window.addEventListener('resize', offsetHandler)
    return () => {
      window.removeEventListener('resize', offsetHandler)
    }
  }, [])

  const mouseMoveHandler = useCallback(
    (e: React.MouseEvent) => {
      if (isDrag) {
        console.log(e.clientX - offsetX)
        if (e.clientX - offsetX >= 2 && e.clientX - offsetX <= 200) {
          setDragProgress(e.clientX - offsetX)
          setImgIdx(Math.ceil((e.clientX - offsetX) / 2))
        }
      }
    },
    [isDrag, offsetX, dragProgress],
  )

  const touchHandler = useCallback(
    (e: React.TouchEvent) => {
      const progress = e.touches[0].clientX - offsetX
      if (isDrag) {
        if (progress >= 2 && progress <= 200) {
          setDragProgress(progress)
          setImgIdx(Math.ceil(progress / 2))
        }
      }
    },
    [isDrag, offsetX, dragProgress],
  )

  return (
    <DragBarBlock
      style={{
        visibility: isOn ? 'visible' : 'hidden',
      }}
      onMouseUp={() => {
        setIsDrag(false)
      }}
      onMouseLeave={() => {
        setIsDrag(false)
      }}
    >
      <DragBarIcon width="29" height="29" viewBox="0 0 29 29" fill="none">
        <path
          d="M13.1406 22.6562C18.396 22.6562 22.6562 18.396 22.6562 13.1406C22.6562 7.88529 18.396 3.625 13.1406 3.625C7.88529 3.625 3.625 7.88529 3.625 13.1406C3.625 18.396 7.88529 22.6562 13.1406 22.6562Z"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.8691 19.8696L25.3746 25.3751"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </DragBarIcon>
      <DragBarContainer
        onMouseMove={mouseMoveHandler}
        onTouchMove={touchHandler}
      >
        {page == 'concept' ? '<' : '-'}
        <DragBarBodyBackground>
          <DragBarBodyProgressBar
            style={{
              width: `${dragProgress}px`,
            }}
          />
          <DragBarBodyProgressController
            ref={barController}
            onMouseDown={() => {
              setIsDrag(true)
            }}
            onTouchStart={() => {
              setIsDrag(true)
            }}
            onTouchEnd={() => {
              setIsDrag(false)
            }}
            style={{
              left: `${dragProgress - 10}px`,
            }}
          />
        </DragBarBodyBackground>
        {page == 'concept' ? '>' : '+'}
      </DragBarContainer>
    </DragBarBlock>
  )
}

export default DragBar
