export interface Location{
    address: string,
    city: string,
    cap: string
}

export interface Product{
    name: string,
    price: number
}

export interface Orders{
    id: string,
    date: string,
    product: Product,
    quantity: number
}

export interface Users{
    id: string,
    name: string,
    surname: string,
    mail: string,
    imageUrl: string,
    location: Location,
    orders: Orders[]
}