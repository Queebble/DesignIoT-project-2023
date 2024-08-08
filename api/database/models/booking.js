const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('booking', {
    booking_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    room_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'room',
        key: 'room_id'
      }
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    role_id_booked: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'role',
        key: 'role_id'
      }
    }
  }, {
    sequelize,
    tableName: 'booking',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "booking_pkey",
        unique: true,
        fields: [
          { name: "booking_id" },
        ]
      },
    ]
  });
};
