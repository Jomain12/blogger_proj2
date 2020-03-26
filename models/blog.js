var Sequelize = require('sequelize');
// var db = require('../config/middleware');

//Creating our User model
module.exports = function(sequelize, DataTypes) {
  var Blog = sequelize.define("blogs", {
    // The name cannot be null, and must be a proper name before creation
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },

    // The password cannot be null
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },

    content: {
        type: DataTypes.STRING,
        allowNull: false
    }
  });

  return Blog;
};



  