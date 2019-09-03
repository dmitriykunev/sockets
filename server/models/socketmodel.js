module.exports = (sequelize, DataTypes) => {
  const socketmodel = sequelize.define('socketmodel', {
    login: DataTypes.STRING,
    token: DataTypes.STRING,
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    ban: DataTypes.BOOLEAN,
    typing: DataTypes.BOOLEAN,
    error: DataTypes.STRING
  }, {});
  socketmodel.associate = function(models) {
    // associations can be defined here
  };
  return socketmodel;
};