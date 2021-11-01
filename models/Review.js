const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Reviews extends Model{}

Reviews.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      review_text: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      vendor_id: {
        type: DataTypes.STRING,
        allowNull: false,
        References: {
            model: 'vendor',
            key: 'id',
        },
      },
      date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      pending_id: {
        type: DataTypes.STRING,
        allowNull: false,
        References: {
            model: 'pending',
            key: 'id',
        },
      },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'reviews',
    }
)

    module.exports = Reviews;