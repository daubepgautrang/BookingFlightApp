let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let billSchema = new Schema({
    billID: {
        type: String,
        required: true,
        unique: true,
    },
    flightID: {
        type: String,
        required: true,
    },
    CMND: {
        type: String,
        required: true,
    },
    hoTen: {
        type: String,
        required: true,
    },
    sdt: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    sothetindung: {
        type: String,
        required: true,
    },
    tentrenthe: {
        type: String,
        required: true,
    }
    
    
})

const BillFlight = mongoose.model('billflight', billSchema);
Module.export = BillFlight;