var Sequelize = require('sequelize');
var sequelize = require('./database');

var Clinica = require('./clinica');
var User = require('./user');
var Atraso = require('./atraso')

var marcacao = sequelize.define('marcacao', {
    data: Sequelize.DATEONLY,
    hora: Sequelize.TIME,
    tratatamento: Sequelize.STRING,
    horaatraso: Sequelize.INTEGER,
    obs: Sequelize.STRING,
    clinicaId: {
        type: Sequelize.INTEGER,
        references: {
            model: Clinica,
            key: 'id'
        },
        userId: {
            type: Sequelize.INTEGER,
            references: {
                model: User,
                key: 'id'
            },
            atrasoId: {
                type: Sequelize.INTEGER,
                references: {
                    model: Atraso,
                    key: 'id'
                }
            }
        }
    }
},
    {
        freezeTableName: true,
        timestamps: false,
    });

marcacao.belongsTo(Clinica);
marcacao.belongsTo(User);
marcacao.belongsTo(Atraso);
module.exports = marcacao