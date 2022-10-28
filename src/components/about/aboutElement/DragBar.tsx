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
  height: 29px;
`

const DragBarIcon = styled.svg`
  width: 29px;
  height: 28px;
`

const DragBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 238px;
  height: 40px;

  color: black;
`

const DragBarBodyBackground = styled.div`
  position: absolute;
  top: 12px;
  right: 19px;

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
  top: -3.5px;

  width: 10px;
  height: 10px;

  // background: black;
`
const DragBar = ({
  page,
  isOn,
  setImgIdx,
}: {
  page: string
  isOn: boolean
  setImgIdx: React.Dispatch<React.SetStateAction<number>>
}) => {
  const [dragProgress, setDragProgress] = useState<number>(1)
  const [isDrag, setIsDrag] = useState<boolean>(false)
  const barController = useRef<HTMLDivElement>(null)

  const [offsetX, setOffsetX] = useState<number>(0)

  const offsetHandler = useCallback(() => {
    setOffsetX(barController.current?.getBoundingClientRect().left ?? 0)
  }, [])

  useEffect(() => {
    setOffsetX(barController.current?.getBoundingClientRect().left ?? 0)
    window.addEventListener('resize', offsetHandler)
    return () => {
      window.removeEventListener('resize', offsetHandler)
    }
  }, [])

  const mouseMoveHandler = useCallback(
    (e: React.MouseEvent) => {
      if (isDrag) {
        if (e.clientX - offsetX >= 2 && e.clientX - offsetX <= 200) {
          setDragProgress(e.clientX - offsetX)
          setImgIdx(Math.ceil((e.clientX - offsetX) / 2))
        }
      }
    },
    [isDrag, offsetX, dragProgress],
  )

  return (
    <DragBarBlock
      style={{
        display: isOn ? 'flex' : 'none',
      }}
      onMouseUp={() => setIsDrag(false)}
      onMouseLeave={() => setIsDrag(false)}
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
      <DragBarContainer onMouseMove={mouseMoveHandler}>
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
            style={{
              left: `${dragProgress}px`,
            }}
          />
        </DragBarBodyBackground>
        {page == 'concept' ? '>' : '+'}
      </DragBarContainer>
    </DragBarBlock>
  )
}

export default DragBar
