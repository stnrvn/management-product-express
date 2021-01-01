'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category, {
        foreignKey: "category_id"
      })
    }
  };
  Product.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        isEmpty(name){
          if(!name){
            throw new Error('Nama tidak boleh kosong!')
          }
        }
      }
    },
    sku: DataTypes.STRING,
    quantity: {
      type: DataTypes.INTEGER,
      validate:{
        isEmpty(quantity){
          if(!quantity || quantity < 1){
            throw new Error('Quantity harus lebih dari 0!')
          }
        }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      validate:{
        isEmpty(price){
          if(!price || price < 1){
            throw new Error('Price harus lebih dari 0!')
          }
        }
      }
    },
    is_discontinued: DataTypes.BOOLEAN,
    category_id: {
      type: DataTypes.INTEGER,
      validate:{
        isEmpty(category_id){
          if(!category_id){
            throw new Error('Category harus dipilih!')
          }
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Product',
    hooks: {
      beforeCreate(instance){
        instance.is_discontinued = false
      }
    }
  });
  return Product;
};