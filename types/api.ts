export interface Country {
    id: number;
    name: string;
  }
  
export interface Brand {
  id: number;
  name: string;
  countryId: number;
  yearOfEstablishment: number;
  image: string;
}

export interface Article {
  id: number;
  date: string; 
  vehicleId: number;
  title: string;
  content: string;
  updateDate: string; 
}

export interface Role {
  id: number;
  name: string;
  description: string;
}

export interface Register {
  id: string;
  name: string;
  last_name: string;
  email: string;
  age: number;
  password: string;
  role_id: number;
}

export interface RegisterResponse {
  message: string;
  data: {
    name: string;
    password: string;
    role_id: number;
    id: string;
    last_name: string;
    email: string;
    age: number;
  };
}

export interface Login {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  refreshToken: string;
}

export interface User {
  id: string;
  name: string;
  lastName: string;
  email: string;
  age: number;
  password: string;
  roleId: number;
}

export interface Comment {
  id: number;
  date: string;
  userId: string; 
  content: string;
  vehicleId: number;
  likes: number;
  dislikes: number;
}

export interface Vehicle {
  id: number;
  name: string;
  marcaId: number;
  modelo: number;
  topSpeed: number;
  engine: string;
  hp: number;
  image: string;
  acceleration: number;
}