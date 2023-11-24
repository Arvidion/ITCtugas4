const Sequelize = require("sequelize");
const my_db = require('../util/connect_db');

const User = my_db.define("users",{
  id:{
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  fullName:{
    type: Sequelize.STRING,
    allowNull: false
  },
  nim:{
    type: Sequelize.STRING,
    allowNull: false
  },
  angkatan:{
    type: Sequelize.INTEGER,
    allowNull: false
  },
  profilePicture:{
    type: Sequelize.TEXT,
    allowNull: true
  },
  email:{
    type: Sequelize.STRING,
    allowNull: false
  },
  password:{
    type: Sequelize.STRING,
    allowNull: false
  }, 
  role:{
    type: Sequelize.ENUM("MEMBER", "ADMIN"),
    allowNull: false
  }
})

module.exports = User;