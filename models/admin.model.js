import {DataTypes} from "sequelize";
import {v4 as uuidv4} from 'uuid';

uuidv4();
// create the model of admin table
const adminModel = (sequelize, Sequelize) => {
    const admin = sequelize.define("admin", {
        id: {
            type: DataTypes.STRING(50),
            defaultValue: uuidv4,
            allowNull: false,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING(50),
            defaultValue: "",
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(25),
            defaultValue: "",
            alloNnull: false
        },
        fullName: {
            type: DataTypes.STRING(25),
            defaultValue:"",
            allowNull: false
        },
        noHp: {
            type: DataTypes.STRING(15),
            defaultValue:"",
            allowNull: false
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
    return admin;
};

export default adminModel;