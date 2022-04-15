'use strict';
const { User, sequelize} = require('../models')
const user = require('../models/user')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let users = await User.findOne({ order: sequelize.random(), raw: true})
  
    return queryInterface.bulkInsert('regions', 
   [{
    Type: 'Empire',
    name: 'First Bulgarian Empire',
    population: 350,
    numberOfNobles: 1,
    capitalCity: 'Pliska',
    userId: 3,
   createdAt: new Date(),
   updatedAt: new Date()
    }, 
   
    
    {
      Type: 'Kingdom',
      name: 'England',
      population: 879,
      numberOfNobles: 1,
      capitalCity: 'Wnchester, London',
      userId: 1,
     createdAt: new Date(),
     updatedAt: new Date()
      }, 
      {
        Type: 'Duchy',
        name: 'Athens',
        population: 700,
        numberOfNobles: 1,
        userId: 2,
        capitalCity: 'Athens',
       createdAt: new Date(),
       updatedAt: new Date() 
      }]
    );
   
 },

 down: async (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('regions')
 }
};
