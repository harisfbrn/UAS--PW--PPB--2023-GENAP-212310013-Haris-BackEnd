
const dbConfig = {
    HOST: "localhost",
    USER: "root",
    Password: "",
    DB: "pgbs",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },
    dialectOptions: {
        useUTC: false,
        dateStrings: true,
        typeCast: true
    },
    timezone: '+07:00'
};

export default dbConfig;