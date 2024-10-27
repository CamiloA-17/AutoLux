export type Vehicle = {
    id: number;
    name: string;
    model: string;
    zeroToHundredTime: number;
    horsepower: number;
    maxSpeed: number;
    engine: string;
    image: string;
}

export type UserRole = {
    id: string;
    nombre: string;
    descripcion: string;
};

export type User = {
    id: string;
    name: string;
    email: string;
    role: UserRole;
};