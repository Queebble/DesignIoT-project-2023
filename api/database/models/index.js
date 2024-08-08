const dbConfig = require("../config/config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.movements = require("./movements.js")(sequelize, Sequelize);
db.booking = require("./booking.js")(sequelize, Sequelize);
db.role = require("./role.js")(sequelize, Sequelize);
db.room = require("./room.js")(sequelize, Sequelize);

module.exports = db;
