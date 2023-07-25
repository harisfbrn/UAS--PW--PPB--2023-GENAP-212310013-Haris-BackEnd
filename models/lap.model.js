import { DataTypes } from "sequelize";
import {v4 as uuidv4} from 'uuid';

uuidv4();
// Create the model of lapangan table 
const lapModel = (sequelize, Sequelize) => {
    const lapangan = sequelize.define("lapangan", {
        id: {
            type: DataTypes.STRING(50),
            defaultValue: uuidv4,
            allowNull: false,
            primaryKey: true,
        },
        namaLapangan: {
            type: DataTypes.STRING(50),
            defaultValue: "",
            allowNull: false
        },
        siangBiasa: {
            type: DataTypes.INTEGER(11),
            defaultValue: 0,
            allowNull: false
        },
        malamBiasa: {
            type: DataTypes.INTEGER(11),
            defaultValue:0,
            allowNull: false
        },
        siangWeekend: {
            type: DataTypes.INTEGER(11),
            defaultValue:0,
            allowNull: false
        },
        malamWeekend: {
            type: DataTypes.INTEGER(11),
            defaultValue:0,
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
    return lapangan;
};

export default lapModel;