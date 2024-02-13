const emailCode = require("./emailCode");
const User = require("./User");

//emailCode -> UserId
emailCode.belongsTo(User)
User.hasMany(emailCode)