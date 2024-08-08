const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('room', {
    room_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    room_name: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'role',
        key: 'role_id'
      }
    },
    max_capacity: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'room',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "room_pkey",
        unique: true,
        fields: [
          { name: "room_id" },
        ]
      },
    ]
  });
};
