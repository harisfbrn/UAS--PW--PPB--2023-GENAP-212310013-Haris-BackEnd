import lapModel from "../models/lap.model.js";
import db from "../models/index.js";

const Lap = lapModel;

// Create and save new lapangan
export const lapCreate = (req, res) => {
    //  Validasi request
    if(!req.body.namaLapangan){
        res.status(400).send({
            message: "Content can not be empty!!"
        });
    };

    // Create Lapangan
    const lap = {
        namaLapangan: req.body.namaLapangan,
        siangBiasa: req.body.siangBiasa,
        malamBiasa: req.body.malamBiasa,
        siangWeekend: req.body.siangWeekend,
        malamWeekend: req.body.malamWeekend
    };

    // Save the lapangan to database
    db.lap.create(lap)
    .then(data => {
        res.send("Lapangan add successfully..!!!");
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error while adding lapangan"
        });
    });
};

// Retrieve all lapangan from database
export const lapFindAll = (req, res) => {
    db.lap.findAll()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || " Some error while retrieved lapangan"
        });
    });
};

// Find a single lapangan with namaLapangan
export const lapFindOne = (req, res) => {
    const namaLapangan = req.params.namaLapangan;

    db.lap.findOne({where: {namaLapangan: namaLapangan}})
    .then(data => {
        if(!data) {
            res.status(400).send({
                message: err.message|| "Cannot find lapangan"
            });
        } else {
            res.send(data);
        };
    })
    .catch(err => {
        res.status(500).send({
            message: `Error retrieving lapangan : ${namaLapangan}`
        });
    });
};

// Update harga lapangan with nama lapangan 
export const lapUpdate = (req, res) => {
    const namaLapangan = req.params.namaLapangan;

    db.lap.update(req.body, {
        where: {namaLapangan: namaLapangan}
    })
    .then(num => {
        if (num == 1){
            res.send({
                message: "Lapangan was updated successfully..!!"
            });
        } else {
            res.status(400).send({
                message: err.message|| `Cannot update lapangan with nama : ${namaLapangan}`
            });
        };
    })
    .catch(err => {
        res.status(500).send({
            message: err.message|| `Error updating lapangan with nama : ${namaLapangan}`
        });
    });
};

// Delete lapangan with nama lapangan
export const lapDelete = (req, res) => {
    const namaLapangan = req.params.namaLapangan;

    db.lap.destroy({
        where: {namaLapangan: namaLapangan}
    })
    .then(num => {
        res.send({
            message: "lapangan has been deleted.."
        });
    })
    .catch(err => {
        res.status(500).send({
            message: err.message|| `Could not delete lapangan with nama : ${namaLapangan}`
        });
    });
};

// Delete all lapangan from database
export const lapDeleteAll = (req, res) => {
    db.lap.destroy({
        where: {},
        truncate: false
    })
    .then( nums => {
        res.send({message: `${nums} lapangan was deleted from database`});
    })
    .catch(err => {
        res.status(500).send({
            message: err.message|| "Some error occured while remove the lapangan"
        });
    });
}
