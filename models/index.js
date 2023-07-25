import dbConfig from "../config/dbConfig.js";
import Sequelize from "sequelize";

const sequelize = new Sequelize(
  dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: 0,
    pool: {
      max: dbConfig.max,
      min: dbConfig.min,
      acquire: dbConfig.acquire,
      idle: dbConfig.idle
    },
    dialectOptions: dbConfig.dialectOptions,
    timezone: dbConfig.timezone
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

import userModel from "./user.model.js";
import adminModel from "./admin.model.js";
import lapModel from "./lap.model.js";
import orderModel from "./order.model.js";
import scheduleModel from "./schedule.model.js";
import paymentModel from "./payment.model.js";

db.user = userModel(sequelize, Sequelize);
db.admin = adminModel(sequelize, Sequelize);
db.lap = lapModel(sequelize, Sequelize);
db.order = orderModel(sequelize, Sequelize);
db.schedule = scheduleModel(sequelize, Sequelize);
db.payment = paymentModel(sequelize, Sequelize);


export default db;