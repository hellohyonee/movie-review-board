'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Review.belongsTo(models.User, { foreignKey: 'userId', targetKey: 'userId'  })
    }
  }
  Review.init({
    reviewId: { type: DataTypes.INTEGER, primaryKey: true },
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    year: DataTypes.STRING,
    genre: DataTypes.STRING,
    runtime: DataTypes.STRING,
    poster: DataTypes.STRING,
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};