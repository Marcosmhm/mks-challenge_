export interface ProductType {
  id: number,
  name: string,
  brand: string,
  description: string,
  photo: string,
  price: number,
  quantity: number,
}

export interface ProductResponse {
  count: number,
  products: ProductType[],
}