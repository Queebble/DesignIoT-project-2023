var DataTypes = require("sequelize").DataTypes;
var _booking = require("./booking");
var _movements = require("./movements");
var _role = require("./role");
var _room = require("./room");

function initModels(sequelize) {
  var booking = _booking(sequelize, DataTypes);
  var movements = _movements(sequelize, DataTypes);
  var role = _role(sequelize, DataTypes);
  var room = _room(sequelize, DataTypes);

  booking.belongsTo(role, { as: "role_id_booked_role", foreignKey: "role_id_booked"});
  role.hasMany(booking, { as: "bookings", foreignKey: "role_id_booked"});
  movements.belongsTo(role, { as: "role", foreignKey: "role_id"});
  role.hasMany(movements, { as: "movements", foreignKey: "role_id"});
  room.belongsTo(role, { as: "role", foreignKey: "role_id"});
  role.hasMany(room, { as: "rooms", foreignKey: "role_id"});
  booking.belongsTo(room, { as: "room", foreignKey: "room_id"});
  room.hasMany(booking, { as: "bookings", foreignKey: "room_id"});
  movements.belongsTo(room, { as: "room", foreignKey: "room_id"});
  room.hasMany(movements, { as: "movements", foreignKey: "room_id"});

  return {
    booking,
    movements,
    role,
    room,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
