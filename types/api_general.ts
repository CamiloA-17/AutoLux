export type Vehicle = {
    id: number;
    name: string;
    model: string;
    zero_to_hundred_time: number;
    horsepower: number;
    max_speed: number;
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
    age: number;
    name: string;
    last_name: string;
    email: string;
    password: string;
    role_id: UserRole;
};

export type Category = {
    id: number;
    name: string;
    items: string[] | { id: string; [key: string]: any }[];
};