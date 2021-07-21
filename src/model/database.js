var Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'd7vs6j2c75jq23',
    'keghkvjtnpouuo',
    'c7c701f9997743c4bb9b08f3cedd83c3c87c5e32c49dd527e8c94d2a6be7ec66',
    {
        host: 'ec2-35-174-56-18.compute-1.amazonaws.com',
        port: '5432',
        dialect: 'postgres',
        dialectOptions:{
            ssl:{
                rejectUnauthorized: false,
            }
        }
    },

);
module.exports = sequelize;