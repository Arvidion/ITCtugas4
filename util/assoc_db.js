require("dotenv").config();
const Division = require('../model/Division');
const User = require('../model/User');
const my_db = require('./connect_db');
const bcrypt = require('bcrypt');

const divisi_itc = [
  {name: "WEB DEV"},
  {name: "MOBILE DEV"},
  {name: "PM"},
  {name: "INKADIV"},
  {name: "UI/UX"}
]

const adminPassword = process.env.ADMIN_PWD;
const hashedPwd = bcrypt.hashSync(adminPassword, 10);

const admin = {
  fullName: process.env.ADMIN_FULLNAME,
  nim: process.env.ADMIN_NIM,
  email: process.env.ADMIN_EMAIL,
  angkatan: process.env.ADMIN_ANGKATAN,
  password: hashedPwd,
  //INKADIV merupakan element ke 4 dari object divisi
  divisionId: 4,
  role: "ADMIN"
}

//one to many Division to User
Division.hasMany(User);
User.belongsTo(Division);

const association = async()=>{
  try {
    await my_db.sync({force: false});
    //Division.bulkCreate(divisi_itc);
    //await User.create(admin);
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = association;