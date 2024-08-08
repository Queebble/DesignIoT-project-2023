const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('movements', {
    move_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    booking_id: {
      type: DataTypes.INTEGER
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'role',
        key: 'role_id'
      }
    },
    room_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'room',
        key: 'room_id'
      }
    },
    time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    entering: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'movements',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "movements_pkey",
        unique: true,
        fields: [
          { name: "move_id" },
        ]
      },
    ]
  });
};
