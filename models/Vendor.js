const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Vendor extends Model{}

Vendor.init(
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
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
            },
        },
    },
    {
        hooks: {
          beforeCreate: async (newVendorData) => {
            newVendorData.password = await bcrypt.hash(newVendorData.password, 10);
            return newVendorData;
          },
          beforeUpdate: async (updatedVendorData) => {
            updatedVendorData.password = await bcrypt.hash(updatedVendorData.password, 10);
            return updatedVendorData;
          },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'vendor',
      })

    module.exports = Vendor;