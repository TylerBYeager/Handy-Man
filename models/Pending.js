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
        type: DataTypes.DATETIME,
        defaultValue: sequelize.NOW,
      },
      vendor_id: {
        type: DataTypes.STRING,
        allowNull: false,
        References: {
            model: 'vendor',
            key: 'id',
        },
      },
      job_id: {
        type: DataTypes.STRING,
        allowNull: false,
        References: {
            model: 'jobs',
            key: 'id',
        },
      },
      approved: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
      },
      review: {
          type: DataTypes.STRING,
          References: {
            model: 'review',
            key: 'id',
        },    
      }
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