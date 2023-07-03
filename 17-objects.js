
const getMaxCapacityFromVehicles = (vehicles) => {
    let maxCapacity = 0;

    for (let i = 0; i < vehicles.length; i++) {
    const vehicle = vehicles[i];

    if(vehicle.capacity > maxCapacity) {
        maxCapacity = vehicle.capacity
    }
}

return maxCapacity;
};

const getFaboriteVehicle = (vehicles) => {

    for (let i = 0; i < vehicles.length; i++){
    const vehicle = vehicles[i]

    if (vehicle.favorite === true) {
        return vehicle
    }
}
}

const person = {
    name: 'Pedro Miguel'
}

const vehicles = [
    {
        model: 'Seat Ibiza',
        capacity: 5,
        favorite: false,
    },
    {
        model: 'Mercedes Vito',
        capacity: 8,
        favorite: false,

    },
    {
        model: 'Kawasaki Ninja',
        capacity: 2,
        favorite: true,

    },
];

const maxCapacity = getMaxCapacityFromVehicles(vehicles)
console.log(`En mis vehículos tengo una capacidad máxima de ${maxCapacity} personas`);

const favoriteVehicle = getFaboriteVehicle(vehicles);
person['vehicle'] = favoriteVehicle

console.log('La persona tiene estos valores:', person);



/*

for (let i = 0; i < vehicles.length; i++){
    const vehicle = vehicles[i]

    if (vehicle.favorite === true) {
        person['vehicle'] = vehicle
    }
}

*/

/*

let maxCapacity = 0;

for (let i = 0; i < vehicles.length; i++) {
    const vehicle = vehicles[i];

    if(vehicle.capacity > maxCapacity) {
        maxCapacity = vehicle.capacity
    }
}

*/