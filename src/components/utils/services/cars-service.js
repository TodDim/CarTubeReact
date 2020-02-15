import requester from "../requester"
// import authService from '../services/authService'

   
    function getAllCars() {
        const endpoint = `cars?query={}&sort={"_kmd.ect": -1}`;

        return requester.get('appdata', endpoint, 'kinvey');
    }

    function create(brand, description, fuel, imageUrl, model, price, seller, title, year) {
        const data = { brand, description, fuel, imageUrl, model, price, seller, title, year };

        return requester.post('appdata', 'cars', 'kinvey', data);
    }

    function getCarById(carId) {
        const endpoint = `cars/${carId}`;

        return requester.get('appdata', endpoint, 'kinvey');
    }

    function edit(carId, brand, description, fuel, imageUrl, model, price, seller, title, year) {
        
        const endpoint = `cars/${carId}`;
        let data = { brand, description, fuel, imageUrl, model, price, seller, title, year };

        return requester.update('appdata', endpoint, 'kinvey', data);
    }

    function remove(carId) {
        const endpoint = `cars/${carId}`;

        return requester.remove('appdata', endpoint, 'kinvey');
    }

    function getMyCars(username) {
        const endpoint = `cars?query={"seller":"${username}"}&sort={"_kmd.ect": -1}`;
        return requester.get('appdata', endpoint, 'kinvey');
    }
    
    async function searchCars(brand, model) {
        let foundCars=[]
        await getAllCars().then((cars)=>{
            foundCars=cars
            if(brand!==''){
                foundCars=cars.filter(c=>c.brand.toLowerCase()===brand.toLowerCase())
            }
            if(model!==''){
                foundCars=foundCars.filter(c=>c.model.toLowerCase()===model.toLowerCase())
            }
            
        })
        return foundCars;
      
    }


    export default {
        getAllCars,
        create,
        remove,
        edit,
        getMyCars,
        getCarById,
        searchCars,
    }
;