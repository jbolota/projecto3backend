const express = require('express');
const app = express();

const middleware = require('./middleware');

// Configurar CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
    });
    
const userRouters = require('./routes/userRoute.js');
const especiRouters = require('./routes/especialidadeRoute.js');
const clinicaRouters = require('./routes/clinicaRoute.js')
const marcacaoRouters = require('./routes/marcacaoRoute.js');
const temAtrasoRouters = require('./routes/temAtrasoRoute.js');
const criaNotificacaoRouters = require('./routes/notificacaoRoute.js');
const temEstadoRouters = require('./routes/temEstadoRoute.js');

//Configurações
app.set('port', process.env.PORT || 3000);
//Middlewares
app.use(express.json());

app.use('/users',userRouters);
app.use('/especialidade', middleware.checkToken, especiRouters);
app.use('/clinica', clinicaRouters);
app.use('/marcacao', marcacaoRouters);
//app.use('/geremarcacao', temAtrasoRouters);
app.use('/notificacao', criaNotificacaoRouters);
app.use('/estado', temEstadoRouters);

app.use('/',(req,res)=>{
    res.send("Este é o início do backend, quando não se indicam rotas");
  });
  
app.listen(app.get('port'), () => {
    console.log("Start server on port " + app.get('port'))
})