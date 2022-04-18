'use strict';
const { Regions, sequelize} = require('../models')
const regions = require('../models/regions')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let regions = await Regions.findOne({ order: sequelize.random(), raw: true})
  
    return queryInterface.bulkInsert('castles', 
   [{
    name: 'Windsor Castle',
    forTypes: 'Kingdom',
    servantCount: 20,
    incomePerCastle: 15000,
    country: 'England',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/%CE%9A%CE%AC%CF%83%CF%84%CF%81%CE%BF_%CE%9A%CE%B1%CF%81%CE%AC%CE%BC%CF%80%CE%B1%CE%BC%CF%80%CE%B1_0039.jpg/200px-%CE%9A%CE%AC%CF%83%CF%84%CF%81%CE%BF_%CE%9A%CE%B1%CF%81%CE%AC%CE%BC%CF%80%CE%B1%CE%BC%CF%80%CE%B1_0039.jpg',
    regionId: 2,
    // userId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
    }, 
    {
      name: 'Pendennis Castle',
    forTypes: 'Kingdom',
    servantCount: 15,
    incomePerCastle: 10000,
    country: 'England',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Pendennis_Castle_keep.jpg/220px-Pendennis_Castle_keep.jpg',
    regionId: 2,
    // userId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
    },
    {
      name: 'Portchester Castle',
    forTypes: 'Kingdom',
    servantCount: 8,
    incomePerCastle: 8000,
    country: 'England',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Portchester_Castle_-_geograph.org.uk_-_1413970.jpg/220px-Portchester_Castle_-_geograph.org.uk_-_1413970.jpg',
    regionId: 2,
    // userId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
    },
    
      {
        name: 'Anevo Fortress Castle',
    forTypes: 'Empire',
    servantCount: 6,
    incomePerCastle: 5000,
    country: 'Bulgaria',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Anevsko_Kale_06.JPG/200px-Anevsko_Kale_06.JPG',
    regionId: 1,
    // userId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
      },
      {
        name: 'Asen Fortress Castle',
        forTypes: 'Empire',
        servantCount: 10,
        incomePerCastle: 6000,
        country: 'Bulgaria',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Asenova_krepost_church_1.jpg/200px-Asenova_krepost_church_1.jpg',
        regionId: 1,
        // userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
        }, 
        {
          name: 'Bada Vida Castle',
        forTypes: 'Empire',
        servantCount: 7,
        incomePerCastle: 9000,
        country: 'Bulgaria',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/%D0%9A%D1%80%D0%B5%D0%BF%D0%BE%D1%81%D1%82%D1%82%D0%B0_%D0%91%D0%B0%D0%B1%D0%B0_%D0%92%D0%B8%D0%B4%D0%B0.JPG/200px-%D0%9A%D1%80%D0%B5%D0%BF%D0%BE%D1%81%D1%82%D1%82%D0%B0_%D0%91%D0%B0%D0%B1%D0%B0_%D0%92%D0%B8%D0%B4%D0%B0.JPG',
        regionId: 1,
        // userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        
        {
          name: 'Agios Andreas Castle',
        forTypes: 'Duchy',
        servantCount: 10,
        incomePerCastle: 2500,
        country: 'Athens',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/St_Andrews_castle_2015_021.jpg/200px-St_Andrews_castle_2015_021.jpg',
        regionId: 3,
        // userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
          }, 
          {
            name: 'Aptera Fortress Castle',
        forTypes: 'Duchy',
        servantCount: 8,
        incomePerCastle: 1500,
        country: 'Athens',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Festung_Firkas_von_Aptera_aus.jpg/200px-Festung_Firkas_von_Aptera_aus.jpg',
        regionId: 3,
        // userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
          },
          {
            name: 'Chalkis Castle',
        forTypes: 'Duchy',
        servantCount: 9,
        incomePerCastle: 3500,
        country: 'Athens',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/%CE%9A%CE%AC%CF%83%CF%84%CF%81%CE%BF_%CE%9A%CE%B1%CF%81%CE%AC%CE%BC%CF%80%CE%B1%CE%BC%CF%80%CE%B1_0039.jpg/200px-%CE%9A%CE%AC%CF%83%CF%84%CF%81%CE%BF_%CE%9A%CE%B1%CF%81%CE%AC%CE%BC%CF%80%CE%B1%CE%BC%CF%80%CE%B1_0039.jpg',
        regionId: 3,
        // userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
          }],
          
    );
   
 },

 down: async (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('castles')
 }
};