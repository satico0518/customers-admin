export type UserType = 'SHOP' | 'CUSTOMERS';
export type GenreType = 'Masculino' | 'Femenino';
export type idType = 'Masculino' | 'Femenino';

export type IUser = {
    documentId: string,
    firebaseId: string,
    name: string,
    address: string,
    email: string,
    type: UserType,
    maxDate: any
}

export type IShop = IUser & {
    nit: string,
    branchName: string,
    city: string,
    phone: string,
    contactName: string,
}

export type ICustomer = IUser & {
    lastName: string,
    birthDate: string,
    contact: string,
    genre: GenreType,
    identification: string,
    identificationType: string
}