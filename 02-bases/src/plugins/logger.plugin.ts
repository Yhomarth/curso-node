import winston, {format}  from 'winston'
const { combine, timestamp, json } = format; 


export const logger = winston.createLogger({
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

export const  buildLogger = (service : string) =>{

    return {
        log : (message : string) => {
         
            logger.log('info', { message, service} )
        },

        error : (message : string) => {
            logger.error('error', { message, service} )
        }
    }

}