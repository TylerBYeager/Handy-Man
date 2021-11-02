const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pending extends Model{}

Pending.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      date: {
        type: DataTypes.DATE,
        defaultValue: sequelize.NOW,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      vendor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        References: {
            model: 'vendor',
            key: 'id',
        },
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        References: {
            model: 'user',
            key: 'id',
        },
      },
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        References: {
            model: 'category',
            key: 'id',
        },
      },
      approved: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
      },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'pending',
    }
)

    module.exports = Pending;