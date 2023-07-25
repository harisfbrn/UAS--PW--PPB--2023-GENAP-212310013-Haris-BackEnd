import {DataTypes} from "sequelize";
import {v4 as uuidv4} from "uuid";

uuidv4();
// Create the model of user table
const userModel = (sequelize, Sequelize) => {
    const user = sequelize.define("user", {
        id: {
            type: DataTypes.STRING(50),
            defaultValue: uuidv4,
            allowNull: false,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING(50),
            defaultValue: "",
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            defaultValue: "",
            allowNull: false
        },
        nik: {
            type: DataTypes.STRING(25),
            defaultValue:"",
            allowNull: false
        },
        fullName: {
            type: DataTypes.STRING(25),
            defaultValue:"",
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING(10),
            defaultValue:"",
            allowNull: false
        },
        noHp: {
            type: DataTypes.STRING(15),
            defaultValue:"",
            allowNull: false
        },
        foto: {
            type: DataTypes.STRING,
            defaultValue: "",
            allowNull: true
        },
        fotoKtp: {
            type: DataTypes.STRING,
            defaultValue: "",
            allowNull: true
        },
        address: {
            type: DataTypes.STRING(100),
            defaultValue:"",
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false
        }
    });
    return user;
;}

export default userModel;