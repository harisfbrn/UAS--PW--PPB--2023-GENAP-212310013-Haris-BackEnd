import { DataTypes, Sequelize } from "sequelize";
import {v4 as uuidv4} from "uuid";

uuidv4();
// Create the model of schedule
const orderModel = (sequelize, Sequelize) => {
    const order = sequelize.define("order", {
        id: {
            type: DataTypes.STRING(50),
            defaultValue: uuidv4,
            allowNull: false,
            primaryKey: true
        },
        idUser: {
            type: DataTypes.STRING(50),
            defaultValue: "",
            allowNull: false
        },
        idLapangan: {
            type: DataTypes.STRING(50),
            defaultValue: "",
            allowNull: false
        },
        orderDate: {
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW,
            allowNull: false
        },
        playDate: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false
        },
        totalHours: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        totalPay: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        },
        category: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
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
    return order;
};

export default orderModel;