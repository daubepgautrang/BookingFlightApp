const router = require('express').Router();
let Flight = require('../models/flight.model');

router.route('/').get((req,res) => {
    Flight.find()
    .then( flights => res.json(flights))
    .catch( err => res.status(400).json('Error: ' + err));

}) ;

router.route('/add').post((req,res) => {
    const flightID = req.body.flightID;
    const flightName = req.body.flightName;
    const departureDate = Date.parse(req.body.departureDate);
    const arrivalDate = Date.parse(req.body.arrivalDate);
    const arrivalLocation = req.body.arrivalLocation;
    const departureLocation = req.body.departureLocation;
    const airfares = Number(req.body.airfares);
    
    const newFlight = new Flight({
        flightID,
        flightName,
        departureDate,
        arrivalDate,
        arrivalLocation,
        departureLocation,
        airfares,
    });

    newFlight.save()
    .then(() => res.json('Flight added'))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/search/filterticket/').post((req,res)=>{
    Flight.find(
        {arrivalDate:  req.body.arrivalDate ,
         arrivalLocation :req.body.arrivalLocation,
         departureLocation: req.body.departureLocation,
    }
    )
   .then( flight => res.json(flight))
   .catch(err => res.status(400).json('Error: ' + err))

   
})

module.exports = router;