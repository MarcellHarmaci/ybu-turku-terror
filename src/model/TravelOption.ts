export interface TravelOption {
  travel: string
  modes: {
    name: string
    urls: string[]
    description?: string
  }[]
}
