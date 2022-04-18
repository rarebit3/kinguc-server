'use strict';



module.exports = {
   up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', 
    [{
      name: 'Marquis Eloy of the Mainframe, Lord of the March of Module',
    username: 'MarqEloy',
    passwordDigest: 'irullthemainframe33',
    magicEmail: 'msauce@outlook.com',
    highAbility: true,
    createdAt: new Date(),
    updatedAt: new Date()
     }, 
     {
      name: 'Duke David of the Database, Ruler of Destructuring',
      username: 'DukeDavid',
      passwordDigest: 'irullthedatabase22',
      magicEmail: 'ddavid@outlook.com',
      highAbility: true,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      name: 'Baron Bond of the Bit, Lord of Git',
      username: 'BaronBond',
      passwordDigest: 'irullthegit11',
      magicEmail: 'BBond@outlook.com',
      highAbility: true,
      createdAt: new Date(),
      updatedAt: new Date()
     }]
     );
    
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users')
  }
};
