if (process.env.NODE_ENV === 'production'){
  //in production
  module.exports = require('./prod');
}
else {
  //in developement
  module.exports = require('./dev');
}
