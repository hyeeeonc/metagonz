export default class Octagon {
  adj: Array<Octagon | null>
  x: number
  y: number
  img: string
  url: string
  title: string
  sizeUp: () => void
  sizeDown: () => void

  constructor(
    y: number,
    x: number,
    img: string,
    url: string,
    title: string,
    index: number,
  ) {
    this.x = x
    this.y = y
    this.img = img
    this.url = url
    this.title = title
    this.adj = []

    if (index === 3) {
      this.sizeUp = () => {
        this.y += 35
        this.adj.forEach((o, i) => {
          o?.move(
            -Math.sin((Math.PI / 4) * i + Math.PI / 8) * 35,
            -Math.cos((Math.PI / 4) * i + Math.PI / 8) * 35 + 35,
            i,
          )
        })
      }
      this.sizeDown = () => {
        this.y -= 35
        this.adj.forEach((o, i) => {
          o?.move(
            Math.sin((Math.PI / 4) * i + Math.PI / 8) * 35,
            Math.cos((Math.PI / 4) * i + Math.PI / 8) * 35 - 35,
            i,
          )
        })
      }
    } else if (index === 7) {
      this.sizeUp = () => {
        this.x += 35
        this.adj.forEach((o, i) => {
          o?.move(
            -Math.sin((Math.PI / 4) * i + Math.PI / 8) * 35 + 35,
            -Math.cos((Math.PI / 4) * i + Math.PI / 8) * 35,
            i,
          )
        })
      }
      this.sizeDown = () => {
        this.x -= 35
        this.adj.forEach((o, i) => {
          o?.move(
            Math.sin((Math.PI / 4) * i + Math.PI / 8) * 35 - 35,
            Math.cos((Math.PI / 4) * i + Math.PI / 8) * 35,
            i,
          )
        })
      }
    } else {
      this.sizeUp = () => {
        this.adj.forEach((o, i) => {
          o?.move(
            -Math.sin((Math.PI / 4) * i + Math.PI / 8) * 35,
            -Math.cos((Math.PI / 4) * i + Math.PI / 8) * 35,
            i,
          )
        })
      }
      this.sizeDown = () => {
        this.adj.forEach((o, i) => {
          o?.move(
            Math.sin((Math.PI / 4) * i + Math.PI / 8) * 35,
            Math.cos((Math.PI / 4) * i + Math.PI / 8) * 35,
            i,
          )
        })
      }
    }
  }

  setAdj(adj: Array<Octagon | null>) {
    this.adj = adj
  }

  move(x: number, y: number, index: number) {
    this.x += x
    this.y += y
    this.adj.forEach((o, i) => {
      if (Math.abs(i - index) === 4) return
      o?.move(x, y, i)
    })
  }
}
