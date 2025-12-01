const winston = require('winston');
const { combine, timestamp, json } = winston.format; 


const logger = winston.createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    json()
  ),
  transports: [
    //
    // - Write all logs with importance level of `error` or higher to `error.log`
    //   (i.e., error, fatal, but not other levels)
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
    new winston.transports.Console({ format: winston.format.simple() })
  ],
});

module.exports = function buildLogger(service){

    return {
        log : (message) => {
            logger.info('info', { message, service} )
        },

        error : (message) => {
            logger.error('error', { message, service} )
        }
    }

}