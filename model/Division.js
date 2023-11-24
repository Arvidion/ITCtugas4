const Sequelize = require("sequelize");
const my_db = require("../util/connect_db");

const Division = my_db.define("divisions",{
  id:{
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name:{
    type: Sequelize.ENUM("WEB DEV", "MOBILE DEV",
    "PM", "UI/UX", "INKADIV"),
    allowNull: false
  }
});

module.exports = Division;