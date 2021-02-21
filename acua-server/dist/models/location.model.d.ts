import { Entity } from '@loopback/repository';
export declare class Location extends Entity {
    id: number;
    city: string;
    [prop: string]: any;
    constructor(data?: Partial<Location>);
}
export interface LocationRelations {
}
export declare type LocationWithRelations = Location & LocationRelations;
