export type Item = {
  dna: string
  name: string
  description: string
  image: string
  imageName: string
  edition: string
  date: Date
  attributes: Array<{
    trait_type: string
    value: string
  }>
}
