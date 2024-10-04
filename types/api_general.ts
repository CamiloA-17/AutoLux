export type Product = {
    id_product: number
    title: string
    value: number
    description: string
    stock: number
    state_id: number
}

export type DtoUser = {
    email: string
    password: string
}