const jwt = require('jsonwebtoken');
const config = require('./config.js'); //ficheiro de configuração

let checkToken = (req, res, next) => {
  let token = req.headers['x-access-token'] || req.headers['authorization'];
  if (token.startsWith('Bearer ')) {
    token = token.slice(7, token.length);
  }
  if (token) {
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
      if (err) {
        return res.json({
          success: false,
          message: 'O token não é válido.'
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.json({
      success: false,
      message: 'Tokenindisponível.'
    });
  }
};
module.exports = {
  checkToken: checkToken
}