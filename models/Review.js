const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model{}

Review.init(
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
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        References: {
            model: 'user',
            key: 'id',
        },
      },
      vendor_id: {
        type: DataTypes.INTEGER,
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
        type: DataTypes.INTEGER,
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

    module.exports = Review;