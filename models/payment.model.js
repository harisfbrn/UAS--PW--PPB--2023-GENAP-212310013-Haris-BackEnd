import { DataTypes, Sequelize } from "sequelize";
import {v4 as uuidv4} from "uuid";

uuidv4();
// Create the model of schedule
const paymentModel = (sequelize, Sequelize) => {
    const payment = sequelize.define("payment", {
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
        fullName: {
            type: DataTypes.STRING(25),
            defaultValue: "",
            allowNull: false
        },
        noHp: {
            type: DataTypes.STRING(15),
            defaultValue: "",
            allowNull: false
        },
        category: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        },
        totalPay: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        paid: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        paidType: {
            type: DataTypes.STRING(20),
            defaultValue: "",
            allowNull: false
        },
        change: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
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
    return payment;
};

export default paymentModel;