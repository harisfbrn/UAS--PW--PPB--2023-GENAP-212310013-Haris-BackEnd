import { DataTypes, Sequelize } from "sequelize";
import {v4 as uuidv4} from "uuid";

uuidv4();
// Create the model of schedule
const scheduleModel = (sequelize, Sequelize) => {
    const schedule = sequelize.define("schedule", {
        id: {
            type: DataTypes.STRING(50),
            defaultValue: uuidv4,
            allowNull: false,
            primaryKey: true
        },
        idOrder: {
            type: DataTypes.STRING(50),
            defaultValue: "",
            allowNull: false
        },
        category: {
            type: DataTypes.STRING(50),
            defaultValue: "",
            allowNull: false
        },
        date: {
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW,
            allowNull: false
        },
        clock: {
            type: DataTypes.TIME,
            defaultValue: DataTypes.TIME,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false
        },
        idOrder: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false
        }
    });
    return schedule;
};

export default scheduleModel;