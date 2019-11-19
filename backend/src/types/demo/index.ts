export interface Demo {
  id: number
  name: string
  nameWithHello: string
}

export interface CreateDemoParams {
  name: string
}

export interface GetDemoParams {
  id: number
}
