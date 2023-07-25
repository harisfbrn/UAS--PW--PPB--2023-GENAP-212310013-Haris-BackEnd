import adminModel from "../models/admin.model.js";
import db from "../models/index.js";

const Admin = adminModel;

// Create and save new admin
export const adminCreate = (req, res) => {
    // validasi request
    if (!req.body.email) {
        res.status(400).send({
            message: "Content can not be empty!!"
        });
        return;
    };

    // Create a admin
    const admin = {
        email: req.body.email,
        password: req.body.password,
        fullName: req.body.fullName,
        noHp: req.body.noHp,
        address: req.body.address
    };

    // Save the admin to database
    db.admin.create(admin)
    .then(data => {
        res.send("Admin create successfully..");
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the admin"
        });
    });
};

// Retrieve all admin from database
export const adminFindAll = (req, res) => {
    db.admin.findAll()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occured while retrieving admin"
        });
    });
};

// Find a single admin with an email
export const adminFindOne = (req, res) => {
    const email = req.params.email;

    db.admin.findOne({where: {email: email}})
    .then(data => {
        if(!data) {
            res.status(404).send({
                message: `Cannot find admin with email ${email}`
            })
        } else {
            res.send(data);
        };
    })
    .catch(err => {
        res.status(500).send({
            message: `Error retrieving admin with email: ${email}`
        });
    });
};

// Update admin with an email
export const adminUpdate = (req, res) => {
    const email = req.params.email;

    db.admin.update(req.body, {
      where: { email: email }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Admin was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Admin with email =${email}. Maybe Admin was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: `Error updating Admin with email = ${email}`
        });
      });
};

// Delete admin with an email
export const adminDelete = (req, res) => {
    const email = req.params.email;
  
    db.admin.destroy({
      where: { email: email }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Admin was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Admin with id=${email}. Maybe Admin was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: `Could not delete Admin with email = ${email}`
        });
      });
};

// Delete all Admin from the database.
export const adminDeleteAll = (req, res) => {
    db.admin.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} admin were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all admin."
        });
      });
  };