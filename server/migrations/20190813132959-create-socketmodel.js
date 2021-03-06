module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('socketmodels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      token: {
        type: Sequelize.STRING
      },
      userName: {
        type: Sequelize.STRING
      },
      login: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING
      },
      ban: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN
      },
      typing: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN
      },
      error: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('socketmodels');
  }
};