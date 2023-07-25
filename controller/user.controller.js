import db from "../models/index.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../config/auth.config.js";
import path from "path";
import fs from "fs";

const __basedir = path.resolve();

// Create and Save a new User
export const userCreate = async (req, res, next) => {
    // Validate request
    if (!req.body.email) {
      res.status(400).send({
         message: req.body.email });
         return;
    }

    if (!req.body.nik) {
      res.status(400).send({
         message: req.body.nik });
         return;
    }
// upload foto anda fotoKtp function
    const uploadFile = (req, res, next) => {
      try {
        console.log(req.file);
  
        if (req.file == undefined) {
          return;
        }

        user.foto = req.file.originalname;
        fs.writeFileSync(
          __basedir + "/resource/static/assets/uploads/" + req.file.filename, req.file.buffer
          );
          next();
        }
        catch (error) {
          console.log(error);
          res.send(`Error when trying upload images: ${error}`);
        };
        const save = fs.writeFileSync(user.foto, file.originalname);
        return save;
      };
      
      const uploadFileKtp = (req, res, next) => {
        try {
          console.log(req.file);
          if (req.file == undefined) {
            return;
          }
          user.fotoKtp = req.file.filename;
          fs.writeFileSync(
            __basedir + "/resource/static/assets/uploads/" + req.file.filename, req.file.buffer
            );
            next();
          }
          catch (error) {
            console.log(error);
            res.send(`Error when trying upload images: ${error}`);
          };
        };
        // bcrypt user password using jwt
        const hashedPassword = bcrypt.hashSync(req.body.password, 8);
        
        const user = {
          email: req.body.email,
          password: hashedPassword,
          nik: req.body.nik,
          fullName: req.body.fullName,
          gender: req.body.gender,
          noHp: req.body.noHp,
          address: req.body.address
        };

        // let foto;
        // let fotoKtp;
        try {
          uploadFile(req, res, next);
        } catch (error) {
          console.error(error);
          return res.status(500).send(`Error when trying to upload images: ${error}`);
        }
        
        try {
          uploadFileKtp(req, res, next);
        } catch (error) {
          console.error(error);
          return res.status(500).send(`Error when trying to upload KTP images: ${error}`);
        }
        
        db.user.create(user)
        .then((data) => {
          res.send("User created successfully.");
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message + ", Email was registered..!!" || "Some error occurred while creating the user.",
          });
        });
      };

export const uploadDestination = path.join(__basedir, "resource/static/assets/");

// User Sign In
export const userSignIn = async (req, res) => {
const user = await db.user.findOne({where: {
      email: req.body.email}
    });

  if (!user) {
    return res.status(404).send({ message: "User Not found." });
  };
  // res.send(user.password);
  const cekPw = await bcrypt.compare(req.body.password, user.password);
      // res.send(cekPw);
      if (cekPw) {
        // check user password using jwt
        const token = jwt.sign({ id: user.id }, config.secret, {
          expiresIn: 15552000 // 6 months
        });
        res.status(200).send({
          id: user.id,
          fullName: user.fullName,
          email: user.email,
          accessToken: token
        })
      } else {
          return res.status(401).send({
            accessToken: null,
            message: "Invalid Password!"
          });
        }
      };

// Retrieve all User from the database.
export const userFindAll = (req, res) => {
    db.user.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving User."
        });
      });
};

// Find a single User with an email
export const userFindOne = (req, res) => {
    const email = req.params.email;

    db.user.findOne({where: {email: email}})
      .then(data => {
        if (!data) {
            res.status(404).send({
            message: `Cannot find data with email = ${email}.`
        })} else {
            res.send(data);
            console.log(`Ini adalah keyword pencarinya = ${email}`)
        };
      })
      .catch(err => {
        res.status(500).send({
          message: `Error retrieving User with email = ${email}`
        });
      });
};

// Update a User by the email in the request
export const userUpdate = (req, res) => {
    const email = req.params.email;

    db.user.update(req.body, {
      where: { email: email }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update User with email =${email}. Maybe User was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: `Error updating User with email = ${email}`
        });
      });
};

// Delete a User with the specified email in the request
export const userDelete = (req, res) => {
  const email = req.params.email;

  db.user.destroy({
    where: { email: email }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete User with id=${email}. Maybe User was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Could not delete User with email = ${email}`
      });
    });
};

// Delete all User from the database.
export const userDeleteAll = (req, res) => {
  db.user.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} User were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all User."
      });
    });
};

