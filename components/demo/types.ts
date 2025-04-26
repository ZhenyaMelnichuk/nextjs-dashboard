export type Product = {
  id: string
  name: string
  images: string[]
  price: number
  commentsCount: number
  rating: number
  params: Param[]
}

export type Param = {
  key: string
  value: string
}
