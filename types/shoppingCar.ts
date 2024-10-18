export interface DaoVehicle {
    id: number;
    name: string;
    model: string;
    zeroToHundredTime: number;
    horsepower: number;
    maxSpeed: number;
    engine: string;
    image: string;
}
  
  export type DtoVehicle = Omit<DaoVehicle, 'id' | 'zeroToHundredTime' | 'horsepower' | 'maxSpeed'>