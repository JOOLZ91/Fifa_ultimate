export interface IState {
  productsInCart: IProductBasket[]
  status: IStatus
}

export interface IStatus {
  text: string
  type: string
  check: boolean
  sending: boolean
}

export interface IAlert {
  text: string
  type: string
  time: number
}

export interface IProduct {
  id: number
  name: string
  description: string
  price: number
  img: string
  legendary: boolean
  position: string
  attributes: IAttributes
}

export interface IAttributes {
  dribbling: number
  speed: number
  shot: number
  defensive: number
  overall: number
}

export type IProductBasket = IProduct & {
  count: number
}
