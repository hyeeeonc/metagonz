import { graphql, useStaticQuery } from 'gatsby'

type Node = {
  node: {
    childImageSharp: {
      fluid: {
        originalName: string
        src: string
      }
    }
  }
}

const use3DCharacter = (): [Node[], (index: number) => string] => {
  const {
    allFile: { edges },
  }: {
    allFile: {
      edges: Node[]
    }
  } = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "images/3ds" } }) {
        edges {
          node {
            childImageSharp {
              fluid {
                originalName
                src
              }
            }
          }
        }
      }
    }
  `)

  const getImageSrc = (index: number): string => {
    if (index <= 0 || index > 100) return ''
    const result = edges.find(
      ({ node }) =>
        node.childImageSharp.fluid.originalName ===
        `360_${`${index}`.padStart(4, '0')}.png`,
    )
    return result?.node.childImageSharp.fluid.src ?? ''
  }

  return [edges, getImageSrc]
}

export { use3DCharacter }
