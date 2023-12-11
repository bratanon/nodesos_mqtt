import { configure } from 'log4js';

configure({
  appenders: {
    console: {
      type: 'stdout',
      layout: {
        type: 'pattern',
        pattern: '%[[%d{ISO8601}] [%-5.5p] %m%]',
      },
    },
  },
  categories: {
    default: {
      appenders: ['console'],
      level: 'info',
    },
    NodeSOSMQTT: {
      appenders: ['console'],
      level: 'info',
    },
    NodeSOS: {
      appenders: ['console'],
      level: 'OFF',
    },
  },
});
