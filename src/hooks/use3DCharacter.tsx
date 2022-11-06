import { graphql, useStaticQuery } from 'gatsby'

type Node = {
  node: {
    publicURL: string
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
            publicURL
          }
        }
      }
    }
  `)

  const getImageSrc = (index: number): string => {
    if (index <= 0 || index > 100) return ''
    const result = edges.find(({ node }) =>
      node.publicURL.includes(`360_0001${`${index - 1}`.padStart(3, '0')}.jpg`),
    )
    return result?.node.publicURL ?? ''
  }

  return [edges, getImageSrc]
}

export { use3DCharacter }
