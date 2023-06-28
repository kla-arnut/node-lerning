import { Vehicle } from "./model.vehicle.mjs"

export const vehicleResolvers = {
    Query: {
        vehicle() {
            
        },
        vehicles() {
            return Vehicle.findAll()
                .then(vehicle => {
                    return vehicle
                })
        }
    }
}