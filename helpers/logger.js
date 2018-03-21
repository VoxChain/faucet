const bunyan = require('bunyan');

const logger = bunyan.createLogger({
  name: 'faucet',
  serializers: bunyan.stdSerializers,
  streams: [{
    level: process.env.LOG_LEVEL || 'info',
    stream: process.stdout,
  },{
    type: 'rotating-file',
    path: '/var/log/faucet.log',
    period: '1d',
    count: 7
  }],
});

module.exports = logger;
