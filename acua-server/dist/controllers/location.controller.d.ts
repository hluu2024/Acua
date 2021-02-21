import { Count, Filter, Where } from '@loopback/repository';
import { Location } from '../models';
import { LocationRepository } from '../repositories';
export declare class LocationController {
    locationRepository: LocationRepository;
    constructor(locationRepository: LocationRepository);
    create(location: Location): Promise<Location>;
    count(where?: Where<Location>): Promise<Count>;
    find(filter?: Filter<Location>): Promise<Location[]>;
    updateAll(location: Location, where?: Where<Location>): Promise<Count>;
    findById(id: number): Promise<Location>;
    updateById(id: number, location: Location): Promise<void>;
    replaceById(id: number, location: Location): Promise<void>;
    deleteById(id: number): Promise<void>;
}
